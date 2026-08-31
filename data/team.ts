export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  summary: string;
  highlights: readonly string[];
  pending?: boolean;
};

export const teamMembers: Record<"fa" | "en", readonly TeamMember[]> = {
  fa: [
    {
      id: "majid-sadeghi",
      name: "مجید صادقی",
      role: "مدیر و مدرس زبان انگلیسی",
      image: "/team/majid-sadeghi.webp",
      summary:
        "مدیر مؤسسه و مدرس زبان انگلیسی با بیش از ۱۲ سال تجربه تدریس در مؤسسات برتر تهران و زرین‌شهر؛ همراه زبان‌آموزان در ساختن مسیری اصولی، هدفمند و ماندگار.",
      highlights: [
        "کارشناسی ارشد آموزش زبان انگلیسی",
        "دانشگاه شهید بهشتی تهران",
        "۱۲ سال سابقه تدریس دوره های عمومی و تخصصی",
        "رتبه برتر کنکور زبان انگلیسی ۱۳۹۳",
        "عضویت در مجمع استعدادهای درخشان و سازمان ملی نخبگان ایران",
        "گواهینامه TTC",
        "کارشناسی زبان و ادبیات انگلیسی از دانشگاه شهید بهشتی تهران",
        "کارشناسی ارشد آموزش زبان انگلیسی از دانشگاه شهید بهشتی تهران",
        "گواهینامه MBA فنی‌وحرفه‌ای",
        "گواهینامه پداگوژی فنی‌و‌حرفه‌ای",
        "گواهینامه صلاحیت حرفه‌ای آموزش زبان انگلیسی از دانشگاه فرهنگیان",
        "دبیر رسمی آموزش و پرورش",
        "مربی رسمی سازمان فنی و حرفه‌ای",
        "مشاور تخصصی تحصیلی",
      ],
    },

    {
      id: "sahar-shahriari",
      name: "سحر شهریاری",
      role: "مدرس زبان انگلیسی",
      image: "/team/sahar-shahriari.webp",
      summary:
        "مدرس زبان انگلیسی با سابقه حضور در مؤسسات برتر اصفهان و زرین‌شهر و رویکردی دقیق و همراه برای پیشرفت پیوسته زبان‌آموزان.",
      highlights: [
        "کارشناسی آموزش زبان انگلیسی",
        "دانشگاه دولتی کاشان",
        "گواهینامه TTC کودک و نوجوان",
        "۴ سال سابقه تدریس",
      ],
    },

    {
      id: "fatemeh-ataei",
      name: "فاطمه عطایی",
      role: "متخصص آموزش نوجوانان",
      image: "/team/fatemeh-ataei.webp",
      summary:
        "مدرس زبان انگلیسی با تمرکز تخصصی بر متدهای آموزشی نوجوانان؛ برای تبدیل کلاس به فضایی پویا، قابل‌فهم و متناسب با دنیای نسل نوجوان.",
      highlights: [
        "کارشناسی آموزش زبان انگلیسی",
        "دانشگاه شهید اشرفی اصفهانی",
        "متخصص متدهای آموزشی نوجوانان",
        "مسلط بر روان‌شناسی آموزش",
        "گواهینامه TTC جنرال",
        "گواهینامه TTC نوجوانان",
        "متخصص طراحی و تدوین آزمون‌های دوره‌ای",
        "مسلط بر ICDL",
        "۳ سال سابقه تدریس",
      ],
    },

    {
      id: "sanaz-mohammadi",
      name: "ساناز محمدی",
      role: "متخصص آموزش زبان به کودکان",
      image: "/team/sanaz-mohammadi.webp",
      summary:
        "مدرس زبان انگلیسی با تخصص آموزش به کودکان و توجه ویژه به یادگیری شاد، اصولی و متناسب با ویژگی‌های هر گروه سنی.",
      highlights: [
        "کارشناسی آموزش زبان انگلیسی",
        "گواهینامه TTC نوجوانان",
        "گواهینامه TTC کودکان",
        "مدرک IELTS با نمره 6.5",
        "گواهینامه TTC آیلتس",
        "گواهینامه TTC جنرال",
        "گواهینامه مدیریت آموزشگاه زبان",
        "گواهینامه سوپروایزری آموزشی",
        "۲ سال سابقه تدریس زبان انگلیسی",
      ],
    },

    {
      id: "mobina-hosseini",
      name: "مبینا حسینی",
      role: "مدرس زبان انگلیسی",
      image: "/team/mobina-hosseini.webp",
      summary:
        "مدرس زبان انگلیسی در پرتو آفتاب با استفاده از روش‌های تلفیقی نوین و تمرکز بر خلاقیت، نوآوری و مشارکت فعال زبان‌آموز در کلاس.",
      highlights: [
        "کارشناسی آموزش زبان انگلیسی",
        "دانشگاه نجف‌آباد",
        "روش‌های تلفیقی و خلاقیت‌محور",
      ],
    },

    {
      id: "fatemeh-shabani",
      name: "فاطمه شعبانی",
      role: "کارشناس امور اجرایی",
      image: "/team/fatemeh-shabani.webp",
      summary:
        "عضو تیم اجرایی مؤسسه با سه سال تجربه تخصصی؛ مسئول همراهی منظم و دقیق زبان‌آموزان و خانواده‌ها در مسیر ثبت‌نام و امور آموزشی.",
      highlights: [
        "کارشناسی حقوق",
        "مسلط به زبان انگلیسی",
        "مسلط بر ICDL",
        "۳ سال سابقه فعالیت در امور اداری در محیط آموزشی",
        "مجرب در مدیریت و هماهنگی امور اجرایی، اداری و سازمانی",
        "دارای توانمندی در برنامه‌ریزی، پیگیری امور، هماهنگی و برقراری ارتباط مؤثر با مراجعین، همکاران و زبان‌آموزان",
        "گواهینامه حسابداری و آشنایی با اصول و امور مالی و حسابداری",
      ],
    },

    {
      id: "shaghayegh-farahmand",
      name: "شقایق فرهمند",
      role: "مدرس زبان ترکی استانبولی",
      image: "/team/shaghayegh-farahmand.webp",
      summary:
        "مدرس زبان ترکی استانبولی و عضو دپارتمان زبان ترکی مؤسسه پرتو آفتاب؛ همراه زبان‌آموزان در یادگیری کاربردی و تقویت مهارت‌های ارتباطی.",
      highlights: [
        "مدرس زبان ترکی استانبولی",
        "عضو تیم آموزشی پرتو آفتاب",
        "مسلط بر زبان های ترکی، انگلیسی، آلمانی، هندی و اردو",
        "متخصص دوره های مکالمه محور و زبان‌آموز محور",
        "۶ سال سابقه تدریس زبان ترکی استانبولی",
        "۸ سال سابقه تدریس زبان عمومی و تخصصی آیلتس",
        "کارشناسی مدیریت جهانگردی",
        "تور لیدر بین المللی میراث فرهنگی",
      ],
    },

    {
      id: "negar-heydari",
      name: "نگار حیدری",
      role: "مدرس زبان آلمانی",
      image: "/team/negar-heydari.webp",
      summary:
        "دانش‌آموخته کارشناسی زبان آلمانی از دانشگاه اصفهان، مسلط به زبان انگلیسی و دارای مدرک TTC؛ از رتبه‌های برتر کنکور ۱۴۰۳ و عضو تیم آموزشی پرتو آفتاب.",
      highlights: [
        "کارشناسی زبان آلمانی از دانشگاه اصفهان",
        "تسلط کامل بر زبان انگلیسی و آلمانی",
        "دارای مدرک TTC",
        "رتبه برتر کنکور ۱۴۰۳",
        "گواهینامه راهنمای گردشگری از دانشگاه اصفهان",
        "مسلط به ICDL",
      ],
    },
  ],

  en: [
    {
      id: "majid-sadeghi",
      name: "Majid Sadeghi",
      role: "Director & English Instructor",
      image: "/team/majid-sadeghi.webp",
      summary:
        "Institute director and English instructor with over 12 years of teaching experience at leading institutes in Tehran and Zarrin Shahr, guiding learners toward a structured, purposeful, and lasting learning journey.",
      highlights: [
        "M.A. in English Language Teaching",
        "Shahid Beheshti University, Tehran",
        "12 years of experience teaching general and specialized English courses",
        "Top-ranked in the 2014 Iranian National English Language Entrance Exam",
        "Member of the Iranian Elites Foundation and the Association of Talented Students",
        "TTC Certificate",
        "B.A. in English Language and Literature from Shahid Beheshti University, Tehran",
        "M.A. in English Language Teaching from Shahid Beheshti University, Tehran",
        "MBA Certificate from the Technical and Vocational Training Organization",
        "Pedagogy Certificate from the Technical and Vocational Training Organization",
        "Professional English Language Teaching Competency Certificate from Farhangian University",
        "Official Teacher with the Ministry of Education",
        "Official Instructor with the Technical and Vocational Training Organization",
        "Academic and Educational Consultant",
      ],
    },

    {
      id: "sahar-shahriari",
      name: "Sahar Shahriari",
      role: "English Instructor",
      image: "/team/sahar-shahriari.webp",
      summary:
        "An English instructor with experience at leading institutes in Isfahan and Zarrin Shahr, bringing a precise and supportive approach to steady learner progress.",
      highlights: [
        "B.A. in English Language Teaching",
        "University of Kashan",
        "TTC Certificate in Teaching Children and Teenagers",
        "4 years of teaching experience",
      ],
    },

    {
      id: "fatemeh-ataei",
      name: "Fatemeh Ataei",
      role: "Teen Education Specialist",
      image: "/team/fatemeh-ataei.webp",
      summary:
        "An English instructor specializing in teaching methodologies for teenagers, creating dynamic, accessible, and engaging classes tailored to the world of young learners.",
      highlights: [
        "B.A. in English Language Teaching",
        "Shahid Ashrafi Esfahani University",
        "Specialist in teaching methodologies for teenagers",
        "Proficient in Educational Psychology",
        "General English TTC Certificate",
        "Teen English TTC Certificate",
        "Specialist in designing and developing periodic assessments",
        "Proficient in ICDL",
        "3 years of teaching experience",
      ],
    },

    {
      id: "sanaz-mohammadi",
      name: "Sanaz Mohammadi",
      role: "Young Learner Specialist",
      image: "/team/sanaz-mohammadi.webp",
      summary:
        "An English instructor specializing in children’s education, with a focus on joyful, structured, and age-appropriate learning tailored to the needs of each age group.",
      highlights: [
        "B.A. in English Language Teaching",
        "Teen English TTC Certificate",
        "Children’s English TTC Certificate",
        "IELTS score of 6.5",
        "IELTS TTC Certificate",
        "General English TTC Certificate",
        "Language Institute Management Certificate",
        "Educational Supervision Certificate",
        "2 years of English teaching experience",
      ],
    },

    {
      id: "mobina-hosseini",
      name: "Mobina Hosseini",
      role: "English Instructor",
      image: "/team/mobina-hosseini.webp",
      summary:
        "A Parto Aftab English instructor using modern blended methods with a strong focus on creativity, innovation, and active learner participation in the classroom.",
      highlights: [
        "B.A. in English Language Teaching",
        "Najafabad University",
        "Blended and creativity-focused teaching methods",
      ],
    },

    {
      id: "fatemeh-shabani",
      name: "Fatemeh Shabani",
      role: "Executive Affairs Specialist",
      image: "/team/fatemeh-shabani.webp",
      summary:
        "A member of the institute’s executive team with three years of specialized experience, providing organized and accurate support to learners and families throughout enrollment and academic affairs.",
      highlights: [
        "B.A. in Law",
        "Proficient in English",
        "Proficient in ICDL",
        "3 years of administrative experience in an educational environment",
        "Experienced in managing and coordinating executive, administrative, and organizational affairs",
        "Skilled in planning, follow-up, coordination, and effective communication with clients, colleagues, and learners",
        "Accounting Certificate with knowledge of financial and accounting principles and procedures",
      ],
    },

    {
      id: "shaghayegh-farahmand",
      name: "Shaghayegh Farahmand",
      role: "Turkish Instructor",
      image: "/team/shaghayegh-farahmand.webp",
      summary:
        "A Turkish instructor and member of Parto Aftab’s Turkish Language Department, supporting learners through practical language learning and communication-focused instruction.",
      highlights: [
        "Turkish Language Instructor",
        "Member of the Parto Aftab teaching team",
        "Proficient in Turkish, English, German, Hindi, and Urdu",
        "Specialist in conversation-based and learner-centered courses",
        "6 years of experience teaching Turkish",
        "8 years of experience teaching General English and specialized IELTS courses",
        "B.A. in Tourism Management",
        "International Tour Guide certified by the Cultural Heritage organization",
      ],
    },
    {
      id: "negar-heydari",
      name: "Negar Heydari",
      role: "German Instructor",
      image: "/team/negar-heydari.webp",
      summary:
        "A graduate of the University of Isfahan with a B.A. in German Language, proficient in English and German and TTC-certified. She was also among the top-ranked candidates in Iran’s 2024 national entrance exam and is a member of the Parto Aftab teaching team.",
      highlights: [
        "B.A. in German Language from the University of Isfahan",
        "Proficient in English and German",
        "TTC certified",
        "Top-ranked in Iran’s 2024 national entrance exam",
        "Tour Guide Certificate from the University of Isfahan",
        "Proficient in ICDL",
      ],
    },
  ],
};