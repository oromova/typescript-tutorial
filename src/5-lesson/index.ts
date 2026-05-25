// TYPE va INTERFASE - uzun kodlarni soddalashtirishda qo'llaniladi. 

type Lang = "uzbek" | "english" | "rus"   // boshqa faylda ishlatish uchun export type Lang yozishimiz ham mumkin.  
type DataType = {id?:number, value: Lang}[]

// typega qanday qilib funksiya biriktirsak bo'ladi?
type Func = ( title?: string, age?: number) => void // void bu hech qanday ma'lumotga return qilishi kerak bo'lmagan funksiya. Agar string yoki numberga return qilishi kerak bo'lsa o'sha ma'lumot turini yozishimiz kerak bo'ladi. 1-ma'lumotga ? optional qo'ydikmi, 2-siga ham ? optional qo'yishimiz kerak.

// INTERFACE
interface Prop {
  id?: number,
  value: Lang
}

// interface faqat {} obyekt ma'lumot qabul qiladi va sintaksis jihatdan farq qiladi. 
// interfaceni typedan farqi interfaceda 2ta bir xil nom berib ishlata olamiz.

interface Objj {
  name: string
}

interface Objj {
  name: number
}

let language: Lang = "rus" // yuqorida bitta variablega oldik va endi xohlagan joyda Lang deb shu uzun variabllerni yozib o'tirmasdan ishlatishimiz mumkin. 

const data: DataType = [
  { value: "uzbek" },
  { id: 2, value: "english" },
  { id: 3, value: "rus" },
];

data.map((lang) => {
  language = lang.value; 
});

interface Base1 {
  id:number;
  key:string;
}

interface ListBase1 extends Base {
  found: number;
  title: string;
}

// interfaceda extends ishlatamiz, typeda esa & ishlatamiz.

type Base = {
  id: number;
  key: string;
};

type ListBase = Base & {
  found: number;
  title: string;
}

type TupleBase = Base & {
  age: number;
  title: string;
};

const data1: Base = {
  id: 1,
  key: "web",
};

const list: ListBase = {
  id: 1,
  key: "web",
  found: 1234,
  title: "webbrain",
};

const tuple: TupleBase = {
  id: 1,
  key: "web",
  age: 1234,
  title: "Webbrain",
}



