import { readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const outputDir = join(projectRoot, 'out')

async function listHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) return listHtmlFiles(path)
    return entry.name.endsWith('.html') ? [path] : []
  }))
  return nested.flat()
}

function toOutputPath(assetUrl) {
  const pathname = decodeURIComponent(assetUrl.split('?')[0]).replace(/^\/+/, '')
  return join(outputDir, ...pathname.split('/'))
}

for (const htmlPath of await listHtmlFiles(outputDir)) {
  let html = await readFile(htmlPath, 'utf8')
  const scriptPattern = /<script\s+([^>]*?)src="([^"]+)"([^>]*)><\/script>/g
  const matches = [...html.matchAll(scriptPattern)]

  for (const match of matches) {
    const [tag, beforeSrc, src, afterSrc] = match
    if (!src.startsWith('/_next/static/')) continue

    const javascript = await readFile(toOutputPath(src), 'utf8')
    const noModule = /\bnoModule\b|\bnomodule\b/i.test(`${beforeSrc} ${afterSrc}`)
    const safeJavascript = javascript.replace(/<\/script/gi, '<\\/script')
    html = html.replace(tag, () => `<script${noModule ? ' nomodule' : ''}>${safeJavascript}</script>`)
  }

  html = html.replace(/<link\s+rel="preload"\s+as="script"[^>]*>/g, '')
  await writeFile(htmlPath, html)
}
