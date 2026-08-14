export type TeamMember = {
  id: string
  name: string
  role: string
  image: string
  summary: string
  highlights: readonly string[]
  pending?: boolean
}

export const teamMembers: Record<'fa' | 'en', readonly TeamMember[]> = {
  fa: [
    {
      id: 'majid-sadeghi',
      name: 'مجید صادقی',
      role: 'مدیر و مدرس زبان انگلیسی',
      image: '/team/majid-sadeghi.webp',
      summary: 'مدیر مؤسسه و مدرس زبان انگلیسی با بیش از ۱۲ سال تجربه تدریس در مؤسسات برتر تهران و زرین‌شهر؛ همراه زبان‌آموزان در ساختن مسیری اصولی، هدفمند و ماندگار.',
      highlights: ['کارشناسی ارشد آموزش زبان انگلیسی', 'دانشگاه شهید بهشتی تهران', 'بیش از ۱۲ سال سابقه تدریس']
    },
    {
      id: 'sahar-shahriari',
      name: 'سحر شهریاری',
      role: 'مدرس زبان انگلیسی',
      image: '/team/sahar-shahriari.webp',
      summary: 'مدرس زبان انگلیسی با سابقه حضور در مؤسسات برتر اصفهان و زرین‌شهر و رویکردی دقیق و همراه برای پیشرفت پیوسته زبان‌آموزان.',
      highlights: ['کارشناسی آموزش زبان انگلیسی', 'دانشگاه دولتی کاشان', 'سابقه تدریس در اصفهان و زرین‌شهر']
    },
    {
      id: 'fatemeh-ataei',
      name: 'فاطمه عطایی',
      role: 'متخصص آموزش نوجوانان',
      image: '/team/fatemeh-ataei.webp',
      summary: 'مدرس زبان انگلیسی با تمرکز تخصصی بر متدهای آموزشی نوجوانان؛ برای تبدیل کلاس به فضایی پویا، قابل‌فهم و متناسب با دنیای نسل نوجوان.',
      highlights: ['کارشناسی آموزش زبان انگلیسی', 'دانشگاه شهید اشرفی اصفهانی', 'متخصص متدهای آموزشی نوجوانان']
    },
    {
      id: 'sanaz-mohammadi',
      name: 'ساناز محمدی',
      role: 'متخصص آموزش زبان به کودکان',
      image: '/team/sanaz-mohammadi.webp',
      summary: 'مدرس زبان انگلیسی با تخصص آموزش به کودکان و توجه ویژه به یادگیری شاد، اصولی و متناسب با ویژگی‌های هر گروه سنی.',
      highlights: ['کارشناسی آموزش زبان انگلیسی', 'دانشگاه نجف‌آباد', 'مدرک تخصصی آموزش انگلیسی به کودکان']
    },
    {
      id: 'mobina-hosseini',
      name: 'مبینا حسینی',
      role: 'مدرس زبان انگلیسی',
      image: '/team/mobina-hosseini.webp',
      summary: 'مدرس زبان انگلیسی در پرتو آفتاب با استفاده از روش‌های تلفیقی نوین و تمرکز بر خلاقیت، نوآوری و مشارکت فعال زبان‌آموز در کلاس.',
      highlights: ['کارشناسی آموزش زبان انگلیسی', 'دانشگاه نجف‌آباد', 'روش‌های تلفیقی و خلاقیت‌محور']
    },
    {
      id: 'fatemeh-shabani',
      name: 'فاطمه شعبانی',
      role: 'کارشناس امور اجرایی',
      image: '/team/fatemeh-shabani.webp',
      summary: 'عضو تیم اجرایی مؤسسه با سه سال تجربه تخصصی؛ مسئول همراهی منظم و دقیق زبان‌آموزان و خانواده‌ها در مسیر ثبت‌نام و امور آموزشی.',
      highlights: ['کارشناسی حقوق و حسابداری', 'مسلط به زبان انگلیسی', '۳ سال سابقه تخصصی امور اجرایی']
    },
    {
      id: 'shaghayegh-farahmand',
      name: 'شقایق فرهمند',
      role: 'مدرس زبان ترکی استانبولی',
      image: '/team/shaghayegh-farahmand.webp',
      summary: 'عضو دپارتمان زبان ترکی استانبولی پرتو آفتاب؛ اطلاعات تکمیلی درباره سوابق و تخصص‌های آموزشی به‌زودی به این پروفایل افزوده می‌شود.',
      highlights: ['زبان ترکی استانبولی', 'عضو تیم آموزشی', 'اطلاعات تکمیلی به‌زودی'],
      pending: true
    },
    {
      id: 'amir-mohammadi-qomi',
      name: 'امیرمحمد قمی',
      role: 'عضو تیم آموزشی',
      image: '/team/amir-mohammadi-qomi.webp',
      summary: 'عضو تیم پرتو آفتاب؛ اطلاعات تکمیلی درباره حوزه تدریس، تحصیلات و سوابق حرفه‌ای ایشان به‌زودی به این پروفایل افزوده می‌شود.',
      highlights: ['عضو تیم پرتو آفتاب', 'اطلاعات تکمیلی به‌زودی'],
      pending: true
    },
    {
      id: 'negar-heydari',
      name: 'نگار حیدری',
      role: 'عضو تیم آموزشی',
      image: '/team/negar-heydari.webp',
      summary: 'عضو تیم پرتو آفتاب؛ اطلاعات تکمیلی درباره حوزه تدریس، تحصیلات و سوابق حرفه‌ای ایشان به‌زودی به این پروفایل افزوده می‌شود.',
      highlights: ['عضو تیم پرتو آفتاب', 'اطلاعات تکمیلی به‌زودی'],
      pending: true
    }
  ],
  en: [
    {
      id: 'majid-sadeghi', name: 'Majid Sadeghi', role: 'Director & English Instructor', image: '/team/majid-sadeghi.webp',
      summary: 'Institute director and English instructor with over 12 years of experience at leading institutes in Tehran and Zarrin Shahr, guiding learners through a structured and lasting path.',
      highlights: ['M.A. in English Language Teaching', 'Shahid Beheshti University', '12+ years of teaching experience']
    },
    {
      id: 'sahar-shahriari', name: 'Sahar Shahriari', role: 'English Instructor', image: '/team/sahar-shahriari.webp',
      summary: 'An English instructor with experience at leading institutes in Isfahan and Zarrin Shahr, bringing a precise and supportive approach to steady learner progress.',
      highlights: ['B.A. in English Language Teaching', 'University of Kashan', 'Teaching experience in Isfahan and Zarrin Shahr']
    },
    {
      id: 'fatemeh-ataei', name: 'Fatemeh Ataei', role: 'Teen Education Specialist', image: '/team/fatemeh-ataei.webp',
      summary: 'An English instructor specializing in methods for teenagers, creating dynamic and accessible classes shaped around the world of young learners.',
      highlights: ['B.A. in English Language Teaching', 'Shahid Ashrafi Esfahani University', 'Specialist in teen teaching methods']
    },
    {
      id: 'sanaz-mohammadi', name: 'Sanaz Mohammadi', role: 'Young Learner Specialist', image: '/team/sanaz-mohammadi.webp',
      summary: 'An English instructor specializing in children’s education, with a focus on joyful, structured and age-appropriate learning.',
      highlights: ['B.A. in English Language Teaching', 'Najafabad University', 'Certified in teaching English to children']
    },
    {
      id: 'mobina-hosseini', name: 'Mobina Hosseini', role: 'English Instructor', image: '/team/mobina-hosseini.webp',
      summary: 'A Parto Aftab English instructor using modern blended methods focused on creativity, innovation and active learner participation.',
      highlights: ['B.A. in English Language Teaching', 'Najafabad University', 'Blended, creativity-led methods']
    },
    {
      id: 'fatemeh-shabani', name: 'Fatemeh Shabani', role: 'Executive Affairs Specialist', image: '/team/fatemeh-shabani.webp',
      summary: 'A member of the executive team with three years of specialist experience, supporting learners and families through enrollment and academic coordination.',
      highlights: ['Degrees in Law and Accounting', 'Proficient in English', '3 years in executive affairs']
    },
    {
      id: 'shaghayegh-farahmand', name: 'Shaghayegh Farahmand', role: 'Turkish Instructor', image: '/team/shaghayegh-farahmand.webp',
      summary: 'A member of Parto Aftab’s Turkish department. More information about her educational background and teaching expertise will be added soon.',
      highlights: ['Turkish language', 'Teaching team member', 'More details coming soon'], pending: true
    },
    {
      id: 'amir-mohammadi-qomi', name: 'Amir Mohammad Qomi', role: 'Teaching Team Member', image: '/team/amir-mohammadi-qomi.webp',
      summary: 'A member of the Parto Aftab team. Details about his teaching field, education and professional experience will be added soon.',
      highlights: ['Parto Aftab team member', 'More details coming soon'], pending: true
    },
    {
      id: 'negar-heydari', name: 'Negar Heydari', role: 'Teaching Team Member', image: '/team/negar-heydari.webp',
      summary: 'A member of the Parto Aftab team. Details about her teaching field, education and professional experience will be added soon.',
      highlights: ['Parto Aftab team member', 'More details coming soon'], pending: true
    }
  ]
}
