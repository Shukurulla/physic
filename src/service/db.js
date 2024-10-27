import lesson1Quest from "../../public/lesson1.png";
import lesson1Image from "../../public/lesson-1-7_1.png";
import image_7_2 from "../../public/7_2.png";
import image_7_3 from "../../public/7_3.png";
import image_7_4 from "../../public/7_4.png";
import image_7_5 from "../../public/7_5.png";
import image_7_6 from "../../public/7_6.png";
/* Formula */
import formula1 from "../../public/formula/1.png";
import formula2 from "../../public/formula/2.png";
import formula3 from "../../public/formula/3.png";
import formula4 from "../../public/formula/4.png";
import formula5 from "../../public/formula/5.png";
import formula6 from "../../public/formula/6.png";
import formula7 from "../../public/formula/7.png";
import formula8 from "../../public/formula/8.png";
import formula9 from "../../public/formula/9.png";
import formula10 from "../../public/formula/10.png";
import formula11 from "../../public/formula/11.png";
import formula12 from "../../public/formula/12.png";
import formula13 from "../../public/formula/13.png";
import formula14 from "../../public/formula/14.png";
import formula15 from "../../public/formula/15.png";

// Images
import image1 from "../../public/images/1.png";
import image2 from "../../public/images/2.png";
import image3 from "../../public/images/3.png";
import image4 from "../../public/images/4.png";
import image5 from "../../public/images/5.png";

export const quiz = {
  topic: "Fizika",
  perQuestionScore: 5,
  questions: [
    {
      question: "Atomlar haqida ilk bor fikr bildirgan olim kim?",
      choices: ["Demokrit", "Aristotel", "Nyuton", "Farobiy"],
      correctAnswer: "Demokrit",
    },

    {
      question:
        "Elektronlarning yadro atrofida orbitalar bo'ylab harakatlanishi qaysi modelga xos?",
      choices: [
        "Bor modeli",
        "Tomson modeli",
        "Dalton modeli",
        "Rezerford modeli",
      ],
      correctAnswer: "Rezerford modeli",
    },
    {
      question:
        "Elektronlarning yadro atrofida orbitalar bo'ylab harakatlanishi qaysi modelga xos?",
      choices: [
        "Bor modeli",
        "Tomson modeli",
        "Dalton modeli",
        "Rezerford modeli",
      ],
      correctAnswer: "Rezerford modeli",
    },
    {
      question:
        "Bohr modeli bo'yicha atomdagi elektronlar qachon nur chiqaradi yoki yutadi?",
      choices: [
        "Elektronlar o'z orbitalarida harakatlanayotganda",
        "Elektronlar bir orbitadan ikkinchisiga o'tganda",
        "Elektronlar o'z orbitasida turib nurlanadi",
        "Elektronlar yadroga yaqinlashganda",
      ],
      correctAnswer: "Elektronlar bir orbitadan ikkinchisiga o'tganda",
    },
    {
      question: "Atomning eng birinchi modeli kim tomonidan taklif etilgan?",
      choices: ["Nyuton", "Bor", "Tomson", "Rezerford"],
      correctAnswer: "Tomson",
    },
    {
      question:
        "O'zbekistonning qaysi universitetida yadro fizikasi yo'nalishi bo'yicha ilmiy izlanishlar olib boriladi?",
      choices: [
        "Toshkent Davlat Universiteti",
        "Samarqand Davlat Universiteti",
        "Buxoro Davlat Universiteti",
        "Nukus Davlat Universiteti",
      ],
      correctAnswer: "Toshkent Davlat Universiteti",
    },
    {
      question:
        "O'zbekistonda yadro fizikasi bo'yicha tadqiqotlarni qaysi tashkilot muvofiqlashtiradi?",
      choices: [
        "Yadro Tadqiqotlari Instituti",
        "Fanlar Akademiyasi",
        "Energetika Vazirligi",
        "Mudofaa Vazirligi",
      ],
      correctAnswer: "Fanlar Akademiyasi",
    },
    {
      question: "Atomning spektral chiziqlari haqida ma'lumot bergan olim kim?",
      choices: ["Bor", "Rezerford", "Balmer", "Tomson"],
      correctAnswer: "Balmer",
    },
    {
      question:
        "O'zbekistonda qaysi yilga qadar birinchi atom elektr stansiyasi qurilishi rejalashtirilgan?",
      choices: ["2025", "2030", "2040", "2050"],
      correctAnswer: "2025",
    },
    {
      question: "Rezerfordning atom modeli qaysi yilda taklif etilgan?",
      choices: ["1903", "1911", "1920", "1932"],
      correctAnswer: "1911",
    },
    // {
    //   question: "Rezerford modeli qaysi tamoyilga zid bo'lib chiqdi?",
    //   choices: [
    //     "Klassik mexanika va elektrodinamika tamoyillariga",
    //     "Nyuton mexanikasiga",
    //     "Atomning massasiga",
    //     "Elektronlarning spektral chiziqlariga",
    //   ],
    //   correctAnswer: "Klassik mexanika va elektrodinamika tamoyillariga",
    // },
    // {
    //   question:
    //     "O'zbekiston Yadro Tadqiqotlari Instituti qachon tashkil etilgan?",
    //   choices: ["1956-yilda", "1960-yilda", "1970-yilda", "1980-yilda"],
    //   correctAnswer: "1956-yilda",
    // },
    // {
    //   question: "O'zbekiston Yadro Tadqiqotlari Instituti qayerda joylashgan?",
    //   choices: ["Samarqand", "Toshkent", "Nukus", "Buxoro"],
    //   correctAnswer: "Toshkent",
    // },
    // {
    //   question:
    //     "O'zbekiston Yadro Tadqiqotlari Instituti qanday sohalarda ishlaydi?",
    //   choices: [
    //     "Energetika va texnologiya",
    //     "Tibbiyot va qishloq xo'jaligi",
    //     "Biologiya va ekologiya",
    //     "Yuqoridagilarning barchasi",
    //   ],
    //   correctAnswer: "Yuqoridagilarning barchasi",
    // },
    // {
    //   question: "Bohr postulatlaridan biri qaysi?",
    //   choices: [
    //     "Atomning ichki tuzilishi haqida",
    //     "Elektronlarning spektral chiziqlari haqida",
    //     "Elektronlarning stasionar orbitalari haqida",
    //     "Atomning massasi haqida",
    //   ],
    //   correctAnswer: "Elektronlarning stasionar orbitalari haqida",
    // },
    // {
    //   question: "Radioaktivlik kim tomonidan kashf etilgan?",
    //   choices: ["Rezerford", "Bekkerel", "Kyuri", "Dalton"],
    //   correctAnswer: "Bekkerel",
    // },
    // {
    //   question:
    //     "Radioaktiv elementlardan qaysi biri uran rudasi ichidan ajratib olingan?",
    //   choices: ["Poloniy", "Uran", "Toriy", "Karbon"],
    //   correctAnswer: "Poloniy",
    // },
    // {
    //   question: "Atom yadrosi nimadan iborat?",
    //   choices: [
    //     "Elektron va proton",
    //     "Proton va neytron",
    //     "Proton va elektron",
    //     "Neytron va elektron",
    //   ],
    //   correctAnswer: "Proton va neytron",
    // },
    // {
    //   question: "Rezerfordning tadqiqotlariga ko'ra, atomning o'lchami qanday?",
    //   choices: ["10^-10 m", "10^-15 m", "10^-20 m", "10^-25 m"],
    //   correctAnswer: "10^-10 m",
    // },
    // {
    //   question: "Massa defekti deganda nimani tushunamiz?",
    //   choices: [
    //     "Atomning massasini",
    //     "Nuklonlarning massasini",
    //     "Nuklonlarning umumiy massasi va yadro massasi o'rtasidagi farqni",
    //     "Elektronlarning massasini",
    //   ],
    //   correctAnswer:
    //     "Nuklonlarning umumiy massasi va yadro massasi o'rtasidagi farqni",
    // },
    // {
    //   question: "Bohr postulatlarining ikkinchisi nima haqida?",
    //   choices: [
    //     "Elektronlarning stasionar orbitalari",
    //     "Elektronlarning energetik holatlari",
    //     "Elektronlarning nur chiqarishi va yutishi",
    //     "Atomning massasi",
    //   ],
    //   correctAnswer: "Elektronlarning nur chiqarishi va yutishi",
    // },
    // {
    //   question: "Atom yadrosining zaryad sanisi nimani ifodalaydi?",
    //   choices: [
    //     "Yadrodagi protonlar sonini",
    //     "Yadrodagi neytronlar sonini",
    //     "Elektronlar sonini",
    //     "Atomning umumiy massasini",
    //   ],
    //   correctAnswer: "Yadrodagi protonlar sonini",
    // },
    // {
    //   question: "Izotoplar deganda nimani tushunamiz?",
    //   choices: [
    //     "Protonlar soni bir xil, massa soni turli elementlar",
    //     "Protonlar va neytronlar soni bir xil elementlar",
    //     "Elektronlar soni bir xil, protonlar soni turli elementlar",
    //     "Neytronlar soni bir xil, protonlar soni turli elementlar",
    //   ],
    //   correctAnswer: "Protonlar soni bir xil, massa soni turli elementlar",
    // },
    // {
    //   question:
    //     "O'zbekistonning qaysi viloyatida yadro chiqindilari saqlanadi?",
    //   choices: ["Toshkent", "Samarqand", "Navoi", "Qashqadaryo"],
    //   correctAnswer: "Navoi",
    // },
    // {
    //   question: "Alfa nurlanishi nima?",
    //   choices: [
    //     "Elektronlar oqimi",
    //     "Geliy yadrolari oqimi",
    //     "Fotokvantlar oqimi",
    //     "Neytronlar oqimi",
    //   ],
    //   correctAnswer: "Geliy yadrolari oqimi",
    // },
    // {
    //   question:
    //     "O'zbekistonda qaysi radioaktiv izotoplar tibbiyotda keng qo'llaniladi?",
    //   choices: [
    //     "Poloniy va Radon",
    //     "Yod va Teknesiy",
    //     "Uran va Toriy",
    //     "Kaliy va Karbon",
    //   ],
    //   correctAnswer: "Yod va Teknesiy",
    // },
    // {
    //   question:
    //     "O'zbekiston Respublikasida yadroviy xavfsizlikni ta'minlash uchun qanday choralar ko'riladi?",
    //   choices: [
    //     "Xodimlar maxsus kiyimlarda ishlaydi",
    //     "Reaktorlarda suv va beton bilan himoyalanadi",
    //     "Har kuni nazorat o'tkaziladi",
    //     "Yadro chiqindilari ko'miladi",
    //   ],
    //   correctAnswer: "Reaktorlarda suv va beton bilan himoyalanadi",
    // },
    // {
    //   question: "Scintillyatsion hisoblagich qanday printsipda ishlaydi?",
    //   choices: [
    //     "Gaz ionlanishi",
    //     "Fotonlarning fotokimyoviy ta'siri",
    //     "Tez zaryadlangan zarrachalarning florastatsion ekranga tushishi",
    //     "Elektronlarning magnit maydoni",
    //   ],
    //   correctAnswer:
    //     "Tez zaryadlangan zarrachalarning florastatsion ekranga tushishi",
    // },
    // {
    //   question: "Bor radiusi nima?",
    //   choices: [
    //     "Atom yadrosi radiusi",
    //     "Elektron orbitasi radiusi",
    //     "Proton radiusi",
    //     "Elektronning erkin holatda radiusi",
    //   ],
    //   correctAnswer: "Elektron orbitasi radiusi",
    // },
  ],
};

export const quiz_1 = {
  topic: "Lazer va ularning turlari",
  questions: [
    {
      question: "Lazer so'zining to'liq ma'nosi nima?",
      choices: [
        "Light Amplification by Stimulated Emission of Radiation",
        "Light Absorption by Stimulated Emission of Radiation",
        "Light Amplification by Spontaneous Emission of Radiation",
        "Light Absorption by Spontaneous Emission of Radiation",
      ],
      correctAnswer: "Light Amplification by Stimulated Emission of Radiation",
    },
    {
      question: "Lazerning asosiy ishlash prinsipi qaysi jarayonga asoslangan?",
      choices: [
        "Spontan nurlanish",
        "Majburiy nurlanish",
        "Infraqizil nurlanish",
        "Ultrabinafsha nurlanish",
      ],
      correctAnswer: "Majburiy nurlanish",
    },
    {
      question:
        "Quyidagi lazer turlaridan qaysi biri qattiq jismli lazerga misol bo'ladi?",
      choices: [
        "Geliy-neon lazeri",
        "Yoqtosh lazeri",
        "Karbonat angidrid lazeri",
        "Argon lazeri",
      ],
      correctAnswer: "Yoqtosh lazeri",
    },
    {
      question: "Tibbiyotda ko'pincha qaysi turdagi lazer ishlatiladi?",
      choices: [
        "Yarim o'tkazgichli lazer",
        "Gaz lazeri",
        "Suyuqlik lazeri",
        "Erkin elektronli lazer",
      ],
      correctAnswer: "Yarim o'tkazgichli lazer",
    },
    {
      question:
        "Lazer nurining qaysi xususiyati uni oddiy yorug'likdan farqlaydi?",
      choices: [
        "Monoxromatikligi",
        "Yorqinligi",
        "Yo'naltirilganligi",
        "Barcha yuqoridagilar",
      ],
      correctAnswer: "Barcha yuqoridagilar",
    },
    {
      question: "Qaysi lazer turi eng yuqori quvvatga ega bo'lishi mumkin?",
      choices: [
        "Yarim o'tkazgichli lazer",
        "Gaz lazeri",
        "Kimyoviy lazer",
        "Erkin elektronli lazer",
      ],
      correctAnswer: "Erkin elektronli lazer",
    },
    {
      question:
        "Lazerning qaysi xususiyati ularni aloqa tizimlarida ishlatishga imkon beradi?",
      choices: [
        "Yuqori energiya",
        "Kuchli yo'naltirilganlik",
        "Keng spektr",
        "Past chastota",
      ],
      correctAnswer: "Kuchli yo'naltirilganlik",
    },
    {
      question:
        "Quyidagilardan qaysi biri sanoatda metall kesish uchun eng ko'p ishlatiladi?",
      choices: [
        "Rubin lazeri",
        "Karbonat angidrid lazeri",
        "Geliy-neon lazeri",
        "Argon lazeri",
      ],
      correctAnswer: "Karbonat angidrid lazeri",
    },
    {
      question: "Lazer nurining kogerentligi nima degani?",
      choices: [
        "Nurning bir xil chastotaga ega bo'lishi",
        "Nurning bir xil fazaga ega bo'lishi",
        "Nurning bir xil yo'nalishga ega bo'lishi",
        "Nurning bir xil chastota va fazaga ega bo'lishi",
      ],
      correctAnswer: "Nurning bir xil chastota va fazaga ega bo'lishi",
    },
    {
      question: "Qaysi lazer turi ko'z jarrohligida ko'pincha ishlatiladi?",
      choices: [
        "Rubin lazeri",
        "Eksimer lazeri",
        "Yoqtosh lazeri",
        "Karbonat angidrid lazeri",
      ],
      correctAnswer: "Eksimer lazeri",
    },
  ],
};

export const quiz_2 = {
  topic: "Atom yadrosining tarkibi. Bog'lanish energiyasi. Massa defekti",
  questions: [
    {
      question: "Atom yadrosining asosiy tarkibiy qismlari qaysilar?",
      choices: [
        "Elektronlar va protonlar",
        "Protonlar va neytronlar",
        "Neytronlar va elektronlar",
        "Protonlar, neytronlar va elektronlar",
      ],
      correctAnswer: "Protonlar va neytronlar",
    },
    {
      question: "Massa defekti nima?",
      choices: [
        "Yadroning haqiqiy massasi",
        "Yadroni tashkil etuvchi nuklonlar massalarining yig'indisi",
        "Yadroni tashkil etuvchi nuklonlar massalari yig'indisi bilan yadroning haqiqiy massasi orasidagi farq",
        "Yadro massasining elektron massasiga nisbati",
      ],
      correctAnswer:
        "Yadroni tashkil etuvchi nuklonlar massalari yig'indisi bilan yadroning haqiqiy massasi orasidagi farq",
    },
    {
      question: "Bog'lanish energiyasi qanday aniqlanadi?",
      choices: ["E = mc²", "E = hv", "E = ½mv²", "E = mgh"],
      correctAnswer: "E = mc²",
    },
    {
      question:
        "Qaysi element yadrosi eng katta solishtirma bog'lanish energiyasiga ega?",
      choices: ["Vodorod", "Uran", "Temir", "Geliy"],
      correctAnswer: "Temir",
    },
    {
      question:
        "Yadro reaksiyasida energiya ajralishi yoki yutilishini nima belgilaydi?",
      choices: [
        "Reaksiya mahsulotlarining massasi",
        "Boshlang'ich va oxirgi yadrolar massalarining farqi",
        "Reaksiyada ishtirok etayotgan yadrolar soni",
        "Yadrolarning zaryadi",
      ],
      correctAnswer: "Boshlang'ich va oxirgi yadrolar massalarining farqi",
    },
    {
      question: "Atom yadrosidagi nuklonlar soni nimani bildiradi?",
      choices: [
        "Atom massasini",
        "Yadro zaryadini",
        "Mass sonini",
        "Neytronlar sonini",
      ],
      correctAnswer: "Mass sonini",
    },
    {
      question:
        "Agar yadrodagi protonlar soni 26 va neytronlar soni 30 bo'lsa, bu elementning mass soni nechaga teng?",
      choices: ["26", "30", "56", "4"],
      correctAnswer: "56",
    },
    {
      question:
        "Quyidagi formulalardan qaysi biri yadroning bog'lanish energiyasini ifodalaydi?",
      choices: [
        "E_bog' = (Zm_p + Nm_n - M_yadr)c²",
        "E_bog' = (Zm_p + Nm_n + M_yadr)c²",
        "E_bog' = (M_yadr - Zm_p - Nm_n)c²",
        "E_bog' = (Zm_p - Nm_n - M_yadr)c²",
      ],
      correctAnswer: "E_bog' = (Zm_p + Nm_n - M_yadr)c²",
    },
    {
      question: "Yadro kuchlari qanday masofada ta'sir qiladi?",
      choices: ["10^-15 m", "10^-10 m", "10^-5 m", "10^-20 m"],
      correctAnswer: "10^-15 m",
    },
    {
      question:
        "Quyidagilardan qaysi biri to'g'ri?\nI. Yadro kuchlari elektromagnit kuchlardan kuchli\nII. Yadro kuchlari faqat protonlar orasida ta'sir qiladi\nIII. Yadro kuchlari qisqa masofada ta'sir qiladi",
      choices: ["Faqat I", "I va II", "I va III", "II va III"],
      correctAnswer: "I va III",
    },
  ],
};

export const quiz_3 = {
  topic: "Radioaktiv nurlanishni va zarralarni qayd qilish usullari",
  questions: [
    {
      question:
        "Quyidagi detektorlardan qaysi biri ionlashtiruvchi nurlanishni qayd qilish uchun ishlatiladi?",
      choices: [
        "Geyger-Myuller hisoblagichi",
        "Mikroskop",
        "Barometr",
        "Termometr",
      ],
      correctAnswer: "Geyger-Myuller hisoblagichi",
    },
    {
      question:
        "Ssintilyatsion detektorning ishlash prinsipi nimaga asoslangan?",
      choices: [
        "Radioaktiv nurlanish ta'sirida kristallning yaltirashiga",
        "Radioaktiv nurlanish ta'sirida suyuqlikning qaynashiga",
        "Radioaktiv nurlanish ta'sirida kristallning erishiga",
        "Radioaktiv nurlanish ta'sirida kristallning sovishiga",
      ],
      correctAnswer: "Radioaktiv nurlanish ta'sirida kristallning yaltirashiga",
    },
    {
      question: "Vilson kamerasi qanday zarralarni kuzatish uchun ishlatiladi?",
      choices: [
        "Faqat neytronlarni",
        "Faqat gamma-nurlanishni",
        "Zaryadlangan zarralarni",
        "Faqat neytral zarralarni",
      ],
      correctAnswer: "Zaryadlangan zarralarni",
    },
    {
      question:
        "Fotoemulsiya usuli qaysi turdagi nurlanishni qayd qilish uchun eng samarali?",
      choices: [
        "Alfa-zarralar",
        "Beta-zarralar",
        "Gamma-nurlanish",
        "Neytronlar",
      ],
      correctAnswer: "Alfa-zarralar",
    },
    {
      question:
        "Quyidagi detektorlardan qaysi biri yarim o'tkazgichli detektor hisoblanadi?",
      choices: [
        "Geyger-Myuller hisoblagichi",
        "Ssintilyatsion detektor",
        "Kremniy-dreyf detektor",
        "Vilson kamerasi",
      ],
      correctAnswer: "Kremniy-dreyf detektor",
    },
    {
      question: "Ionizatsion kamera asosan qanday maqsadda ishlatiladi?",
      choices: [
        "Nurlanish dozasini o'lchash",
        "Zarralar tezligini aniqlash",
        "Zarralar massasini o'lchash",
        "Zarralar zaryadini aniqlash",
      ],
      correctAnswer: "Nurlanish dozasini o'lchash",
    },
    {
      question: "Kalorimetrik detektorlar qanday fizik hodisaga asoslangan?",
      choices: [
        "Nurlanishning yutilishi natijasida haroratning o'zgarishiga",
        "Nurlanishning qaytishiga",
        "Nurlanishning sinishiga",
        "Nurlanishning tarqalishiga",
      ],
      correctAnswer:
        "Nurlanishning yutilishi natijasida haroratning o'zgarishiga",
    },
    {
      question: "Cherenkov detektori qanday hodisaga asoslangan?",
      choices: [
        "Zaryadlangan zarralarning muhitda yorug'lik tezligidan tezroq harakatlanishiga",
        "Zarralarning to'qnashishiga",
        "Zarralarning tormozlanishiga",
        "Zarralarning neytrallanishiga",
      ],
      correctAnswer:
        "Zaryadlangan zarralarning muhitda yorug'lik tezligidan tezroq harakatlanishiga",
    },
    {
      question:
        "Quyidagi detektorlardan qaysi biri gazli detektor hisoblanadi?",
      choices: [
        "Ssintilyatsion detektor",
        "Yarim o'tkazgichli detektor",
        "Proporsional kamera",
        "Fotoemulsiya plates",
      ],
      correctAnswer: "Proporsional kamera",
    },
    {
      question:
        "Qaysi usul yordamida zarralarning trayektoriyasini kuzatish mumkin?\nI. Vilson kamerasi\nII. Pufakli kamera\nIII. Geyger-Myuller hisoblagichi",
      choices: ["Faqat I", "I va II", "I va III", "II va III"],
      correctAnswer: "I va II",
    },
  ],
};

export const quiz_4 = {
  topic: "Radioaktiv yemirilish qonuni",
  questions: [
    {
      question: "Radioaktiv yemirilish qonuni qanday ifoda bilan beriladi?",
      choices: ["N = N₀e^(-λt)", "N = N₀e^(λt)", "N = N₀/t", "N = N₀t"],
      correctAnswer: "N = N₀e^(-λt)",
    },
    {
      question: "Radioaktiv moddaning yarim yemirilish davri nima?",
      choices: [
        "Radioaktiv atomlar sonining 2 marta kamayishi uchun ketgan vaqt",
        "Radioaktiv atomlar sonining 2 marta ko'payishi uchun ketgan vaqt",
        "Radioaktiv atomlar sonining 4 marta kamayishi uchun ketgan vaqt",
        "Radioaktiv atomlar sonining yarimini yo'qotish uchun ketgan vaqt",
      ],
      correctAnswer:
        "Radioaktiv atomlar sonining yarimini yo'qotish uchun ketgan vaqt",
    },
    {
      question: "Radioaktiv yemirilish doimiysi λ nimani ifodalaydi?",
      choices: [
        "Vaqt birligi ichida yemirilgan yadrolar sonining boshlang'ich yadrolar soniga nisbati",
        "Yemirilgan yadrolar sonining umumiy yadrolar soniga nisbati",
        "Yarim yemirilish davrining teskari qiymati",
        "Yemirilmagan yadrolar sonining boshlang'ich yadrolar soniga nisbati",
      ],
      correctAnswer:
        "Vaqt birligi ichida yemirilgan yadrolar sonining boshlang'ich yadrolar soniga nisbati",
    },
    {
      question:
        "Agar radioaktiv modda massasining 3/4 qismi yemirilgan bo'lsa, necha yarim yemirilish davri o'tgan?",
      choices: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "Radioaktiv preparatning aktivligi nimani bildiradi?",
      choices: [
        "Vaqt birligi ichida yemirilayotgan yadrolar soni",
        "Preparatdagi umumiy yadrolar soni",
        "Preparatning massasi",
        "Preparatning energiyasi",
      ],
      correctAnswer: "Vaqt birligi ichida yemirilayotgan yadrolar soni",
    },
    {
      question: "Radioaktiv yemirilish qonunidagi e nimani bildiradi?",
      choices: [
        "Natural logarifm asosi",
        "Elektron zaryadini",
        "Energiyani",
        "Yemirilish tezligini",
      ],
      correctAnswer: "Natural logarifm asosi",
    },
    {
      question:
        "Quyidagi formulalardan qaysi biri yarim yemirilish davri T₁/₂ va yemirilish doimiysi λ orasidagi bog'lanishni ifodalaydi?",
      choices: ["T₁/₂ = ln2 / λ", "T₁/₂ = λ / ln2", "T₁/₂ = 2λ", "T₁/₂ = λ²"],
      correctAnswer: "T₁/₂ = ln2 / λ",
    },
    {
      question:
        "Radioaktiv moddaning boshlang'ich miqdorining 1/8 qismi qolishi uchun necha yarim yemirilish davri o'tishi kerak?",
      choices: ["1", "2", "3", "4"],
      correctAnswer: "3",
    },
    {
      question:
        "Radioaktiv yemirilish jarayonida quyidagilardan qaysi biri o'zgarmaydi?",
      choices: ["Yadrolar soni", "Yemirilish doimiysi", "Aktivlik", "Massa"],
      correctAnswer: "Yemirilish doimiysi",
    },
    {
      question:
        "Agar radioaktiv moddaning yarim yemirilish davri 10 kun bo'lsa, 30 kun o'tgandan keyin boshlang'ich miqdorning qancha qismi qoladi?",
      choices: ["1/2", "1/4", "1/8", "1/16"],
      correctAnswer: "1/8",
    },
  ],
};

export const quiz_5 = {
  topic: "Yadro reaksiyalari. Siljish qonuni",
  questions: [
    {
      question: "Yadro reaksiyasi nima?",
      choices: [
        "Atom yadrolarining o'zaro ta'sirlashuvi natijasida yangi yadrolar hosil bo'lishi",
        "Atomlarning ionlashuvi",
        "Elektronlarning yadro atrofida aylanishi",
        "Yadroning spontan parchalanishi",
      ],
      correctAnswer:
        "Atom yadrolarining o'zaro ta'sirlashuvi natijasida yangi yadrolar hosil bo'lishi",
    },
    {
      question:
        "α-yemirilishda siljish qonuniga ko'ra, yadroning zaryadi qanday o'zgaradi?",
      choices: ["2 ga kamayadi", "2 ga ortadi", "4 ga kamayadi", "O'zgarmaydi"],
      correctAnswer: "2 ga kamayadi",
    },
    {
      question:
        "β⁻-yemirilishda siljish qonuniga ko'ra, yadroning massa soni qanday o'zgaradi?",
      choices: ["1 ga kamayadi", "1 ga ortadi", "2 ga kamayadi", "O'zgarmaydi"],
      correctAnswer: "O'zgarmaydi",
    },
    {
      question: "Yadro reaksiyasida X nima?",
      choices: ["Proton", "Neytron", "α-zarra", "Elektron"],
      correctAnswer: "Neytron",
    },
    {
      question:
        "Pozitron chiqishi bilan sodir bo'ladigan β⁺-yemirilishda yadroning zaryadi qanday o'zgaradi?",
      choices: ["1 ga ortadi", "1 ga kamayadi", "2 ga ortadi", "O'zgarmaydi"],
      correctAnswer: "1 ga kamayadi",
    },
    {
      question: "Quyidagi yadro reaksiyalaridan qaysi biri noto'g'ri yozilgan?",
      choices: ["A)", "B)", "C)", "D)"],
      correctAnswer: "C)",
    },
    {
      question:
        "Siljish qonuniga ko'ra, α-yemirilishda yadroning massa soni qanday o'zgaradi?",
      choices: ["2 ga kamayadi", "4 ga kamayadi", "4 ga ortadi", "O'zgarmaydi"],
      correctAnswer: "4 ga kamayadi",
    },
    {
      question: "Yadro reaksiyalarida qaysi kattaliklar saqlanadi?",
      choices: ["Faqat I", "I va II", "II va III", "I, II va III"],
      correctAnswer: "I, II va III",
    },
    {
      question: "Quyidagi yadro reaksiyasida X nimani ifodalaydi: ?",
      choices: ["Proton", "Neytron", "Deutron", "α-zarra"],
      correctAnswer: "Deutron",
    },
    {
      question: "Yadro reaksiyasining energetik effekti qanday aniqlanadi?",
      choices: [
        "Reaksiya mahsulotlari massalarining yig'indisi minus reaksiyaga kirishuvchi yadrolar massalarining yig'indisi",
        "Reaksiyaga kirishuvchi yadrolar massalarining yig'indisi minus reaksiya mahsulotlari massalarining yig'indisi",
        "Reaksiyaga kirishuvchi yadrolar energiyalarining yig'indisi",
        "Reaksiya mahsulotlari energiyalarining yig'indisi",
      ],
      correctAnswer:
        "Reaksiyaga kirishuvchi yadrolar massalarining yig'indisi minus reaksiya mahsulotlari massalarining yig'indisi",
    },
  ],
};

export const quiz_6 = {
  topic: "Elementar zarralar",
  questions: [
    {
      question: "Quyidagilardan qaysi biri lepton hisoblanadi?",
      choices: ["Proton", "Neytron", "Elektron", "Kvark"],
      correctAnswer: "Elektron",
    },
    {
      question: "Barionlar qanday zarralardan tashkil topgan?",
      choices: ["2 ta kvark", "3 ta kvark", "4 ta kvark", "5 ta kvark"],
      correctAnswer: "3 ta kvark",
    },
    {
      question: "Quyidagi zarralardan qaysi biri antimoddaga tegishli?",
      choices: ["Proton", "Neytron", "Elektron", "Pozitron"],
      correctAnswer: "Pozitron",
    },
    {
      question: "Mezonlar qanday zarralardan tashkil topgan?",
      choices: [
        "1 ta kvark va 1 ta antikvark",
        "2 ta kvark",
        "3 ta kvark",
        "1 ta lepton va 1 ta antileptondan",
      ],
      correctAnswer: "1 ta kvark va 1 ta antikvark",
    },
    {
      question: "Kuchli o'zaro ta'sirga qaysi zarralar kirishadi?",
      choices: [
        "Faqat leptonlar",
        "Faqat kvarklar va glyuonlar",
        "Barcha zarralar",
        "Faqat neytral zarralar",
      ],
      correctAnswer: "Faqat kvarklar va glyuonlar",
    },
    {
      question: "Quyidagi zarralardan qaysi biri bozon hisoblanadi?",
      choices: ["Elektron", "Proton", "Foton", "Neytron"],
      correctAnswer: "Foton",
    },
    {
      question: "Standart modelga ko'ra, necha xil kvark mavjud?",
      choices: ["4", "6", "8", "10"],
      correctAnswer: "6",
    },
    {
      question: "Neytrinoning asosiy xususiyati nima?",
      choices: [
        "Elektr zaryadiga ega",
        "Juda kichik massaga ega",
        "Kuchli o'zaro ta'sirga kirishadi",
        "Barqaror emas",
      ],
      correctAnswer: "Juda kichik massaga ega",
    },
    {
      question: "Qaysi zarra graviton deb ataladi?",
      choices: [
        "Gravitatsion o'zaro ta'sirni tashuvchi nazariy zarra",
        "Elektromagnit o'zaro ta'sirni tashuvchi zarra",
        "Kuchsiz o'zaro ta'sirni tashuvchi zarra",
        "Kuchli o'zaro ta'sirni tashuvchi zarra",
      ],
      correctAnswer: "Gravitatsion o'zaro ta'sirni tashuvchi nazariy zarra",
    },
    {
      question: "Quyidagi juftliklardan qaysi biri bir-biriga antizerradir?",
      choices: [
        "Proton va neytron",
        "Elektron va pozitron",
        "Neytron va antineytron",
        "Proton va elektron",
      ],
      correctAnswer: "Elektron va pozitron",
    },
  ],
};

export const quiz_7 = {
  topic:
    "Atom energetikasining fizik asoslari. Yadro energiyasidan foydalanishda xavfsizlik choralari",
  questions: [
    {
      question:
        "Atom elektr stansiyalarida (AES) energiya qanday jarayondan olinadi?",
      choices: [
        "Kimyoviy reaksiyalardan",
        "Yadro bo'linish reaksiyasidan",
        "Yadro sintez reaksiyasidan",
        "Radioaktiv yemirilishdan",
      ],
      correctAnswer: "Yadro bo'linish reaksiyasidan",
    },
    {
      question:
        "AESda odatda qaysi element izotopi yoqilg'i sifatida ishlatiladi?",
      choices: ["U-235", "Pu-239", "U-238", "Th-232"],
      correctAnswer: "U-235",
    },
    {
      question:
        "Yadro reaktorida zanjir reaksiyani boshqarish uchun nima ishlatiladi?",
      choices: [
        "Issiqlik almashinuvchi",
        "Neytron sekinlashtirgich",
        "Neytron yutuvchi sterjenlar",
        "Radiatsiyadan himoya qobig'i",
      ],
      correctAnswer: "Neytron yutuvchi sterjenlar",
    },
    {
      question:
        "Reaktorda zanjir reaksiyani davom ettirish uchun qanday zarralar muhim rol o'ynaydi?",
      choices: ["Protonlar", "Neytronlar", "Elektronlar", "Alfa zarralar"],
      correctAnswer: "Neytronlar",
    },
    {
      question:
        "AESda radioaktiv chiqindilar bilan ishlashda qanday asosiy xavfsizlik chorasi qo'llaniladi?",
      choices: [
        "Chiqindilarni atmosferaga chiqarish",
        "Chiqindilarni maxsus konteynerlariga joylashtirish va saqlash",
        "Chiqindilarni yer ostiga ko'mish",
        "Chiqindilarni okeanga tashlash",
      ],
      correctAnswer:
        "Chiqindilarni maxsus konteynerlariga joylashtirish va saqlash",
    },
    {
      question:
        "Quyidagilardan qaysi biri AESda xavfsizlikni ta'minlash uchun ishlatilmaydi?",
      choices: [
        "Radiatsiyadan himoya qobig'i",
        "Avariya sovutish tizimi",
        "Neytron reflektori",
        "Reaktorni o'chirish tizimi",
      ],
      correctAnswer: "Neytron reflektori",
    },
    {
      question:
        "AES xodimlarining radiatsiyadan himoyalanishi uchun qanday asosiy prinsip qo'llaniladi?",
      choices: [
        "ALARA (As Low As Reasonably Achievable) prinsipi",
        "Maksimal nurlanish prinsipi",
        "Minimal vaqt prinsipi",
        "Maksimal masofa prinsipi",
      ],
      correctAnswer: "ALARA (As Low As Reasonably Achievable) prinsipi",
    },
    {
      question:
        "Yadro reaktorida issiqlik tashuvchi sifatida odatda nima ishlatiladi?",
      choices: ["Simob", "Suv yoki suyuq metall", "Moy", "Havo"],
      correctAnswer: "Suv yoki suyuq metall",
    },
    {
      question: "AESda foydalanilgan yoqilg'i elementlari bilan nima qilinadi?",
      choices: [
        "Qayta ishlanadi va qayta ishlatiladi",
        "Atmosferaga chiqariladi",
        "Darhol yo'q qilinadi",
        "Cheksiz muddat saqlanadi",
      ],
      correctAnswer: "Qayta ishlanadi va qayta ishlatiladi",
    },
    {
      question:
        "Quyidagilardan qaysi biri yadro energetikasining afzalligi hisoblanmaydi?",
      choices: [
        "Kam miqdordagi yoqilg'idan ko'p energiya olish",
        "Atmosferaga issiqxona gazlari chiqarmaslik",
        "Radioaktiv chiqindilarning xavfsizligi",
        "Yoqilg'i resurslarining uzoq muddatga yetishi",
      ],
      correctAnswer: "Radioaktiv chiqindilarning xavfsizligi",
    },
  ],
};

export const quiz_8 = {
  topic:
    "Oʻzbekistonda yadro fizikasi sohasidagi tadqiqotlar va ularning natijalaridan xalq xoʻjaligida foydalanish",
  questions: [
    {
      question:
        "O‘zbekistonda yadro fizikasi bo‘yicha muntazam tadqiqotlar qaysi yilda boshlandi?",
      choices: ["1920-yilda", "1949-yilda", "1956-yilda", "1980-yilda"],
      correctAnswer: "1949-yilda",
    },
    {
      question:
        "O‘zbekistonda yadro fizikasi sohasidagi ilmiy-tadqiqot ishlari qaysi muassasada olib boriladi?",
      choices: [
        "Samarqand davlat universitetida",
        "Fizika-texnika institutida",
        "O‘zbekiston Milliy universitetida",
        "Barcha javoblar to‘g‘ri",
      ],
      correctAnswer: "Barcha javoblar to‘g‘ri",
    },
    {
      question:
        "Qaysi akademiklar O‘zbekiston Fanlar akademiyasining Yadro fizikasi institutining tashkil qilinishida muhim rol o‘ynagan?",
      choices: [
        "I. V. Kurchatov va S. A. Azimov",
        "U. O. Orifov va I. V. Kurchatov",
        "S. A. Azimov va U. O. Orifov",
        "Barcha javoblar to‘g‘ri",
      ],
      correctAnswer: "Barcha javoblar to‘g‘ri",
    },
    {
      question:
        "O‘zbekistonda yadro spektroskopiyasi va yadro tuzilishi sohasidagi tadqiqotlar nimaga yo‘naltirilgan?",
      choices: [
        "Faqat ilmiy-tadqiqot ishlariga",
        "Fan, texnika va xalq xo‘jaligiga",
        "Faqat xalq xo‘jaligiga",
        "Tibbiyotga",
      ],
      correctAnswer: "Fan, texnika va xalq xo‘jaligiga",
    },
    {
      question:
        "O‘zbek olimlari tomonidan pufaksimon kameralar yordamida nimalar o‘rganilgan?",
      choices: [
        "Elementar zarralar",
        "Kumulativ izobarlar",
        "Gamma-nurlar",
        "Rentgen nurlar",
      ],
      correctAnswer: "Kumulativ izobarlar",
    },
    {
      question:
        "Quyidagi ilmiy-tadqiqot muassasalaridan qaysi biri «Fizika-Quyosh» ishlab chiqarish birlashmasiga kiradi?",
      choices: [
        "Fizika-texnika instituti",
        "Samarqand davlat universiteti",
        "O‘zbekiston Milliy universiteti",
        "Astronomiya instituti",
      ],
      correctAnswer: "Fizika-texnika instituti",
    },
    {
      question:
        "Yadro fizikasi tadqiqotlarining tibbiyotda qo‘llanilishi qaysi kasalliklarni davolashda muhim rol o‘ynaydi?",
      choices: [
        "Yurak kasalliklari",
        "Saraton kasalligi",
        "Qon bosimi kasalliklari",
        "Barcha javoblar noto‘g‘ri",
      ],
      correctAnswer: "Saraton kasalligi",
    },
    {
      question:
        "Gamma-nurlarning qaysi xalq xo‘jaligi sohasida qo‘llanilishi ma’lum?",
      choices: [
        "G‘o‘za seleksiyasida",
        "Suvni tozalashda",
        "Qurilishda",
        "Energiya ishlab chiqarishda",
      ],
      correctAnswer: "G‘o‘za seleksiyasida",
    },
    {
      question:
        "O‘zbek olimlari tomonidan Quyoshning qanday hodisalari o‘rganilgan?",
      choices: [
        "Quyosh atmosferasidagi hodisalar",
        "Quyosh energiyasi",
        "Quyosh magnit maydoni",
        "Quyosh plazmasi",
      ],
      correctAnswer: "Quyosh atmosferasidagi hodisalar",
    },
    {
      question:
        "Rentgenologiya va radiologiya sohasidagi dastlabki ishlar qaysi muassasa bilan hamkorlikda olib borilgan?",
      choices: [
        "Yadro fizikasi instituti",
        "Fizika-texnika instituti",
        "O‘zbekiston Milliy universiteti",
        "Astronomiya instituti",
      ],
      correctAnswer: "Yadro fizikasi instituti",
    },
  ],
};

export const trueFalseQuiz = {
  topic: "True or False",
  perQuestionScore: 5,
  questions: [
    {
      question: "Atomning birinchi modeli Nyuton tomonidan taklif etilgan.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Noto'g'ri",
    },
    {
      question: "Atom yadrosi Rezerford tomonidan kashf etilgan.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Bohr modeli elektronlarning energiya sathlari bo'yicha harakatlanishini tushuntiradi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Atomning planetar modeli Dj. Dj. Tomson tomonidan taklif etilgan.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Noto'g'ri",
    },
    {
      question: "Elektronlar yadro atrofida stacionar orbitada harakatlanadi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Rezerford modeli klassik mexanika va elektrodinamika tamoyillariga zid bo'lib chiqdi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Atom yadrosining radiusi R = R0A^(1/2) formula yordamida aniqlanadi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Noto'g'ri",
    },
    {
      question: "Elektron orbitasining radiusi Bohr radiusi deb ataladi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Yadroda protonlar va neytronlar bo'lib, ular birgalikda nuklonlar deb ataladi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Izotoplar bir xil protonlar soniga ega, ammo turli massa soniga ega elementlardir.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    // {
    //   question: "Alfa nurlanishi elektronlar oqimi hisoblanadi.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Noto'g'ri",
    // },
    // {
    //   question: "Yadro fizikasi bo'yicha tadqiqotlar Toshkentda olib boriladi.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Haqiqat",
    // },
    // {
    //   question: "Atom massasining 95 foizi yadroda joylashgan.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Haqiqat",
    // },
    // {
    //   question: "Geyger – Myuller hisoblagichi gaz ionlanishiga asoslangan.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Haqiqat",
    // },
    // {
    //   question:
    //     "Vilson kamerasida zaryadlangan zarrachalar izlarini kuzatish mumkin.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Haqiqat",
    // },
    // {
    //   question:
    //     "Scintillyatsion hisoblagich zaryadlangan zarrachalarning elektromagnit to'lqinlarini kuzatishga asoslangan.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Noto'g'ri",
    // },
    // {
    //   question: "Yadro kuchlari yadrodagi nuklonlarni birga saqlab turadi.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Haqiqat",
    // },
    // {
    //   question:
    //     "Massa defekti yadroning umumiy massasidan kichik bo'lgan massa farqidir.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Haqiqat",
    // },
    // {
    //   question:
    //     "Borning birinchi postulati elektronlarning stacionar orbitada nur chiqarmasdan harakatlanishini ifodalaydi.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Haqiqat",
    // },
    // {
    //   question:
    //     "Elektronlar nur chiqarib, bir energetik holatdan ikkinchisiga o'tadi.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Haqiqat",
    // },
    // {
    //   question:
    //     "Vodorod atomining asosiy holatidagi energiyasi -13,6 eV ga teng.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Haqiqat",
    // },
    // {
    //   question:
    //     "Elektron orbitasining radiusi R = R0A^(2/3) formula yordamida aniqlanadi.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Noto'g'ri",
    // },
    // {
    //   question: "Yadrodagi protonlar soni atomning zaryad sonini ifodalaydi.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Haqiqat",
    // },
    // {
    //   question:
    //     "Yadro fizikasi fanidan izlanishlar O'zbekiston Fanlar Akademiyasi tomonidan muvofiqlashtiriladi.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Haqiqat",
    // },
    // {
    //   question:
    //     "Radioaktivlik izotopning qanday agregat holatda bo'lishiga bog'liq.",
    //   choices: ["Haqiqat", "Noto'g'ri"],
    //   correctAnswer: "Noto'g'ri",
    // },
  ],
};

export const moreButtonsQuiz = {
  topic: "Atom Models Quiz",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Savol: Bohr modeli bo'yicha elektronlar faqat __________ orbitada harakatlanadi.",
      choices: ["random", "stacionar", "elliptik", "izchil", "aylana"],
      correctAnswer: "stacionar",
    },
    {
      question: "Atom yadrosi __________ va neytronlardan tashkil topgan.",
      choices: [
        "elektronlardan",
        "kvarklardan",
        "protonlardan",
        "fotonlardan",
        "kvantlardan",
      ],
      correctAnswer: "protonlardan",
    },
    {
      question: "Radioaktivlik izotopning __________ natijasida yuzaga keladi.",
      choices: [
        "magnit maydon",
        "elektromagnit nurlanish",
        "yadro parchalanishi",
        "yuqori bosim",
        "past harorat",
      ],
      correctAnswer: "yadro parchalanishi",
    },
    {
      question:
        "Elektronlar energiyani yutganda, yuqori energiyali __________ orbitaga o'tadi.",
      choices: ["elliptik", "past", "beqaror", "stacionar", "kvant"],
      correctAnswer: "stacionar",
    },
    {
      question: "Protonning zaryadi __________.",
      choices: ["manfiy", "neytral", "musbat", "nol", "o'zgaruvchan"],
      correctAnswer: "musbat",
    },
    {
      question:
        "Izotoplar bir xil protonlar soniga ega, ammo turli __________ soniga ega.",
      choices: ["elektronlar", "neytronlar", "kvarklar", "fotonlar", "atomlar"],
      correctAnswer: "neytronlar",
    },
    {
      question: "Proton va neytronlar birgalikda __________ deb ataladi.",
      choices: ["izotoplar", "nuklidlar", "nuklonlar", "kvarklar", "hadronlar"],
      correctAnswer: "nuklonlar",
    },
    {
      question: "Atom yadrosining o'lchami taxminan __________ m ga teng.",
      choices: ["10^-10", "10^-15", "10^-20", "10^-12", "10^-8"],
      correctAnswer: "10^-15",
    },
    {
      question:
        "Yadro kuchlari __________ kuchlariga qaraganda ancha kuchliroq.",
      choices: [
        "gravitatsiya",
        "magnit",
        "elektromagnit",
        "kimyoviy",
        "atomar",
      ],
      correctAnswer: "elektromagnit",
    },
    {
      question: "Alfa nurlanishi __________ yadrolari oqimidan iborat.",
      choices: ["geliy", "vodorod", "karbon", "neon", "azot"],
      correctAnswer: "geliy",
    },
    // {
    //   question:
    //     "Elektronlar energiyani yutganda, ular yuqori energiyali __________ orbitaga o'tadi.",
    //   choices: ["stacionar", "past", "elliptik", "yuqori", "izchil"],
    //   correctAnswer: "stacionar",
    // },
    // {
    //   question: "Massa defekti yadroning __________ natijasida yuzaga keladi.",
    //   choices: [
    //     "parchalanishi",
    //     "yutilishi",
    //     "energiyasi",
    //     "birikishi",
    //     "o'zgarishi",
    //   ],
    //   correctAnswer: "energiyasi",
    // },
    // {
    //   question: "Elektronlarning zaryadi __________.",
    //   choices: ["musbat", "manfiy", "neytral", "nol", "o'zgaruvchan"],
    //   correctAnswer: "manfiy",
    // },
    // {
    //   question: "Yadro kuchlari faqat __________ ichida ta'sir qiladi.",
    //   choices: [
    //     "atom orbitasi",
    //     "yadroning tashqarisida",
    //     "yadro ichida",
    //     "elektron buluti",
    //     "atomning markazida",
    //   ],
    //   correctAnswer: "yadro ichida",
    // },
    // {
    //   question: "Yadrodagi nuklonlar soni __________ bilan ifodalanadi.",
    //   choices: [
    //     "atom soni",
    //     "massa soni",
    //     "zaryad soni",
    //     "kvant soni",
    //     "energiya soni",
    //   ],
    //   correctAnswer: "massa soni",
    // },
    // {
    //   question:
    //     "Yadro energetikasi __________ energiyasini ajratib olish va foydalanish bilan shug'ullanadi.",
    //   choices: ["kimyoviy", "magnit", "elektr", "atom", "yadro"],
    //   correctAnswer: "yadro",
    // },
    // {
    //   question:
    //     "Radioaktiv parchalanish natijasida yangi __________ hosil bo'ladi.",
    //   choices: ["atomlar", "elektronlar", "izotoplar", "fotonlar", "kvarklar"],
    //   correctAnswer: "atomlar",
    // },
    // {
    //   question: "Alfa zarrachalari __________ deb ham ataladi.",
    //   choices: [
    //     "elektronlar",
    //     "protonlar",
    //     "geliy yadrolari",
    //     "neytronlar",
    //     "kvantlar",
    //   ],
    //   correctAnswer: "geliy yadrolari",
    // },
    // {
    //   question: "Yadro zaryadi yadrodagi __________ soni bilan belgilanadi.",
    //   choices: [
    //     "elektronlar",
    //     "protonlar",
    //     "neytronlar",
    //     "fotonlar",
    //     "kvarklar",
    //   ],
    //   correctAnswer: "protonlar",
    // },
  ],
};

export const imageQuiz = {
  topic: "Image quiz",
  perQuestionScore: 5,
  questions: [
    {
      image: "Bill-Gates-2011.png",
      question:
        "Súwrettegi adamnıń atı familiyası durıs keltirilgen variant qaysı?",
      choices: ["Stiv Jobs", "Ilon Mask", "Bill Geyts", "Durıs juwap joq"],
      correctAnswer: "Bill Geyts",
    },
    {
      image: "elon-musk.webp",
      question: "Súwrettegi adamǵa tiyisli social tarmaq qaysı?",
      choices: ["Instagram", "X", "Facebook", "VK"],
      correctAnswer: "X",
    },
  ],
};

export const matchingPairWordsQuiz = {
  topic: "Matching pair words quiz",
  perQuestionScore: 5,
  questions: [
    {
      Atom: "Yadro",
      Elektron: "Manfiy",
      Proton: "Musbat",
      Neutron: "Neytral",
      Lazer: "Yorug'lik",
    },
    {
      Spektr: "Ranglar",
      Kvant: "Energiya",
      Nurlanish: "Fotonnar",
      Harorat: "Isish",
      Bosim: "Kuchlanish",
    },
    {
      "To'lqin": "Uzunlik",
      Sintez: "Birikma",
      Reaksiya: "Ta'sir",
      Diffuziya: "Tarqalish",
      Gaz: "Molekula",
    },
    {
      Massa: "Og'irlik",
      Energiyaning: "Saqlanishi",
      Tezlanish: "Harakat",
      "Yorug'lik": "Chiroq",
      Radioaktiv: "Nurlanish",
    },
  ],
};

export const learningDB = [
  {
    id: 1,
    title: "Atom tuzilishi. Rezerford tajribasi.",
    desctiption: "mutaxassislarning maqolalarini o'qing",
    keyValue: "quiz",
    media: {
      images: [{ src: image1, title: "1-rasm" }],
      gifsEmbed: [
        `https://player.vimeo.com/video/1009431766?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`,
      ],
    },
    paragraphs: [
      {
        text: "Ko‘p tajriba va nazariy tekshirishlar natijasida atom tuzilishi nazariyasi yaratildi. Bu nazariyani yaratishda ingliz olimi Rezerford tomonidan o‘tkazilgan tajribalar muhim ahamiyatga ega bo‘ldi.",
      },
      {
        text: `Katod nurlarining elektr va magnit maydonlarda og‘ishini kuzatish elektronlarning bu maydondagi harakat tezligini hisoblashga va ular zaryadining massasiga nisbati (e/m) ni aniqlashga imkon berdi. Elektronning zaryadi elektroliz qonunlari asosida hisoblab topildi va so‘ngra bevosita o‘lchandi. Elektronning zaryadini va uning zaryadining massasiga nisbatini bilgan holda elektronning massasini hisoblash mumkin bo‘ldi. Elektronning massasi vodorod atomi massasidan 1836 marta kichikdir`,
      },
      {
        text: `Elektronlarning massasi atomlarning massasidan bir necha ming marta kichikligidan atomning asosiy massasi uning musbat zaryadli qismiga to‘g‘ri keladi, degan fikr kelib chiqadi`,
      },
      {
        text: "Atom ichida musbat zaryadning va binobarin, massasining taqsimlanishini tadqiq qilish uchun Rezerford va uning shogirdlari -zarralarning yupqa metall plastinka — folgalar orqali o‘tganda uchish yo‘nalishlari o‘zgarishi (sochilishi)ni o‘rgandilar. -zarralar ba'zi moddalarning radioaktiv yemirilishi (parchalanishi) paytida juda katta tezlik bilan ajratib chiqaradigan musbat zaryadli zarralari bo‘lib, ular o‘z tabiatiga ko‘ra geliy ionlaridan iboratdir. Bu zarralarning massalari elektron massasidan taxminan 8000 marta katta, musbat zaryadi esa absolyut kattaligi jihatidan elektron zaryadidan ikki marta kattadir. Radioaktiv moddadan -zarralarning uchib chiqish tezligi 104 km/s tartibida bo‘ladi.",
      },
    ],
  },
  {
    id: 2,
    title: "Borning kvant postulatlari.",
    desctiption: "mutaxassislarning maqolalarini o'qing",
    keyValue: "quiz",
    media: {
      images: [
        { src: image2, title: "2-rasm" },
        { src: image3, title: "3-rasm" },
        { src: image4, title: "4-rasm" },
      ],
      gifsEmbed: [
        `https://player.vimeo.com/video/1009432243?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`,
      ],
    },
    paragraphs: [
      {
        text: `Atomning planetar modeli (uni yadro modeli deb ham yuritiladi) klassik mexanika va elektrodinamika bilan birgalikda na atomning turg‘un sistema ekanligini, na atom spektrining xarakterini tushuntirishga qodir emas.`,
      },
      {
        text: `Bu ziddiyatlarni hal qilish yo‘lini 1913- yilda daniyalik fizik Nils Bor topgan edi. `,
      },
      {
        text: `Borning qilgan farazi u ta'riflagan quyidagi ikki postulatda o‘z mazmunini topdi:`,
      },
      {
        text: `1.	Atom sistemasi faqat maxsus statsionar yoki kvant holatlarda bo‘la oladi, bu holatlarning har biriga muayyan Wn energiya mos keladi.  Statsionar holatda  atom  yorug‘lik  chiqarmaydi ham, yutmaydi ham.`,
      },
      {
        text: `2.	Atom bir statsionar holatdan ikkinchisiga o‘tganda yorug‘lik chiqaradi (yoki yutadi). Nurlangan (yoki yutilgan) fotonning energiyasi statsionar holatlar energiyalarining ayirmasiga teng:`,
        formula: formula1,
      },
      {
        text: `bunda: m va n — butun sonlar; Wm va Wn — mos ravishda atomning m va n-statsionar holatlari energiyasi. `,
      },
      {
        text: `Shunday qilib, atom chiqaradigan elektromagnit to‘lqinlar chastotasi atomning statsionar holatlariga mos keladigan energiya farqi bilan aniqlanar ekan. Atomning har bir statsionar holatiga mos keladigan energiya qiymatlarini grafik usulda tasvirlash mumkin (2-rasm). Bu gorizontal chiziqlarni energiya sathlari yoki energetik sathlar deyiladi.`,
      },
      {
        text: "Bor o‘z postulatlarini eng sodda atom — vodorod atomining nazariyasini yaratish uchun qo‘lladi. Vodorod atomi bitta proton (vodorod atomining yadrosi) va bitta elektrondan iborat. Yadroning massasi elektron massasidan 1836 marta katta bo‘lgani uchun yadroni qo‘zg‘almas deb hisoblash mumkin",
      },
      {
        text: `Boshqacha aytganda, energiyani kvantlash qoidasini bilish zarur. Bu qoidani ham Bor postulat tarzida berdi.`,
      },
      {
        text: "Atomning to‘liq energiyasi:",
        formula: formula2,
      },
      {
        text: "Borning birinchi postulatiga ko‘ra energiya faqat tayinli Wn qiymatlargina  qabul  qilishi  mumkin. Borning kvantlash qoidasi orbitalarning mumkin bo‘lgan radiuslari uchun:",
        formula: formula3,
      },
      {
        text: "Elektronning orbita bo‘yicha harakat tezligi uchun:",
        formula: formula4,
      },
      {
        text: "ifodani beradi, bunda n=1,2,3, ... qiymatlarni oladi.",
      },
      {
        text: "Bor postulati bo‘yicha bu orbitalarni ruxsat etilgan yoki Bor orbitalari deb ataladi. Bor orbitalarining radiuslari n soni o‘zgarishi bilan uzlukli (diskret) ravishda o‘zgaradi. Bor orbitasining eng kichik radiusi uchun n=1 bo‘ladi, binobarin:",
        formula: formula5,
      },
      {
        text: "Atomning statsionar holatlari energiyalarining qiymatlarini topamiz:",
        formula: formula6,
      },
      {
        text: "Atomning statsionar orbitalari radiusi va statsionar holatlari energiyasi kvant soni deb ataladigan n sonining qiymatiga bog‘liq. Energiyaning manfiy ishorasi atomdan elektronni olish uchun tashqi kuchlar ish bajarishi kerakligini bildiradi.",
      },
      {
        text: `Elektronning eng kam W1 energiyasi atomning normal holatdagi statsionar orbitasining r1 radiusiga mos keladi. Atom bu holda nur chiqara olmaydi, chunki elektronning bu orbitadan yadroga yanada yaqinroq orbitaga o‘tishining imkoni yo‘q. Elektronni n=1 orbitadan (normal holatdan) n= orbitaga (cheksiz uzoqlikka) o‘tkazish uchun zarur bo‘lgan energiyani atomning ionlashish energiyasi deyiladi. `,
      },
      {
        text: "Borning ikkinchi postulatiga muvofiq, vodorod atomi nurlanishining mumkin bo‘lgan chastotalari quyidagi formula bilan aniqlanadi:",
        formula: formula7,
      },
      {
        text: "bunda: m>n, m va Wm — atomning boshlang‘ich (nur chiqarish- gacha) holatiga mos kelgan kvant soni va energiyasi; n va Wn — atomning oxirgi (nur chiqargandan keyingi) holatiga oid xarakteristikalari.",
      },
      {
        text: "Ma'lum bo‘lishicha, atom spektridagi chiziqlar tartibsiz joylashgan bo‘lmay, balki ularning joylashishi muayyan qonuni- yatlarga bo‘ysunar ekan. Eng sodda atom bo‘lgan vodorod atomida buni yaqqol ko‘rish mumkin. ",
      },
      {
        text: "1885- yilda shveytsariyalik o‘qituvchi Ya. Balmer birinchi bo‘lib vodorod atomining nurlanish spektrining ko‘rinadigan qismida yotgan spektral chiziqlarning chastotasini hisoblashga imkon beradigan empirik formulani topdi. Vodorod spektrining bu qismidagi barcha chastotalar quyidagi sodda munosabatni qanoatlantiradi:",
        formula: formula8,
      },
      {
        text: "bunda m=3, 4, 5 ... (butun sonlar); R - Ridberg doimiysi deb atalib, 3,28985·1015 s-1 ga teng.",
      },
      {
        text: "Bu formula juda aniq bajariladi. Shuning uchun u nur chiqa- rayotgan atomlarga xos bo‘lgan biror ichki qonuniyatni ifodalaydi, deb aytish mumkin.",
      },
      {
        text: "Keyinchalik vodorod spektrida yana bir necha seriyalar borligi aniqlangan. Jumladan, spektrning ultrabinafsha qismida 1906- yilda ingliz fizigi Layman topgan seriya va spektrning infraqizil qismida 1908- yili nemis fizigi Pashen topgan seriya bor (3-rasmga qarang).",
      },
      {
        text: " Layman seriyasidagi spektral chiziqlarning chastotalari quyidagi formuladan aniqlanadi:",
        formula: formula9,
      },
      {
        text: "bunda m=2,3,4 ...",
      },
      {
        text: "Pashen seriyasi chiziqlarining chastotalari esa quyidagi formula bilan aniqlanadi:",
        formula: formula10,
      },
      {
        text: "bunda m=4, 5, 6 ... Barcha seriyalarning empirik formulalari bir xil strukturaga ega, shuning uchun vodorod spektrining barcha chiziqlarini quyidagi bitta formula bilan ifodalash mumkin:",
        formula: formula11,
      },
      {
        text: "bunda n va m butun sonlar bo‘lib, n=1, 2, 3 ... qiymatlarni, m=(n+1), (n+2), (n+3) ... qiymatlarni oladi. Ko‘rinib turibdiki, m>n. (144) ifoda Balmerning umumlashgan formulasi deb ataladi.",
      },
      {
        text: "Ridberg doimiysi uchun:",
        formula: formula12,
      },
    ],
  },
  {
    id: 3,
    title: "Lazerlar.",
    desctiption: "mutaxassislarning maqolalarini o'qing",
    keyValue: "quiz",
    media: {
      images: [{ src: image5, title: "5-rasm" }],
      gifsEmbed: [
        `https://player.vimeo.com/video/1009431766?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`,
      ],
    },
    paragraphs: [
      {
        text: "Elektromagnit to‘lqinlarni kuchaytirish va generatsiyalash prinsipini rus fiziklari N.G. Basov va A.M. Proxorov hamda ayni bir vaqtda amerikalik olimlar Ch.X. Tauns va Sh. Veberlar tavsiya qilgan edilar. Santimetrli to‘lqinlar diapazonida ishlaydigan bunga mos asboblar mazerlar deb atalgan.",
      },
      {
        text: `1960- yili amerikalik fizik T.G. Meyman optikaviy diapazonda ishlaydigan shunday asbobni yaratdi. Bu asbobga lazer nomi berildi. Ba'zan lazerlar optik kvant generatorlari deb ataladi. Optik kvant generatorlari ikki asosiy qismdan-aktiv muhit va rezonatordan tuzilgan.`,
      },
      {
        text: `Yoqut lazeri. Yoqut lazerida aktiv muhit sifatida tarkibida 0,05% ga yaqin xrom aralashmasi bo‘lgan yoqut kristalli (Al2O3) dan foydalaniladi. Lazerning bu asosiy elementi, odatda, diametri 0,42 sm va uzunligi 320 sm bo‘lgan 1- silindr shaklida bo‘ladi`,
      },
      {
        text: "(5-rasm). Sterjenning 3 va 4 asos sirtlari bir-biriga rosa parallel joylashgan va yaxshilab silliqlangan. Ulardan biri shaffof bo‘lmagan, ikkinchisi esa qisman shaffof darajada kumush qatlami bilan qoplangan. Qisman shaffof sirtdan 92% yorug‘lik oqimi qaytadi va 8% ga yaqinini u o‘zi orqali o‘tkazadi. Bu o‘zaro parallel ko‘zgular generatorning rezonatori vazifasini o‘taydi.",
      },
      {
        text: "Yoqut sterjen spiral ko‘rinishdagi impulsli 2 ksenon lampa ichiga joylashtirilgan bo‘lib, lampa kondensatorlar batareyasiga ulangan (201- rasmga qarang). Kondensator batareyasidan kelgan qisqa vaqtli tok impulsi lampani yorug‘ chaqnatadi va sterjen yoritiladi, lampa",
      },
      {
        text: "uyg‘otuvchi nurlanish manbayi bo‘lib xizmat qiladi.Nurlanishda chastotaga qizil yorug‘likning =6,943·10-7 m to‘lqin uzunligi mos keladi.",
      },
      {
        text: "Atomlarni asosiy holatdan uyg‘ongan holatga o‘tkazish uchun kerakli bo‘ladigan energiyani uzatish jarayoni nakachka (quvvatlash) deb ataladi. Bu lazerda foydalaniladigan impulsli ksenon lampani nakachka lampasi deb ataladi. Ko‘zgudan qaytgandan keyin fotonlar qarama-qarshi yo‘nalishda harakatlanadi va yo‘l-yo‘lakay metastabil sathda qolgan uyg‘ongan atomlarni nurlanishga majbur qiladi. Bu nurlanish rezonatorning yarimshaffof ko‘zgusidan tashqariga chiqadi (rasmga qarang). Nurlanish to‘lqin uzunligi =694,3 angestrem bo‘lgan monoxromatik, kogerent va o‘tkir yo‘nalishli bo‘lib, uni lazer nurlari deb ataladi. Yoqut lazerlari impuls rejimda ishlaydi.",
      },
      {
        text: "Lazer nurlanishining bir qator ajoyib xossalari mavjud. Lazer nurlanishi, birinchidan, vaqt bo‘yicha va fazoviy kogerent; ikkinchidan, qat'iy monoxromatik; uchinchidan, quvvati katta; to‘rtinchidan, dastasi o‘tkir yo‘nalishli (ingichka) bo‘ladi.",
      },
      {
        text: "Lazer eng kuchli yorug‘lik manbalaridir. Bunga sabab yorug‘lik to‘lqinida elektr maydoni kuchlanganligining yuqori bo‘lishidir.",
      },
      {
        text: "Quyosh nuri uchun monoxromatik yorug‘likning elektr maydon kuchlanganligi taxminan 103 V/m ga teng bo‘lsa, lazer nuri uchun bu kattalik 1011 V/m  ga yetishi mumkun.",
      },
      {
        text: "Kichik quvvatli impuls lazerlardan mikroelektronika va elek- trovakuum sanoatida mitti detallarni kesish hamda payvandlashda, mitti detallarga markalar tushirishda foydalaniladi; poligrafiya sanoati ehtiyojlari uchun raqamlar, harflar, tasvirlar avtomatik tarzda kuydirib tayyorlanadi.",
      },
      {
        text: "Lazer texnologiyasining ikkinchi turi o‘rtacha quvvati katta bo‘lgan lazerlardan foydalanishga asoslangan. Bunday lazerlardan kuchli texnologik jarayonlar: qalin po‘lat listlarni qirqish va payvandlash, sirtqi toblash, yirik gabaritli detallarga metallni eritib yopishtirish va legirlash (metallarni xrom, nikel va boshqalar bilan qoplash), binolar sirtini tozalash, marmar, granitni kesish, gazlama, teri va boshqa materiallarni bichishda foydalaniladi.",
      },
      {
        text: "Shuningdek, respublikada terapevtik ta'sir etish uchun lazer asboblari ishlab chiqariladi. Bu asboblar turli tibbiyot muassasalarida ko‘z va teri kasalliklarini davolash uchun, operatsiyadan keyingi va kuyish jarohatlarining bitish muddatini qisqartirish uchun keng qo‘llaniladi.",
      },
      {
        text: "Hozirgi vaqtda lazer texnologiyalaridan foydalanish jadal o‘sib bormoqda. Hozirda biz dunyoni lazer kompakt disklarsiz, lazer printerlarsiz, nishonni mo‘ljalga olish va aniqlashning lazer sistemalarisiz, lazer lokatsiyasi va lazer aloqasisiz tasavvur qila olmaymiz. Hatto hozirgi zamon butunjahon informatsion tarmoq-Internet ham aloqaning lazer texnologiyasidan foydalanadi.",
      },
    ],
  },
  {
    id: 4,
    title: "Atom yadrosining tarkibi.",
    desctiption: "mutaxassislarning maqolalarini o'qing",
    keyValue: "quiz",
    media: {
      images: [image1],
      gifsEmbed: [
        `https://player.vimeo.com/video/1009431766?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`,
      ],
    },
    paragraphs: [
      {
        text: "Atom yadrosi ham atomning o‘zi singari ma'lum ichki tuzilishga ega. 1932- yilgacha olimlar atomlarning yadrolari protonlar (vodorod yadrolari) va elektronlardan iborat, deb qarar edilar. Biroq atom yadrolarining tuzilishi haqidagi bunday tasavvur noto‘g‘ri edi. Atom yadrolarining tuzilishini bunday tushunishda atomlarning yadrolarida elektronlarning mavjudligi dalilini mutlaqo izohlab bo‘lmas edi. ",
      },
      {
        text: `1932- yilda ingliz fizigi, Rezerfordning shogirdi D. Chedvik yangi zarra - neytronni kashf etdi. Bu kashfiyot yadro fizikasi uchun muhim voqea edi.`,
      },

      {
        text: `D.D. Ivanenko va V. Geyzenberg nazariyasiga ko‘ra barcha atom yadrolari tarkibiga faqat ikki xil zarra: protonlar va neytronlar kiradi. Yadroning proton-neytronli nazariyasi hozirgi vaqtda butun dunyoda tan olingan nazariya bo‘lib qoldi. `,
      },
      {
        text: "Proton musbat zaryadga ega bo‘lib, uning zaryadi elektron zaryadiga teng (ya'ni, elementar zaryadga teng: e=1,6·10-19 C) va tinch holatdagi massasi mp =1,6724·10-27 kg. Neytronning zaryadi yo‘q, u neytral zarra hisoblanadi. Neytronning massasi proton massasidan bir oz kattaroq va mn =1,6748·10-27 kg. Protonni p harfi bilan, neytronni n harfi bilan belgilash qabul qilingan. Bu zarralar nuklonlar deb ataladi.",
      },
      {
        text: "Yadro va elementar zarralarning massasi, odatda, massaning atom birligi (m.a.b.)da ifodalanadi. Massaning atom birligi qilib uglerod atomi massasining 1/12 qismi qabul qilingan. Bu birlik quyidagiga teng:",
      },
      {
        text: "1 m.a.b. =1,66·10-27 kg.",
      },
      {
        text: "Demak, mp=1,00747 m.a.b, mn=1,00892 m.a.b.",
      },
      {
        text: "Shunday qilib:",
        formula: formula13,
      },
      {
        text: "Istalgan kimyoviy elementning Mendeleyev davriy sistemasidagi atom nomeri Z ga teng. Elementning atom yadrosidagi protonlar soni Np elementning atom nomeri Z ga teng:",
        formula: formula14,
      },
      {
        text: "Yadrodagi nuklonlar soni (ya'ni, protonlar va neytronlar yig‘in- disi) yadroning massa soni deb ataladi va A harfi bilan belgilanadi.",
        formula: formula15,
      },
      {
        text: "Massaning atom birligi (m.a.b.) da ifodalangan yadro massasining son qiymati (atom og‘irligi)ga eng yaqin bo‘lgan butun son massa soni A ga teng bo‘ladi.",
      },
      {
        text: "Kimyoviy elementlarning atomi yadrolarini (_Z^A)X simvol bilan belgilash qabul qilingan, bunda: X - elementning kimyoviy simvoli, A - massa soni; Z - atomning tartib nomeri. Masalan, (_2^4)He – geliy atomi yadrosini, (_8^16)O – kislorod atomi yadrosini bildiradi.",
      },
      {
        text: "Atom yadrolarida protonlar soni bir xil, ammo neytronlar soni har xil bo‘ladi. Bunday  elementlarning atomlariga shu elementning izotoplari deyiladi. Masalan (_7^16)N va (_7^15)N, kislorodning uchta izotopi bor: (_8^16)O, (_8^17)O, (_8^18)O hokazo.",
      },
      {
        text: "A massa soni bir xil bo‘lgan yadrolar izobarlar deyiladi. Izobarlarga (_18^40)Ar va (_20^40)Ca, (_3^7)Li va (_4^7)Be yadrolar misol bo‘la oladi.",
      },
      {
        text: "Neytronlar soni bir xil bo‘lgan yadrolar izotonlar deyiladi. Bunga misol qilib (_6^13)C va (_7^14)N, (_3^7)Li va (_4^8)Be yadrolarni ko‘rsatish mumkin.",
      },
    ],
  },
  {
    id: 5,
    title: "Yadro kuchlari. Yadroviy o‘zaro tasirning almashinuv modeli.",
    desctiption: "mutaxassislarning maqolalarini o'qing",
    keyValue: "quiz",
    media: {
      images: [image1],
      gifsEmbed: [
        `https://player.vimeo.com/video/1009431766?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`,
      ],
    },
    paragraphs: [
      {
        text: "Yadrolar juda barqaror sistemadir, binobarin, protonlar va neytronlar yadro ichida qandaydir juda katta kuchlar bilan tutib turiladi. Yadrolarning tuzilishi haqidagi ta'limotning eng muhim masalalaridan biri yadroda mavjud bo‘lgan nuklonlarni tutib turuvchi kuchlarning tabiati haqidagi masaladir.",
      },
      {
        text: `1932- yilda ingliz fizigi, Rezerfordning shogirdi D. Chedvik yangi zarra - neytronni kashf etdi. Bu kashfiyot yadro fizikasi uchun muhim voqea edi.`,
      },

      {
        text: `1.	Yadro kuchlari qisqa masofada ta'sir etadigan kuchlardir. Bu kuchlar nuklonlarni bir-biridan 10-15 m masofada ushlab turadi. Nuklonlar orasidagi masofa 2·10-15 m dan ortganda ularning ta'siri sezilmaydi. Nuklonlar orasidagi masofa 1·10-15 m dan kichik bo‘lganda ular tortishish o‘rniga itarishadi. Yadro kuchlari ta'sir etadigan r =2·10-15 m masofaga yadro kuchlarining ta’sir radiusi deyiladi.`,
      },
      {
        text: "2.	Kuchli o‘zaro ta'sir nuklonlar zaryadiga bog‘liq bo‘lmaydi. Ikki proton, proton va neytron, ikki neytron orasida ta'sir qiluvchi yadro kuchlari kattaligi jihatdan bir xil bo‘ladi. Bu xossa yadro kuchlarining zaryaddan mustaqilligi deyiladi.",
      },
      {
        text: "3.	Yadro kuchlari gravitatsion yoki Kulon kuchlari kabi markaziy kuchlar emas. Bu kuchlar nuklonlar orasidagi masofaga bog‘liq bo‘lish bilan birga, yana o‘zaro ta'sirlashayotgan nuklonlar spinlarining bir-biriga nisbatan qanday joylashganiga ham bog‘liq bo‘ladi.",
      },
      {
        text: "4.	Yadro kuchlari to‘yinish xossasiga ega. Bu xossaga ko‘ra har bir nuklon yadrodagi barcha nuklonlar bilan emas, balki o‘ziga yaqin turgan chekli sanoqli nuklonlar bilangina o‘zaro ta’sirda bo‘ladi",
      },
      {
        text: "5.	Yadro kuchlari almashinish xarakteriga ega. 1935- yilda yapon fizigi X. Yukava yadroda nuklonlar bir-biri bilan alohida elementar zarralarni almashtirish yo‘li bilan o‘zaro ta’sirlashadi, degan gipotezani ilgari surdi. Bu zarralarning tinchlikdagi massasi elektron va nuklon massalari oralig‘ida bo‘lib, taxminan 300 me ga teng va -mezonlar yoki pionlar deb ataladi (grekcha «mezon» so‘zi - «o‘rta» deganni bildiradi), bunda me -  elektronning tinchlikdagi massasi. Yukava nazariyasiga ko‘ra nuklonlar o‘z atrofida (elektr zarayadlarning elektromagnit maydoniga o‘xshash) mezon maydoni hosil qiladi. Bu maydon proton va neytronlarga turlicha ta'sir ko‘rsatadi. Elektr zaryadlarning fotonlarini chiqarishi va yutishi kabi nuklonlar bu maydon kvantlari - pionlar chiqarishi va yutishi mumkin.",
      },

      {
        text: "Yadro kuchlarining tabiatini va qonuniyatlarini tushuntirib beradigan qat’iy nazariya mavjud emas. Shu sababli atom yadrosining turli xossalari yadro modellari yordamida o‘rganiladi.",
      },
      {
        text: "Yadroning tomchi modelini 1938- yilda Ya.I. Frenkel ishlab chiqqan, N. Bor va Vayszekkerlar tomonidan rivojlantirilgan. Frenkel nazariyasiga ko‘ra atom yadrosini zaryadlangan suyuqlik tomchisiga o‘xshatish mumkin. Suyuqlik tomchisidagi molekulalar o‘zaro molekulyar tutinish kuchlari bilan bog‘langani singari yadroni tashkil qiluvchi nuklonlar ham o‘zaro yadro kuchlari bilan bog‘langan. ",
      },
      {
        text: "Yadroning qobiqsimon modeli atom yadrosining eng samarali zamonaviy modellaridan biri hisoblanadi. Bu modelga ko‘ra yadrodagi nuklonlar ularning o‘zi hosil qilgan maydonda deyarli bir-biridan mustaqil harakatlanadi. Yadroda ham, xuddi atomdagidek, diskret energetik sathlar bo‘lib, ular nuklonlar bilan to‘ldiriladi. Energetik sathlari bir-biriga yaqin bo‘lgan nuklonlar yadro qobiqlarini hosil qiladi.",
      },
      {
        text: "Hozirgi vaqtda yadroning qobiqsimon modeli oxirigacha yetkazilmagan bo‘lsa0da, ko‘p olimlar tomonidan tan olingan. Amalda yadrolarning 2, 8, 14, 20, 28, 50, 82, 126 ta nuklonlar bilan to‘ldirilgan qobiqlari topilgan. Berk yadro qobig‘idagi nuklonlarning bu sonini magik sonlar (sehrli sonlar) deb ataladi. Aniqlanishicha, nuklonlar (proton yoki neytronlar) soni magik sonlarga teng bo‘lgan yadrolar boshqalariga qaraganda turg‘unroq bo‘lar ekan.",
      },
    ],
  },
];

export const infoTests = [
  {
    id: 1,
    title: quiz.topic,
    totalTest: quiz.questions.length,
    path: "/test/quiz",
    keyValue: "quiz",
    favouriteColor: "#0D6EFD",
    db: quiz,
  },
  {
    id: 2,
    title: trueFalseQuiz.topic,
    totalTest: trueFalseQuiz.questions.length,
    path: "/test/true-false",
    keyValue: "truFalseQuiz",
    favouriteColor: "#79C142",
    db: trueFalseQuiz,
  },
  {
    id: 3,
    title: moreButtonsQuiz.topic,
    totalTest: moreButtonsQuiz.questions.length,
    path: "/test/more-buttons",
    keyValue: "moreButtons",
    favouriteColor: "#FFE500",
    db: moreButtonsQuiz,
  },
  {
    id: 4,
    title: imageQuiz.topic,
    totalTest: imageQuiz.questions.length,
    path: "/test/image-quiz",
    keyValue: "imageQuiz",
    favouriteColor: "#EE1D23",
    db: imageQuiz,
  },
  {
    id: 5,
    title: matchingPairWordsQuiz.topic,
    totalTest: matchingPairWordsQuiz.questions.length,
    path: "/test/matching-pair-words-quiz",
    keyValue: "matchingPairWordsQuiz",
    favouriteColor: "#F47921",
    db: matchingPairWordsQuiz,
  },
  {
    id: 6,
    title: quiz_1.topic,
    totalTest: quiz_1.questions.length,
    path: "/test/quiz_1",
    keyValue: "quiz_1",
    favouriteColor: "#0D6EFD",
    db: quiz_1,
  },
  {
    id: 7,
    title: quiz_2.topic,
    totalTest: quiz_2.questions.length,
    path: "/test/quiz_2",
    keyValue: "quiz_2",
    favouriteColor: "#0D6EFD",
    db: quiz_2,
  },
  {
    id: 8,
    title: quiz_3.topic,
    totalTest: quiz_3.questions.length,
    path: "/test/quiz_3",
    keyValue: "quiz_3",
    favouriteColor: "#0D6EFD",
    db: quiz_3,
  },
  {
    id: 9,
    title: quiz_4.topic,
    totalTest: quiz_4.questions.length,
    path: "/test/quiz_4",
    keyValue: "quiz_4",
    favouriteColor: "#0D6EFD",
    db: quiz_4,
  },
  {
    id: 10,
    title: quiz_5.topic,
    totalTest: quiz_5.questions.length,
    path: "/test/quiz_5",
    keyValue: "quiz_5",
    favouriteColor: "#0D6EFD",
    db: quiz_5,
  },
  {
    id: 11,
    title: quiz_6.topic,
    totalTest: quiz_6.questions.length,
    path: "/test/quiz_6",
    keyValue: "quiz_6",
    favouriteColor: "#0D6EFD",
    db: quiz_6,
  },
  {
    id: 12,
    title: quiz_7.topic,
    totalTest: quiz_7.questions.length,
    path: "/test/quiz_7",
    keyValue: "quiz_7",
    db: quiz_7,
    favouriteColor: "#0D6EFD",
  },
  {
    id: 13,
    title: quiz_8.topic,
    totalTest: quiz_8.questions.length,
    path: "/test/quiz_8",
    keyValue: "quiz_8",
    favouriteColor: "#0D6EFD",
    db: quiz_8,
  },
];
