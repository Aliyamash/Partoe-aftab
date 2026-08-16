import type { Book, Program } from '@/types/site'

export const instituteEn = {
  name:'Parto Aftab Language Institute', shortName:'Parto Aftab', tagline:'Live the language. Build your world.', established:'October 2024',
  history:[
    'Parto Aftab Language Institute began its journey in October 2024 with a clear purpose: to create a dynamic, academic and motivating environment for learning foreign languages. From day one, we have believed that language learning is more than memorizing words and rules—it is a bridge to the world, personal growth and greater opportunities.',
    'By combining modern teaching methods, committed instructors and a friendly atmosphere, we help learners of every age and level begin with confidence and move steadily toward their educational and professional goals.',
    'Today, Parto Aftab continues to grow through quality education, respect for every learner and a commitment to constant improvement, aiming to become a trusted and inspiring learning center.'
  ],
  mission:'Our mission is to develop capable, creative and confident learners through practical, standardized and high-quality education—so they can communicate, learn, grow and create new opportunities for their future.',
  goals:['Deliver language education using high standards and current teaching methods.','Create a safe, dynamic and motivating environment for every age group.','Build real communication skills for success in education, career and life.','Continuously improve through innovation, teacher development and up-to-date resources.'],
  licenses:['Licensed by Iran Technical and Vocational Training Organization','Licensed by the Ministry of Education'], phones:['031 5522 30945','0939 937 6890','0996 205 8446'], phoneLinks:['031552230945','09399376890','09962058446'], hours:['8:00 AM — 1:00 PM','1:45 PM — 8:45 PM']
}

export const programsEn: Program[] = [
  {title:'General English',description:'Beginner to advanced for children, teens and adults',badge:'EN'},
  {title:'German',description:'A focused path for study, work and immigration',badge:'DE'},
  {title:'Korean',description:'Structured language learning with cultural context',badge:'KO'},
  {title:'Turkish',description:'Practical communication for life, study and connection in Türkiye',badge:'TR'},
  {title:'IELTS & EPT',description:'Exam preparation with a personalized study plan',badge:'EXAM'},
  {title:'Tourism English',description:'Practical communication for travel and tourism',badge:'TRAVEL'},
  {title:'Flexible classes',description:'Private, semi-private and group learning options',badge:'FLEX'}
]

export const booksEn: Book[] = [
  {title:'Family and Friends 1',audience:'A visual, story-led introduction that builds children’s first vocabulary, simple conversations and core English skills.',code:'01',image:'/books/family-and-friends-1.jpg'},
  {title:'Teen2Teen One',audience:'A lively teen course focused on conversation, vocabulary and using English in real-life situations.',code:'02',image:'/books/teen2teen-one.jpg'},
  {title:'Evolve 1',audience:'A structured A1 pathway focused on practical speaking, essential vocabulary and English for real-life situations.',code:'03',image:'/books/evolve-1.jpg'}
]
