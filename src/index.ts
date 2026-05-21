
let str = "Webbrain Academy"

console.log(str);

// Union - bu bitta variablega bir nechta type berishga aytiladi.

let num:number | string = "11234" // ham number ham string qabul qila oladi
console.log(Number(num).tofixed()); // lekin muammo bu yerda chunki .toFixed metodi faqat string type uchun ishlaydi.


let language: "uzbek" | "english" | "rus" = "rus";

const data:{ id:number, value:"uzbek" | "english" | "rus"}[] = [    // valuega faqatgina shu qiymatlarni biriktira olamiz degani
  { id: 1, value: "uzbek" },
  { id: 2, value: "english" },
  { id: 3, value: "rus" },
];

data.map((lang) => {
  language = lang.value;        // loop qilganimizda ham faqat shu valuelarni ko'rsatib loop qiladi.
});

// ba'zi hollarda id kelmasligi mumkin shunda typescript xato beradi bu xatoni yechish uchun ? yani optionaldan foydalanamiz.

const data2:{ id?:number, value:"uzbek" | "english" | "rus"}[] = [    // valuega faqatgina shu qiymatlarni biriktira olamiz degani
  { value: "uzbek" },
  { id: 2, value: "english" },
  { id: 3, value: "rus" },
];

//idni oldiga ? qo'yganimizda xato yo'qoldi. optional-ixtiyoriy bor bo'lishi ham mumkin yo'q bo'lishi ham mumkin.

// INTERVIEW QUESTIONS
// - What is the union in TS? - variablega 1dan ortiq data typelarni bera olish (|)
// - What is the optional? - bu ma'lumot bo'lishi ham mumkin bo'masligi ham mumkin bo'lganda ishlatamiz (?)
// - When do we use any type? - 