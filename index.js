// 1-masala satrni kirish sifatida qabul qiladigan va shu satrning teskari funksiyasini qabul qiladigan funksiya yozing
console.log("1-masala");

let text = "hello";

function reverseText(text) {
  return text.split("").reverse().join("");
}

console.log(reverseText(text)); // olleh

// 2-masala Satrni kiritish sifatida qabul qiluvchi va qatordagi unlilar sonini (a,e,i,o,u) qaytaruvchi funksiya yozing
// Katta harflarga etibor bermang va katta va kichik unlilarni ko'rib chiqing
console.log("2-masala");

function vowelCharacter(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  let word1 = word.toLowerCase().split("");

  for (const i of word1) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  return count;
}

const word = "HELLO world";
console.log(vowelCharacter(word));

// 3-masala berilgan satr polindrom yoki yo'qligini tekshiradigan funksiya yozing

function polidromMi(string) {
  string = string.toLowerCase();

  let reversedString = string.split("").reverse().join("").toLowerCase();

  if (string == reversedString) {
    return "Bu so'z polidrom";
  } else {
    return "Bu so'z polidrom emas";
  }
}

let string = "Radar";
console.log(polidromMi(string));

// 4-masala Gapni kiritish sifatida qabul qiladigan va eng uzun so'zini qaytaradigan funksiya yozing
// agar maksimal bir xil uzunlikdagi so'z bo'lsa birinchisi qaytsin, tinish belgilargia etibor bermang
console.log("4-masala");

const sentence = "Hello Victoria , Salom Viktoriya";

function longestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(longestWord(sentence));

// 5-masala gapni kiritish sifatida qabul qiladigan va har bir sozning birinchi harfi bosh harfi
// bilan yangi gapni qaytaradigan funksiya yozing
console.log("5-masala");

let sentence1 = "Bu gap oddiy namuna uchun";
let newSentence = "";

function firstUpperCase(sentence1) {
  sentence1 = sentence1.split(" ");
  for (const i of sentence1) {
    const firstUpperWord = i.charAt(0).toUpperCase() + i.slice(1);
    newSentence = newSentence + firstUpperWord + " ";
  }
  return newSentence.trim();
}

console.log(firstUpperCase(sentence1));

// 6-masala Takrorlangan belgilar sonidan foydalanib asosiy satr siqishni bajaradigan funksiya yozing
// aabcccccaaa => a2b1c5a3
console.log("6-masala");

let string1 = "aabbccccccaaaa";
let count = 1;
let natija = "";

function makeShorter(string1) {
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] == string1[i + 1]) {
      count++;
    } else {
      natija += string1[i] + count;
      count = 1;
    }
  }

  return natija;
}

console.log(makeShorter(string1));
