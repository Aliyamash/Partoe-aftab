import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { extname, join, relative, sep } from 'node:path'

const outputDir = join(process.cwd(), 'out')
const distDir = join(process.cwd(), 'dist')
const serverDir = join(distDir, 'server')

const mimeTypes = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf'
}

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map((entry) => {
    const fullPath = join(directory, entry.name)
    return entry.isDirectory() ? listFiles(fullPath) : fullPath
  }))
  return files.flat()
}

await rm(distDir, { recursive: true, force: true })
await mkdir(serverDir, { recursive: true })

const assets = {}
for (const file of await listFiles(outputDir)) {
  const path = `/${relative(outputDir, file).split(sep).join('/')}`
  const body = (await readFile(file)).toString('base64')
  const asset = { body, type: mimeTypes[extname(file).toLowerCase()] || 'application/octet-stream' }
  assets[path] = asset
  if (path === '/index.html') assets['/'] = asset
  if (path.endsWith('.html') && path !== '/index.html') assets[path.slice(0, -5)] = asset
}

const worker = `const assets=${JSON.stringify(assets)};
const decode=(value)=>Uint8Array.from(atob(value),(char)=>char.charCodeAt(0));
export default {async fetch(request){
  const url=new URL(request.url);let path=decodeURIComponent(url.pathname);
  let asset=assets[path]||assets[path.replace(/\\/$/,"")];
  if(!asset) asset=assets["/404.html"];
  const status=assets[path]||assets[path.replace(/\\/$/,"")]?200:404;
  const headers={"content-type":asset.type,"x-content-type-options":"nosniff"};
  if(path.startsWith("/_next/static/")) headers["cache-control"]="public, max-age=31536000, immutable";
  return new Response(request.method==="HEAD"?null:decode(asset.body),{status,headers});
}};`

await writeFile(join(serverDir, 'index.js'), worker)
