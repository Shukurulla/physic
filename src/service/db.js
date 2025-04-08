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
  topic: "Atom tuzilishi. Tomson modeli. Rezerford tajribasi",
  perQuestionScore: 5,
  questions: [
    {
      question: "J. Tomson o‘zining atom modelini qachon taklif qildi?",
      choices: ["1948-yilda", "1903-yilda", "1957-yilda", "1991-yilda"],
      correctAnswer: "1903-yilda",
    },

    {
      question:
        "Elektronning massasi vodorod atomi massasidan qanchaga kichik?",
      choices: ["2336 marta", "36 marta", "1836 marta", "72 marta"],
      correctAnswer: "1836 marta",
    },
    {
      question: "Rezerford tajribasida qaysi nurdan foydalanildi?",
      choices: ["foton", "gamma", "betta", "alfa"],
      correctAnswer: "alfa",
    },
    {
      question: "Rezerford tajiriybasida yupqa folga qog‘oz nimadan yasalgan?",
      choices: ["kumushdan", "oltindan", "temirdan", "misdan"],
      correctAnswer: "oltindan",
    },
    {
      question:
        "Rezerford tajiriybasida alfa zarralar atom yadrosiga to‘g‘ri yuzma-yuz kelganlarida…",
      choices: [
        "orqaga qaytgan",
        "yo‘nalishi o‘zgarmagan",
        "aylana chizgan",
        "to‘xtab qolgan",
      ],
      correctAnswer: "yo‘nalishi o‘zgarmagan",
    },
  ],
};

export const quiz_2 = {
  topic: "Borning kvant postulatlari",
  questions: [
    {
      question:
        "Vodorod atomidagi elektron birinchi kvant orbitasida harakatlanmoqda. Agar orbitaning radiusi \\( r_1 = 5,29 * 10^{-11}{m} \\) bo‘lsa, elektronning tezligini aniqlang. (Elektronning zaryadi \\( e_1 = 1,6 * 10^{-19} \t{C} \\), massasi \\( m_e = 9,11 * 10^{-31}  {kg} \\), va Kulon doimiysi \\( k = 9 * 10^9 {N}{m}^2 / {C}^2 \\))",
      choices: [
        "\\( 1,09 * 10^6 \t{m/s} \\)",
        "\\( 2,18 * 10^6 \t{m/s} \\)",
        "\\( 3,27 * 10^6 {m/s} \\)",
        "\\( 4,36 * 10^6 {m/s} \\)",
      ],
      correctAnswer: "\\( 2,18 * 10^6 , \text{m/s} \\)",
    },
    {
      question:
        "Vodorod atomida elektron uchinchi orbitadan birinchi orbitaga o‘tmoqda. Agar birinchi orbitadagi energiya \\( E_1 = -13,6  \t{eV} \\), uchinchi orbitadagi energiya \\( E_3 = -1,51 {eV} \\) bo‘lsa, chiqadigan fotonning chastotasini aniqlang. (Plank doimiysi \\( h = 6,626 * 10^{-34}  \t{Js} \\))",
      choices: [
        "\\( 2,47 * 10^{14} {Hz} \\)",
        "\\( 1,03 * 10^{15} {Hz} \\)",
        "\\( 4,17 * 10^{15} {Hz} \\)",
        "\\( 3,29 * 10^{15} {Hz} \\)",
      ],
      correctAnswer: "\\( 4,17 * 10^{15} {Hz} \\)",
    },
    {
      question:
        "Elektron uchinchi kvant orbitada harakatlanmoqda. Bor modeliga ko‘ra, uchinchi orbitadagi burchak momentini toping. (Plank doimiysi \\( h = 6,626 * 10^{-34} , {Js} \\))",
      choices: [
        "\\( 3,5 * 10^{-34} {Js} \\)",
        "\\( 6,0 * 10^{-34} {Js} \\)",
        "\\( 3,16 * 10^{-34} {Js} \\)",
        "\\( 9,94 * 10^{-34} {Js} \\)",
      ],
      correctAnswer: "\\( 9,94 * 10^{-34} {Js} \\)",
    },
    {
      question:
        "Bor modeliga ko‘ra, ikkinchi orbitaning radiusi qanday? Agar birinchi orbitaning radiusi \\( r_1 = 5,29 * 10^{-11} , {m} \\) bo‘lsa.",
      choices: [
        "\\( 1,06 * 10^{-10} {m} \\)",
        "\\( 2,12 * 10^{-10} {m} \\)",
        "\\( 1,59 * 10^{-10} {m} \\)",
        "\\( 5,29 * 10^{-11} {m} \\)",
      ],
      correctAnswer: "\\( 2,12 * 10^{-10} {m} \\)",
    },
    {
      question:
        "Elektron ikkinchi orbitadan uchinchi orbitaga o‘tmoqda. Agar ushbu o‘tish davomida chiqqan fotonning energiyasi \\( 10,2{eV} \\) bo‘lsa, fotonning to‘lqin uzunligini toping. (Plank doimiysi \\( h = 6,626 * 10^{-34}{Js} \\), yorug‘lik tezligi \\( c = 3 * 10^8 {m/s} \\))",
      choices: [
        "\\( 122 {nm} \\)",
        "\\( 488 {nm} \\)",
        "\\( 250 {nm} \\)",
        "\\( 50 {nm} \\)",
      ],
      correctAnswer: "\\( 122 {nm} \\)",
    },
  ],
};

export const quiz_3 = {
  topic: "Lazerlar",
  questions: [
    {
      question:
        "Yoqut lazerida aktiv muhit sifatida tarkibida 0,05% ga yaqin ... bo‘lgan yoqut kristalli (Al₂O₃) dan foydalaniladi.",
      choices: [
        "xrom aralashmasi",
        "geliy aralashmasi",
        "temir aralashmasi",
        "oltin aralashmasi",
      ],
      correctAnswer: "oltin aralashmasi",
    },
    {
      question:
        "Lazer nurlarining elektr maydon kuchlanganligi taxminan qanchaga yetadi.",
      choices: ["10¹¹ V/m", "10⁸ V/m", "10¹⁴ V/m", "10⁵ V/m"],
      correctAnswer: "10¹¹ V/m",
    },
    {
      question: "Yoqut lazerlari qanday ishlaydi?",
      choices: [
        "impuls rejimda",
        "kontakt rejimda",
        "sinov rejimda",
        "rele rejimida",
      ],
      correctAnswer: "impuls rejimda",
    },
    {
      question: "Lazer nurlanishi qanday xossaga ega?",
      choices: [
        "qat’iy monoxromatik",
        "katta sochilishga",
        "oddiy nur bilan bir xil",
        "kichik quvvatga",
      ],
      correctAnswer: "qat’iy monoxromatik",
    },
    {
      question:
        "Lazer nurlanishi:\n1) vaqt bo‘yicha va fazoviy koherent;\n2) qat’iy monoxromatik;\n3) quvvati katta;\n4) dastasi o‘tkir yo‘nalishli (ingichka) bo‘ladi.",
      choices: ["1,2,3,4", "3,4", "1,2", "1,2,4"],
      correctAnswer: "1,2,3,4",
    },
  ],
};
export const quiz_4 = {
  topic: "Atom yadrosining tarkibi",
  questions: [
    {
      question:
        "Atom yadrosi 13 ta proton va 14 ta neytrondan tashkil topgan. Ushbu elementning yadro zaryadi sonini va umumiy massasini (massiv sonini) aniqlang.",
      choices: ["Z=27, A=13", "Z=13, A=27", "Z=14, A=13", "Z=27, A=14"],
      correctAnswer: "Z=13, A=27",
    },
    {
      question:
        "Azotning yadrosida 7 ta proton bor. Uning massaviy soni A=15. Ushbu yadroning neytronlar sonini aniqlang.",
      choices: ["7 ta", "8 ta", "15 ta", "22 ta"],
      correctAnswer: "8 ta",
    },
    {
      question:
        "Geliy yadrosida 2 ta proton va 2 ta neytron bor. Agar proton massasi 1,0073 u, neytron massasi 1,0087 u bo‘lsa, yadroning umumiy massasi qanday bo‘ladi?",
      choices: ["4,032 u", "4,012 u", "4,004 u", "4,027 u"],
      correctAnswer: "4,032 u",
    },
    {
      question:
        "Qandaydir element yadrosida 20 ta proton va 24 ta neytron bor. Proton va neytronlar sonining nisbatini toping.",
      choices: ["5:6", "4:5", "6:5", "5:4"],
      correctAnswer: "5:6",
    },
    {
      question:
        "Elementning massaviy soni A=40, zaryadli soni Z=20. Ushbu element qanday kimyoviy elementga tegishli?",
      choices: ["Kaliy (K)", "Kalsiy (Ca)", "Xlor (Cl)", "Magniy (Mg)"],
      correctAnswer: "Kalsiy (Ca)",
    },
  ],
};

export const quiz_5 = {
  topic: "Yadro kuchlari. Yadroviy o‘zaro ta’sirning almashinuv modeli",
  questions: [
    {
      question: "Yadro kuchlari bu …",
      choices: [
        "yadroda nuklonlarni tutib turuvchi kuch",
        "gravitatsiyaviy kuch",
        "yadroda neytronlarni tutib turuvchi kuch",
        "yadroda elektronni tutib turuvchi kuch",
      ],
      correctAnswer: "yadroda nuklonlarni tutib turuvchi kuch",
    },
    {
      question:
        "Yadro kuchlari qaysi zarralar orasida mavjud? 1) p-n 2) p-p 3) n-n 4) p-e 5) n-e 6) e-e",
      choices: ["1,2,3", "1,4,5", "2,3,6", "4,5,6"],
      correctAnswer: "1,2,3",
    },
    {
      question:
        "Frenkel nazariyasiga ko‘ra atom yadrosini zaryadlangan suyuqlik tomchisiga o‘xshatish mumkin. Bu …",
      choices: [
        "yadroning tomchi modeli",
        "yadroining qobiqsimon modeli",
        "yadroining shar modeli",
        "yadroining planetar modeli",
      ],
      correctAnswer: "yadroning tomchi modeli",
    },
    {
      question:
        "Yadro kuchlari ta’sir etadigan masofaga yadro kuchlarining ... deyiladi.",
      choices: [
        "ta’sir radiusi",
        "ta’sir diametri",
        "ta’sir segmenti",
        "ta’sir maydoni",
      ],
      correctAnswer: "ta’sir radiusi",
    },
    {
      question:
        "Yadro kuchlari nuklonlarni bir-biridan qancha masofada ushlab turadi?",
      choices: ["10⁻¹⁵ m", "10⁻¹⁴ m", "10⁻¹³ m", "10⁻¹² m"],
      correctAnswer: "10⁻¹⁵ m",
    },
  ],
};

export const quiz_6 = {
  topic: "Atom yadrolarining bog‘lanish energiyasi",
  questions: [
    {
      question:
        "Energiyaning 4,19 J o‘zgarishi massaning qanday o‘zgarishiga mos keladi?",
      choices: [
        "3,66·10⁻¹⁷ kg",
        "4,66·10⁻¹⁷ kg",
        "5,66·10⁻¹⁷ kg",
        "6,66·10⁻¹⁷ kg",
      ],
      correctAnswer: "4,66·10⁻¹⁷ kg",
    },
    {
      question:
        "Elektron massasining miqdorini tinch turgan elektron massasi miqdoricha o‘zgartirilganda uning energiyasining o‘zgarishini toping.",
      choices: ["7,19·10⁻¹⁴ J", "8,19·10⁻¹⁴ J", "9,19·10⁻¹⁴ J", "6,19·10⁻¹⁴ J"],
      correctAnswer: "8,19·10⁻¹⁴ J",
    },
    {
      question: "Vodorod izotipi ¹²H yadrosining massa defektini hisoblang.",
      choices: [
        "2,97·10⁻³⁰ kg",
        "3,97·10⁻³⁰ kg",
        "4,97·10⁻³⁰ kg",
        "5,97·10⁻³⁰ kg",
      ],
      correctAnswer: "3,97·10⁻³⁰ kg",
    },
    {
      question:
        "Alyuminiy atomi ²⁷₁₃Al yadrosining bog‘lanish energiyasini toping.",
      choices: ["2,36·10⁻¹¹ J", "3,36·10⁻¹¹ J", "4,36·10⁻¹¹ J", "5,36·10⁻¹¹ J"],
      correctAnswer: "3,36·10⁻¹¹ J",
    },
    {
      question: "Geliy atomi ⁴₂He yadrosining bog‘lanish energiyasini toping.",
      choices: ["3,37·10⁻¹² J", "4,37·10⁻¹² J", "5,37·10⁻¹² J", "6,37·10⁻¹² J"],
      correctAnswer: "4,37·10⁻¹² J",
    },
  ],
};
export const quiz_7 = {
  topic: "Radioaktivlik va ularning turlari",
  questions: [
    {
      question:
        "Ularni yupqa alyuminiy varag‘i yoki qog‘oz varag‘i bilan ham tutib qolish mumkin. Bu …",
      choices: [
        "\\( \\alpha \\)-nurlardir",
        "\\( \\beta \\)-nurlardir",
        "gamma nurlardir",
        "rentgen nurlardir",
      ],
      correctAnswer: "\\( \\alpha \\)-nurlardir",
    },
    {
      question:
        "…-nurlari chastotasi juda katta \\( (10^{20} \\{ Hz}) \\), to‘lqin uzunligi esa juda qisqa \\( (10^{-12} \\{ m}) \\) bo‘lgan elektromagnit to‘lqinlar.",
      choices: [
        "\\( \\alpha \\)-nurlardir",
        "\\( \\beta \\)-nurlardir",
        "gamma nurlardir",
        "rentgen nurlardir",
      ],
      correctAnswer: "gamma nurlardir",
    },
    {
      question:
        "Bu qanday radioaktiv nurlanish? \n\\[ ^{210}_{84}\\{Po} \\rightarrow ^{206}_{82}\\{Pb} + ^{4}_{2}\\{He} \\]",
      choices: [
        "\\( \\alpha \\)-nurlanish",
        "\\( \\beta \\)-nurlanish",
        "gamma nurlanish",
        "rentgen nurlanish",
      ],
      correctAnswer: "\\( \\alpha \\)-nurlanish",
    },
    {
      question:
        "Bu qanday radioaktiv nurlanish? \n\\[ ^{210}_{83}\\text{Bi} \\rightarrow ^{210}_{84}\\text{Po} + \\beta^- + \\bar{\\nu} \\]",
      choices: [
        "\\( \\alpha \\)-nurlanish",
        "\\( \\beta \\)-nurlanish",
        "gamma nurlanish",
        "rentgen nurlanish",
      ],
      correctAnswer: "\\( \\beta \\)-nurlanish",
    },
    {
      question:
        "Radioaktiv nurlanish natijasida nurlanish zarrasi qanday? \n\\[ ^{30}_{15}\\text{P} \\rightarrow ^{30}_{14}\\text{Si} + \\beta^+ \\]",
      choices: ["elektron", "pozitron", "proton", "geliy yadrosi"],
      correctAnswer: "pozitron",
    },
  ],
};
export const quiz_8 = {
  topic: "Radioaktiv yemirilish qonuni. Yarim yemirilish davri",
  questions: [
    {
      question:
        "Agar yadrodan: 1) proton; 2) \\( \\alpha \\)-zarra otilib chiqsa, atom massasi va element nomeri qanday o‘zgaradi?",
      choices: [
        "1) kamayadi-kamayadi 2) kamayadi-kamayadi.",
        "1) ortadi-kamayadi 2) ortadi-kamayadi.",
        "1) ortadi-ortadi 2) kamayadi-kamayadi.",
        "1) ortadi-ortadi 2) ortadi-ortadi.",
      ],
      correctAnswer: "1) kamayadi-kamayadi 2) kamayadi-kamayadi.",
    },
    {
      question:
        "Ikkita \\( \\beta \\)-yemirilish va bitta \\( \\alpha \\)-yemirilishdan so‘ng \\( ^{238}_{92}U \\) dan qanday izotop hosil bo‘ladi?",
      choices: [
        "\\( ^{234}_{92}U \\rightarrow ^{232}_{90}Pu \\)",
        "\\( ^{234}_{89}Np \\)",
        "\\( ^{234}_{89}Th \\)",
        "\\( ^{238}_{88}Ra \\)",
      ],
      correctAnswer: "\\( ^{234}_{89}Np \\)",
    },
    {
      question:
        "Agar proton tomonidan neytron tutib olinsa, qaysi element atomining yadrosi hosil bo‘ladi? Reaksiya formulasini yozing.",
      choices: [
        "\\( ^{2}_{1}H \\)",
        "\\( ^{1}_{1}H \\)",
        "\\( ^{3}_{1}H \\)",
        "\\( ^{1}_{0}n \\)",
      ],
      correctAnswer: "\\( ^{2}_{1}H \\)",
    },
    {
      question:
        "Radioaktiv yemirilish natijasida uran \\( ^{238}_{92}U \\) qo‘rg‘oshin \\( ^{206}_{82}Pb \\) ga aylanadi. Bunda u necha marta \\( \\alpha \\)- va \\( \\beta \\)-yemirilishlarga duch kelgan?",
      choices: [
        "8 ta \\( \\alpha \\) va 6 ta \\( \\beta \\)",
        "6 ta \\( \\alpha \\) va 8 ta \\( \\beta \\)",
        "7 ta \\( \\alpha \\) va 7 ta \\( \\beta \\)",
        "8 ta \\( \\alpha \\) va 4 ta \\( \\beta \\)",
      ],
      correctAnswer: "8 ta \\( \\alpha \\) va 6 ta \\( \\beta \\)",
    },
    {
      question:
        "Radon atom soni 1 sutkada 18.2% kamayса, radonning yemirilish doimiysini toping.",
      choices: [
        "\\( 2,33 \\* 10^{-6} \\)",
        "\\( 3,33 \\* 10^{-6} \\)",
        "\\( 4,33 \\* 10^{-6} \\)",
        "\\( 5,33 \\* 10^{-6} \\)",
      ],
      correctAnswer: "\\( 3,33 \\* 10^{-6} \\)",
    },
  ],
};
export const quiz_9 = {
  topic: "Elementar zarralarni kuzatish va qayd qilish usullari.",
  questions: [
    {
      question:
        "Pufakli kamera amerikalik fizik ... tomonidan ixtiro qilingan.",
      choices: ["D. Gleyzer", "A. Eynshteyn", "N. Bor", "I. Nyuton"],
      correctAnswer: "D. Gleyzer",
    },
    {
      question:
        "Havoda uchib o‘tayotgan zarra hosil qiladigan ionlarning o‘ta to‘yingan bug‘ uchun kondensatsiya markazi bo‘lib qolishiga asoslangan",
      choices: [
        "Vilson kamerasi",
        "Pufakli kamera",
        "Geyger sanagichi",
        "Uch o‘lchamli kamera",
      ],
      correctAnswer: "Vilson kamerasi",
    },
    {
      question:
        "Harakatlanayotgan zaryadli zarraning gaz molekulalari va atomlarini ionlashtirishiga asoslangan",
      choices: [
        "Geyger sanagich",
        "Pufakli kamera",
        "Vilson kamerasi",
        "Rezerford usuli",
      ],
      correctAnswer: "Geyger sanagich",
    },
    {
      question:
        "Radioaktiv nurlanish natijasida chiqqan zarralar ta'sirida moddaning chaqnab (sintillatsiyalar) yorug‘lik chiqarishiga asoslangan.",
      choices: [
        "Chaqnash usuli",
        "Pufakli kamera",
        "Vilson kamerasi",
        "Geyger sanagichi",
      ],
      correctAnswer: "Chaqnash usuli",
    },
    {
      question:
        "Bu usul zaryadlangan zarra mayda donali fotoemulsiya qatlamiga tushganda unda o‘z yo‘lining yashirin izini qoldirishiga asoslangan",
      choices: [
        "Qalin qatlamli fotoemulsiya usuli. ",
        "Pufakli kamera",
        "Vilson kamerasi",
        "Geyger sanagichi",
      ],
      correctAnswer: "Qalin qatlamli fotoemulsiya usuli. ",
    },
  ],
};
export const quiz_10 = {
  topic: "Sun’iy radioaktivlik. Yadro reaksiyalari",
  questions: [
    {
      question:
        "\\( ^{10}_{5}B \\) bor izotopining qanday zarra bilan bombardimon qilinaganda radioaktiv azot \\( ^{13}_{7}N \\) hosil bo‘ladi va u neytron chiqarib parchalanadi.",
      choices: [
        "A) proton",
        "B) neytron",
        "C) \\( \\alpha \\)-zarra",
        "D) elektron",
      ],
      correctAnswer: "A) proton",
    },
    {
      question:
        "\\( ^{17}_{7}N \\) radioaktiv azot parchalanib, uglerod \\( ^{18}_{6}C \\) izotopiga aylanadi. Bunda qanday zarra otilib chiqadi?",
      choices: ["A) elektron", "B) pozitron", "C) proton", "D) geliy yadrosi"],
      correctAnswer: "A) elektron",
    },
    {
      question:
        "Litiy \\( ^{6}_{3}Li \\) yadrosiga neytron tushib, reaksiya jarayonida \\( \\alpha \\)-zarra uchib chiqqan. Bu reaksiya natijasida qanday yadро hosil bo‘lgan?",
      choices: ["A) deytriy", "B) tritiy", "C) vodorod", "D) pozitron"],
      correctAnswer: "B) tritiy",
    },
    {
      question:
        "5g uran \\( ^{235}_{92}U \\) izotopining radioaktiv yemirilishida qancha kW-soat energiya ajralib chiqadi?",
      choices: [
        "A) 114 kW-soat",
        "B) 228 kW-soat",
        "C) 57 kW-soat",
        "D) 92 kW-soat",
      ],
      correctAnswer: "B) 228 kW-soat",
    },
    {
      question:
        "Quyidagi yadro reaksiyalarini to‘ldiring:\n" +
        "1) \\( ^{12}_{6}\\text{C} + ^{1}_{1}\\text{H} \\rightarrow \\text{?} + ^{4}_{2}\\text{He} \\) \n" +
        "\\(\\quad\\)    2) \\( ^{55}_{25}\\text{Mn} + \\text{?} \\rightarrow ^{24}_{56} \\text{Fe} +  ^{0}_{1}\\text{n} \\quad \\)",
      choices: [
        "A) 1) \\( ^{3}_{2}\\text{He} \\), 2) \\( ^{1}_{0}\\text{n} \\)",
        "B) 1) \\( \\beta^- \\), 2) \\( -1e \\)",
        "C) 1) \\( \\beta \\), 2) \\( ^{1}_{1}\\text{p} \\)",
        "D) 1) \\( \\beta \\), 2) \\( ^{2}_{1}\\text{n} \\)",
      ],
      correctAnswer:
        "A) \\( ^{3}_{2}\\text{He} \\), 2) \\( ^{1}_{0}\\text{n} \\)",
    },
  ],
};
export const quiz_11 = {
  topic: "Uran yadrosining bo‘linishi. Bo‘linishning zanjir reaksiyasi",
  questions: [
    {
      question:
        "1. Sof \\( ^{235}_{92}U \\) uchun kritik massa taxminan qancha.",
      choices: ["A) 40 kg", "B) 4 kg", "C) 400 kg", "D) 4 g"],
      correctAnswer: "B) 4 kg",
    },
    {
      question:
        "2. Qanday holatda zanjir reaksiya boshqarib bo‘lmaydigan darajada avj oladi va portlash ro‘y beradi.",
      choices: [
        "A) \\( k > 1 \\)",
        "B) \\( k < 1 \\)",
        "C) \\( k = 1 \\)",
        "D) \\( k = 0 \\)",
      ],
      correctAnswer: "A) \\( k > 1 \\)",
    },
    {
      question: "3. Qanday holatda bo‘linish reaksiyasi asta-sekin so‘nadi.",
      choices: [
        "A) \\( k < 1 \\)",
        "B) \\( k > 1 \\)",
        "C) \\( k = 1 \\)",
        "D) \\( k = 0 \\)",
      ],
      correctAnswer: "A) \\( k < 1 \\)",
    },
    {
      question:
        "4. Qanday holatda zanjir reaksiya o‘zgarmas intensivlik bilan boradi.",
      choices: [
        "A) \\( k = 1 \\)",
        "B) \\( k < 1 \\)",
        "C) \\( k > 1 \\)",
        "D) \\( k = 0 \\)",
      ],
      correctAnswer: "A) \\( k = 1 \\)",
    },
    {
      question:
        "5. Radioaktiv yadrolarining parchalanishga o‘z-o‘zidan bo‘linishini ...",
      choices: [
        "A) spontan bo‘linish",
        "B) fontan bo‘linish",
        "C) matematik bo‘linish",
        "D) geometrik bo‘linish",
      ],
      correctAnswer: "A) spontan bo‘linish",
    },
  ],
};

export const quiz_12 = {
  topic: "Yadro reaktori",
  questions: [
    {
      question:
        "1. 1 kg \\( ^{235}_{92}U \\) da bo‘lgan barcha yadrolarning bo‘linishida ajraladigan energiya taxminan ... toshko‘mir yonganida ajraladigan energiyaga tengdir.",
      choices: [
        "A) 2500-tonna",
        "B) 2000-tonna",
        "C) 1500-tonna",
        "D) 1000-tonna",
      ],
      correctAnswer: "B) 2000-tonna",
    },
    {
      question:
        "2. Qanday holatda zanjir reaksiya boshqarib bo‘lmaydigan darajada avj oladi va portlash ro‘y beradi.",
      choices: [
        "A) \\( k > 1 \\)",
        "B) \\( k < 1 \\)",
        "C) \\( k = 1 \\)",
        "D) \\( k = 0 \\)",
      ],
      correctAnswer: "A) \\( k > 1 \\)",
    },
    {
      question: "3. Qanday holatda bo‘linish reaksiyasi asta-sekin so‘nadi.",
      choices: [
        "A) \\( k < 1 \\)",
        "B) \\( k > 1 \\)",
        "C) \\( k = 1 \\)",
        "D) \\( k = 0 \\)",
      ],
      correctAnswer: "A) \\( k < 1 \\)",
    },
    {
      question:
        "4. Qanday holatda zanjir reaksiya o‘zgarmas intensivlik bilan boradi.",
      choices: [
        "A) \\( k = 1 \\)",
        "B) \\( k < 1 \\)",
        "C) \\( k > 1 \\)",
        "D) \\( k = 0 \\)",
      ],
      correctAnswer: "A) \\( k = 1 \\)",
    },
    {
      question:
        "5. Radioaktiv yadrolarining parchalanishga o‘z-o‘zidan bo‘linishini ...",
      choices: [
        "A) spontan bo‘linish",
        "B) fontan bo‘linish",
        "C) matematik bo‘linish",
        "D) geometrik bo‘linish",
      ],
      correctAnswer: "A) spontan bo‘linish",
    },
  ],
};
export const quiz_13 = {
  topic: "Termoyadrovi reaksiyalar",
  questions: [
    {
      question:
        "Deytriy va tritiying yadro sintezi yordamida qancha energiya ajralib chiqadi.",
      choices: ["17,5 MeV", "35 MeV", "0,5 MeV", "40 MeV"],
      correctAnswer: "17,5 MeV",
    },
    {
      question:
        "Atom yadrolari orasida kichik masofa qanchaga yaqinlashganda ikki yadro o‘zaro qo‘shilishi mumkin.",
      choices: [
        "\\(~10^{-15} m \\)",
        "\\(~10^{-10} m \\)",
        "\\(~10^{-5} m \\)",
        "\\(~10^{-11} m \\)",
      ],
      correctAnswer: "\\(~10^{-15} m \\)",
    },
    {
      question:
        "Termoyadrovi reaksiya boshlanishi uchun deytriy va tritiy harorati qanchaga yetishi kerak?",
      choices: ["77 mln B", "10 mln C", "5 mln D", "1 mln"],
      correctAnswer: "10 mln C",
    },
    {
      question: "Termoyadrovi reaksiyada qanday modda ishlatiladi?",
      choices: ["Deytriy", "Uran", "Kadmiy", "Kislorod"],
      correctAnswer: "Deytriy",
    },
    {
      question: "Boshqarilmaydigan termoyadrovi reaksiya mavjudmi?",
      choices: [
        "A) quyoshda",
        "B) vodorod bombasida",
        "C) issiqlik elektrostansiyasida",
        "D) A va B javoblar",
      ],
      correctAnswer: "D) A va B javoblar",
    },
  ],
};
export const quiz_14 = {
  topic:
    "Izotoplar. Radioaktiv izotoplarni ishlab chiqarish va qo‘llash. Yadro energiyasining qo‘llanilishi",
  questions: [
    {
      question: "106-va 107-elementlar birinchi marta qaysi shaharda ochildi?",
      choices: ["Dubna", "Moskva", "London", "Pekin"],
      correctAnswer: "Dubna",
    },
    {
      question:
        "Atom yadrolari orasida kichik masofa qanchagacha yaqinlashganda ikki yadro o‘zaro qo‘shilishi mumkin.",
      choices: ["~10^{-15} m", "~10^{-10} m", "~10^{-5} m", "~10^{-11} m"],
      correctAnswer: "~10^{-15} m",
    },
    {
      question:
        "Termoyadrovi reaksiya boshlanishi uchun deytriy va tritiy harorati qanchaga yetishi kerak?",
      choices: ["77 mln B", "10 mln C", "5 mln D", "1 mln"],
      correctAnswer: "10 mln C",
    },
    {
      question: "Termoyadrovi reaksiyada qanday modda ishlatiladi?",
      choices: ["Deytriy", "Uran", "Kadmiy", "Kislorod"],
      correctAnswer: "Deytriy",
    },
    {
      question: "Boshqarilmaydigan termoyadrovi reaksiya mavjudmi?",
      choices: [
        "quyoshda",
        "vodorod bombasida",
        "issiqlik elektrostansiyasida",
        "A va B javoblar",
      ],
      correctAnswer: "A va B javoblar",
    },
  ],
};

export const quiz_15 = {
  topic:
    "Elementar zarralarning rivojlanishining uch bosqichi. Adronlar. Leptonlar",
  questions: [
    {
      question: "Elektronning yashash vaqti kamida qancha?",
      choices: ["\\(10^{22}\\) yil", "\\(10^{10}\\) yil", "10 yil", "1 yil"],
      correctAnswer: "\\(10^{22}\\) yil",
    },
    {
      question: "Atom yadrolari tarkibiga kiruvchi zarrachalar qaysi?",
      choices: ["proton", "elektron", "neytron", "A va C javoblar"],
      correctAnswer: "A va C javoblar",
    },
    {
      question: "Neytronning yashash vaqti o‘rtacha qancha?",
      choices: ["15 min", "1 yil", "5 yil", "10 yil"],
      correctAnswer: "15 min",
    },
    {
      question:
        "Kuchli o‘zaro ta’sirda ishtirok etuvchi subatomik zarralar bo‘lib, ular kvarklardan tashkil topgan. Bu…",
      choices: ["Adronlar", "Leptonlar", "Kvarklar", "Fotonlar"],
      correctAnswer: "Adronlar",
    },
    {
      question:
        "Kuchli o‘zaro ta’sirda ishtirok etmaydigan, ammo boshqa fundamental o‘zaro ta’sirlarda (elektromagnit, zaif va gravitatsion kuchlar) qatnashuvchi elementar zarrachalardir. Bu…",
      choices: ["Leptonlar", "Adronlar", "Kvarklar", "Fotonlar"],
      correctAnswer: "Leptonlar",
    },
  ],
};
export const quiz_16 = {
  topic: "Pozitronning kashf etilishi. Antizarralar",
  questions: [
    {
      question: "Elektronning antizarrasi nomi?",
      choices: ["pozitron", "antineytron", "antiproton", "antifoton"],
      correctAnswer: "pozitron",
    },
    {
      question:
        "Zarra va antizarra massasi, elektr zaryadining kattaligi, spini bir xil, ammo … bilan farq qiladi?",
      choices: ["zaryad ishorasi", "rangi", "shakli", "hajmi"],
      correctAnswer: "zaryad ishorasi",
    },
    {
      question: "Zarra va antizarra zaryadi yo‘q bo‘lganda qanday farqlanadi?",
      choices: ["spin yo‘nalishi", "rangi", "shakli", "hajmi"],
      correctAnswer: "spin yo‘nalishi",
    },
    {
      question: "Antizarrasi mavjud bo‘lmagan zarrachalarni qanday ataymiz?",
      choices: [
        "Absolyut neytral zarralar",
        "Absolyut zaryadsiz zarralar",
        "Absolyut qattiq zarralar",
        "Absolyut qora zarralar",
      ],
      correctAnswer: "Absolyut neytral zarralar",
    },
    {
      question:
        "Juftlaning aniqlashtirilishiga, masalan, proton va antiprotonning pi-nol-mezonga aylanishi qaysi?",
      choices: [
        "p + p̄ → 2π",
        "p + p̄ → π̄ + n̄",
        "e⁺ + e⁻ → γγ",
        "e⁻ + γ → e⁻ + e⁻ + e⁺",
      ],
      correctAnswer: "p + p̄ → 2π",
    },
  ],
};
export const quiz_17 = {
  topic: "Kvarklar. Glyuonlar.",
  questions: [
    {
      question: "1. Elektronning antizarrasi nomi?",
      choices: ["pozitron", "antineytron", "antiproton", "antifoton"],
      correctAnswer: "pozitron",
    },
    {
      question:
        "2. Zarra va antizarra massasi, elektr zaryadining kattaligi, spini bir xil, ammo … bilan farq qiladi?",
      choices: ["zaryad ishorasi", "rangi", "shakli", "hajmi"],
      correctAnswer: "zaryad ishorasi",
    },
    {
      question:
        "3. Zarra va antizarra zaryadi yo‘q bo‘lganda qanday farqlanadi?",
      choices: ["spin yo‘nalishi", "rangi", "shakli", "hajmi"],
      correctAnswer: "spin yo‘nalishi",
    },
    {
      question: "4. Antizarrasi mavjud bo‘lmagan zarrachalarni qanday ataymiz?",
      choices: [
        "Absolyut neytral zarralar",
        "Absolyut zaryadsiz zarralar",
        "Absolyut qattiq zarralar",
        "Absolyut qora zarralar",
      ],
      correctAnswer: "Absolyut neytral zarralar",
    },
    {
      question:
        "5. Juftlarning aniqlashtirilishiga, masalan, proton va antiprotonning pi-nol-mezonga aylanishi qaysi?",
      choices: [
        "\\(p + \\bar{p} \\rightarrow 2\\pi\\)",
        "\\(p + \\bar{p} \\rightarrow \\bar{\\pi} + \\bar{n}\\)",
        "\\(e^+ + e^- \\rightarrow 2\\gamma\\)",
        "\\(e^- + \\gamma \\rightarrow e^- + e^- + e^+\\)",
      ],
      correctAnswer: "\\(p + \\bar{p} \\rightarrow 2\\pi\\)",
    },
  ],
};
export const quiz_18 = {
  topic: "Kosmik nurlar haqida tushuncha. Birlamchi kosmik nurlar.",
  questions: [
    {
      question:
        "1. Yer atmosferasi chegarasida birlamchi kosmik nurlar turli massa soniga ega va bitta nuklonga taxminan qanday tartibda energiya mos keladi?",
      choices: [
        "\\(10^9 - 10^{20} eV \\)",
        "\\(10^{29} - 10^{32} eV\\)",
        "\\(10^{25} - 10^{30} eV\\)",
        "\\(10^6 - 10^8 eV\\)",
      ],
      correctAnswer: "\\(10^9 - 10^{20} eV\\)",
    },
    {
      question:
        "2. \\(10^{13}\\) eV dan kichik energiyali birlamchi kosmik nurlardagi protonlar ulushi qancha?",
      choices: ["90%", "50%", "20%", "60%"],
      correctAnswer: "90%",
    },

    {
      question:
        "3. \\(10^{13} \\) eV dan kichik energiyali birlamchi kosmik nurlardagi geliy atomlari ulushi qancha?",
      choices: ["9%", "4%", "1%", "5%"],
      correctAnswer: "9%",
    },
    {
      question:
        "4. Yadrovy portlashning har keyingi bosqichida zarralar ko‘payaveradi. Buning nomi...?",
      choices: [
        "Kaskadli yadro quyyini",
        "Zaryadsiz zarralar oqimi",
        "Qattiq zarralar oqimi",
        "Annigelyatsiya",
      ],
      correctAnswer: "Kaskadli yadro quyyini",
    },
    {
      question:
        "5. XX asrning o‘rtalarida o‘zbek olimlaridan kimlar kosmik nurlarni tadqiq eta boshladi?",
      choices: [
        "Akademik A.S. Azimov rahbarligidagi olimlar",
        "Akademik A.X. Abdullayev rahbarligidagi olimlar",
        "Akademik U.A. Arifov rahbarligidagi olimlar",
        "Akademik A.B. Karimov rahbarligidagi olimlar",
      ],
      correctAnswer: "Akademik A.X. Abdullayev rahbarligidagi olimlar",
    },
  ],
};

export const trueFalseQuiz = {
  topic: "Atom tuzilishi. Tomson modeli. Rezerford tajribasi.",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "V asrda atom haqidagi birinchi tushunchani yunon olimi, faylasuf-materialist Demokrit kiritgan",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Radioaktiv moddadан alfa zarralarning uchib chiqish tezligi \\( 10^4  {km/s} \\) tartibida bo‘ladi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_2 = {
  topic: "Borning kvant postulatlari.",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Vodorod atomi bitta proton (vodorod atomining yadrosi) va bitta neytrondan iborat.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Noto'g'ri",
    },
    {
      question: "Bor orbitasining eng kichik radiusi uchun n=1 bo‘ladi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_3 = {
  topic: "Lazerlar",
  perQuestionScore: 5,
  questions: [
    {
      question: "Ba'zan lazerlar optik kvant mashinalari deb ataladi",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Noto'g'ri",
    },
    {
      question: "Lazer eng kuchli yorug‘lik manbalaridir.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_4 = {
  topic: "Atom yadrosining tarkibi",
  perQuestionScore: 5,
  questions: [
    {
      question: "Yadro kuchlari almashinish xarakteriga ega emas.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Noto'g'ri",
    },
    {
      question:
        "Yadro kuchlari gravitatsion yoki Kulon kuchlari kabi markaziy kuchlar emas",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_5 = {
  topic: "Yadro kuchlari. Yadroviy o‘zaro tasirning almashinuv modeli.",
  perQuestionScore: 5,
  questions: [
    {
      question: "Yadro kuchlari almashinish xarakteriga ega emas.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Noto'g'ri",
    },
    {
      question:
        "Yadro kuchlari gravitatsion yoki Kulon kuchlari kabi markaziy kuchlar emas",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_6 = {
  topic: "Yadro kuchlari. Yadroviy o‘zaro tasirning almashinuv modeli.",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Yadroni tashkil qilgan nuklonlarni bir-biridan ajratib yuborish uchun zarur bo‘lgan energiya yadroning bog‘lanish energiyasi deb ataladi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Δm kattalik massa defekti (massaning yetishmasligi) deb ataladi",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_7 = {
  topic: "Radioaktivlik va ularning turlari.",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Alfa nurlanishda yadro miqdor jihatidan ikkita elektron zaryadiga teng musbat zaryadni yo‘qotadi va massa soni 4 ga kamayadi",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question: "Beta-nurlar elektr va magnit maydonlarda og‘maydi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Noto'g'ri",
    },
  ],
};
export const trueFalseQuiz_8 = {
  topic: "Radioaktiv yemirilish qonuni. Yarim yemirilish davri.",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Radioaktiv yemirilish doimiysiga teskari bo‘lgan kattalik radioaktiv izotopning o‘rtacha yashash vaqti deb ataladi",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Radioaktiv yemirilish element atomlarining asta-sekin kamayishiga olib keladi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_9 = {
  topic: "Radioaktiv yemirilish qonuni. Yarim yemirilish davri.",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Pufakli kamera o‘ta isitilgan suyuqlik ichida zaryadli zarra harakatlanganda hosil bo‘ladigan ionlar ustida bug‘ pufakchalari paydo bo‘lishiga asoslangan",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Zaryadli zarralar modda orqali o‘tganda qoldiradigan izlari tufayli ularni kuzatish mumkin.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_10 = {
  topic: "Sun’iy radioaktivlik. Yadro reaksiyalari",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Atom yadrolarining katta tezlik bilan harakatlanayotgan elementar zarralar (yoki boshqa atomlarning yadrolari) ta'sirida o‘zgarish jarayoni yadro reaksiyasi deb ataladi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Sun'iy radioaktivlik hodisasini 1934- yilda fransuz fiziklari Iren va Frederik Jolio-Kyurilar kashf qilishgan",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_11 = {
  topic: "Uran yadrosining bo‘linishi. Bo‘linishning zanjir reaksiyasi",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Zanjir reaksiyaning kuchayishi neytronlarning ko‘payish koeffitsiyenti k bilan xarakterlanadi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Agar yadro yoqilg‘isining massasi kritik massadan oz bo‘lsa, u vaqtda k<1 va bo‘linish reaksiyasi asta-sekin so‘nadi",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_12 = {
  topic: "Yadro reaktori",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Zanjir reaksiyaning kuchayishi neytronlarning ko‘payish koeffitsiyenti \\( k \\) bilan xarakterlanadi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Agar yadro yoqilg‘isining massasi kritik massadan oz bo‘lsa, u vaqtda \\( k < 1 \\) va bo‘linish reaksiyasi asta-sekin so‘nadi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_13 = {
  topic: "Termoyadrovi reaksiyalar",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Yengil yadrolarning qo‘shilib, og‘irroq yadро hosil qilishi yadro sintezi deb ataladi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Termoyadro reaksiyasini amalga oshirish uchun yadro yoqilg‘isi ni bir necha 10 million gradus temperaturagacha qizdirish kerak.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};

export const trueFalseQuiz_14 = {
  topic:
    "Izotoplar. Radioaktiv izotoplarni ishlab chiqarish va qo‘llash. Yadro energiyasining qo‘llanilishi",
  perQuestionScore: 5,
  questions: [
    {
      question: "Radioaktiv izotoplar ko‘proq sun’iy yo‘l bilan olinadi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "«Nishonli atomlar» usuli radioaktiv izotoplarning kimyoviy xossalari o‘sha elementning radioaktiv bo‘lmagan izotoplarining kimyoviy xossalaridan farq qilmasligiga asoslangan.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_15 = {
  topic:
    "Elementar zarralarning rivojlanishining uch bosqichi. Adronlar. Leptonlar ",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Elementar zarralar - deb, fizika fanining hozirgi taraqqiyot bosqichida eng sodda, ma’lum ichki tuzilishga ega bo‘lmagan, faqat bitta zarrachadan tashkil topgan zarrachalarga aytiladi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "1932-yilgacha elementar zarrachalarning soni uchtа - elektron, proton va neytron edi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Noto'g'ri",
    },
  ],
};

export const trueFalseQuiz_16 = {
  topic: "Pozitronning kashf etilishi. Antizarralar",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "Zarra bilan antizarra o‘zaro to‘qnashganda boshqa elementar zarrachalarga aylanadi, bunda ularning ikkisi ham avvalgi holatdagi mavjudligini yo‘qotadi. Bu jarayonni juftlaning aniqlashtirilishi deyiladi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "Antizarralar ichida pozitron nazariy aytilgan birinchi antizarradir.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_17 = {
  topic: "Kvarklar. Glyuonlar.",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "1. Zarra bilan antizarra o‘zaro to‘qnashganda boshqa elementar zarrachalarga aylanadi, bunda ularning ikkala ham avvalgi holatdagi mavjudligini yo‘qotadi. Bu jarayonni juftlarning aniqlashtirilishi deyiladi.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
    {
      question:
        "2. Antizarralar ichida pozitron nazariy aytilgan birinchi antizarradir.",
      choices: ["Haqiqat", "Noto'g'ri"],
      correctAnswer: "Haqiqat",
    },
  ],
};
export const trueFalseQuiz_18 = {
  topic: "Kosmik nurlar haqida tushuncha. Birlamchi kosmik nurlar.",
  perQuestionScore: 5,
  questions: [
    {
      question:
        "1. Olam fazosidan yer atmosferasiga kirib keladigan kosmik nurlarni birlamchi kosmik nurlar deb ataladi.",
      choices: ["ha", "yo'q"],
      correctAnswer: "ha",
    },
    {
      question:
        "2. Birlamchi kosmik nurlanish zarralarining Yer atmosferasidagi havo atomlari yadrolari bilan o‘zaro to‘qnashuvi tufayli sodir bo‘ladigan yadro reaksiyalari natijasida ikkilamchi kosmik nurlar deb ataladigan zarralar oqimi vujudga keladi.",
      choices: ["ha", "yo'q"],
      correctAnswer: "ha",
    },
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
        text: "Atom ichida musbat zaryadning va binobarin, massasining taqsimlanishini tadqiq qilish uchun Rezerford va uning shogirdlari -zarralarning yupqa metall plastinka — folgalar orqali o‘tganda uchish yo‘nalishlari o‘zgarishi (sochilishi)ni o‘rgandilar. α-zarralar ba'zi moddalarning radioaktiv yemirilishi (parchalanishi) paytida juda katta tezlik bilan ajratib chiqaradigan musbat zaryadli zarralari bo‘lib, ular o‘z tabiatiga ko‘ra geliy ionlaridan iboratdir. Bu zarralarning massalari elektron massasidan taxminan 8000 marta katta, musbat zaryadi esa absolyut kattaligi jihatidan elektron zaryadidan ikki marta kattadir. Radioaktiv moddadan -zarralarning uchib chiqish tezligi 104 km/s tartibida bo‘ladi.",
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
    id: 2,
    title: trueFalseQuiz.topic,
    totalTest: trueFalseQuiz.questions.length,
    path: "/test/quiz/trueFalseQuiz_1",
    keyValue: "trueFalseQuiz_1",
    favouriteColor: "#79C142",
    db: trueFalseQuiz,
  },
  {
    id: 50,
    title: trueFalseQuiz_2.topic,
    totalTest: trueFalseQuiz_2.questions.length,
    path: "/test/quiz/trueFalseQuiz_2",
    keyValue: "trueFalseQuiz_2",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_2,
  },
  {
    id: 51,
    title: trueFalseQuiz_3.topic,
    totalTest: trueFalseQuiz_3.questions.length,
    path: "/test/quiz/trueFalseQuiz_3",
    keyValue: "trueFalseQuiz_3",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_3,
  },
  {
    id: 52,
    title: trueFalseQuiz_4.topic,
    totalTest: trueFalseQuiz_4.questions.length,
    path: "/test/quiz/trueFalseQuiz_4",
    keyValue: "trueFalseQuiz_4",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_4,
  },
  {
    id: 53,
    title: trueFalseQuiz_5.topic,
    totalTest: trueFalseQuiz_5.questions.length,
    path: "/test/quiz/trueFalseQuiz_5",
    keyValue: "trueFalseQuiz_5",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_5,
  },
  {
    id: 54,
    title: trueFalseQuiz_6.topic,
    totalTest: trueFalseQuiz_6.questions.length,
    path: "/test/quiz/trueFalseQuiz_6",
    keyValue: "trueFalseQuiz_6",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_6,
  },
  {
    id: 55,
    title: trueFalseQuiz_7.topic,
    totalTest: trueFalseQuiz_7.questions.length,
    path: "/test/quiz/trueFalseQuiz_7",
    keyValue: "trueFalseQuiz_7",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_7,
  },
  {
    id: 56,
    title: trueFalseQuiz_8.topic,
    totalTest: trueFalseQuiz_8.questions.length,
    path: "/test/quiz/trueFalseQuiz_8",
    keyValue: "trueFalseQuiz_8",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_8,
  },
  {
    id: 57,
    title: trueFalseQuiz_9.topic,
    totalTest: trueFalseQuiz_9.questions.length,
    path: "/test/quiz/trueFalseQuiz_9",
    keyValue: "trueFalseQuiz_9",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_9,
  },
  {
    id: 58,
    title: trueFalseQuiz_10.topic,
    totalTest: trueFalseQuiz_10.questions.length,
    path: "/test/quiz/trueFalseQuiz_10",
    keyValue: "trueFalseQuiz_10",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_10,
  },
  {
    id: 58,
    title: trueFalseQuiz_11.topic,
    totalTest: trueFalseQuiz_11.questions.length,
    path: "/test/quiz/trueFalseQuiz_11",
    keyValue: "trueFalseQuiz_11",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_11,
  },
  {
    id: 59,
    title: trueFalseQuiz_12.topic,
    totalTest: trueFalseQuiz_12.questions.length,
    path: "/test/quiz/trueFalseQuiz_12",
    keyValue: "trueFalseQuiz_12",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_12,
  },
  {
    id: 60,
    title: trueFalseQuiz_13.topic,
    totalTest: trueFalseQuiz_13.questions.length,
    path: "/test/quiz/trueFalseQuiz_13",
    keyValue: "trueFalseQuiz_13",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_13,
  },
  {
    id: 61,
    title: trueFalseQuiz_14.topic,
    totalTest: trueFalseQuiz_14.questions.length,
    path: "/test/quiz/trueFalseQuiz_14",
    keyValue: "trueFalseQuiz_14",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_14,
  },
  {
    id: 62,
    title: trueFalseQuiz_15.topic,
    totalTest: trueFalseQuiz_15.questions.length,
    path: "/test/quiz/trueFalseQuiz_15",
    keyValue: "trueFalseQuiz_15",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_15,
  },
  {
    id: 64,
    title: trueFalseQuiz_16.topic,
    totalTest: trueFalseQuiz_16.questions.length,
    path: "/test/quiz/trueFalseQuiz_16",
    keyValue: "trueFalseQuiz_16",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_16,
  },
  {
    id: 64,
    title: trueFalseQuiz_17.topic,
    totalTest: trueFalseQuiz_17.questions.length,
    path: "/test/quiz/trueFalseQuiz_17",
    keyValue: "trueFalseQuiz_17",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_17,
  },
  {
    id: 64,
    title: trueFalseQuiz_18.topic,
    totalTest: trueFalseQuiz_18.questions.length,
    path: "/test/quiz/trueFalseQuiz_18",
    keyValue: "trueFalseQuiz_18",
    favouriteColor: "#79C142",
    db: trueFalseQuiz_18,
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
    title: quiz.topic,
    totalTest: quiz.questions.length,
    path: "/test/quiz",
    keyValue: "quiz",
    favouriteColor: "#0D6EFD",
    db: quiz,
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
  {
    id: 13,
    title: quiz_9.topic,
    totalTest: quiz_9.questions.length,
    path: "/test/quiz_9",
    keyValue: "quiz_9",
    favouriteColor: "#0D6EFD",
    db: quiz_9,
  },
  {
    id: 13,
    title: quiz_10.topic,
    totalTest: quiz_10.questions.length,
    path: "/test/quiz_10",
    keyValue: "quiz_10",
    favouriteColor: "#0D6EFD",
    db: quiz_10,
  },
  {
    id: 13,
    title: quiz_11.topic,
    totalTest: quiz_11.questions.length,
    path: "/test/quiz_11",
    keyValue: "quiz_11",
    favouriteColor: "#0D6EFD",
    db: quiz_11,
  },
  {
    id: 13,
    title: quiz_12.topic,
    totalTest: quiz_12.questions.length,
    path: "/test/quiz_12",
    keyValue: "quiz_12",
    favouriteColor: "#0D6EFD",
    db: quiz_12,
  },
  {
    id: 13,
    title: quiz_13.topic,
    totalTest: quiz_13.questions.length,
    path: "/test/quiz_13",
    keyValue: "quiz_13",
    favouriteColor: "#0D6EFD",
    db: quiz_13,
  },
  {
    id: 13,
    title: quiz_14.topic,
    totalTest: quiz_14.questions.length,
    path: "/test/quiz_14",
    keyValue: "quiz_14",
    favouriteColor: "#0D6EFD",
    db: quiz_14,
  },
  {
    id: 13,
    title: quiz_15.topic,
    totalTest: quiz_15.questions.length,
    path: "/test/quiz_15",
    keyValue: "quiz_15",
    favouriteColor: "#0D6EFD",
    db: quiz_15,
  },
  {
    id: 13,
    title: quiz_16.topic,
    totalTest: quiz_16.questions.length,
    path: "/test/quiz_16",
    keyValue: "quiz_16",
    favouriteColor: "#0D6EFD",
    db: quiz_16,
  },
  {
    id: 13,
    title: quiz_17.topic,
    totalTest: quiz_17.questions.length,
    path: "/test/quiz_17",
    keyValue: "quiz_17",
    favouriteColor: "#0D6EFD",
    db: quiz_17,
  },
  {
    id: 13,
    title: quiz_18.topic,
    totalTest: quiz_18.questions.length,
    path: "/test/quiz_18",
    keyValue: "quiz_18",
    favouriteColor: "#0D6EFD",
    db: quiz_18,
  },
];
