//test 1
const me = {
  firstName: "Abdulaziz",
  lastName: "Toshpulatov",
  age: 23,
  languages: ["js", "python", "c++", "nodejs"],
  friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
};

console.log(
  `firstName: ${me.firstName};
  lastName: ${me.lastName};
  age: ${me.age};
  languages: ${me.languages};
  friends: ${me.friends};`
);

//test 2
function createSquares(n) {
  const result = {};
  for (let i = 1; i <= n; i++) {
    result[i] = i * i;
  }
  return result;
}

console.log(createSquares(5));

//test 3
const exampleObject = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const keys = Object.keys(exampleObject);
const values = Object.values(exampleObject);

const sumOfKeys = keys.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumOfKeys)

const sumOfValues = values.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumOfValues);

//test 4
function createObjectFromArray(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = arr[i].length;
  }
  return result;
}

const arr = ["Abdulaziz", "Safarmurod", "Orol", "Jahongir"];
const obj = createObjectFromArray(arr);
console.log(obj);

//test 5
function calculateTotalQuantity(obj) {
  const values = Object.values(obj);
  const total = values.reduce((accumulator, currentValue) => accumulator + currentValue);
  return total;
}

const objs = {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000};
const result = calculateTotalQuantity(objs);
console.log(result);

//test 6
function defineObject(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] !== "string") {
      return false;
    }
  }
  return true;
}

const myObj = { abc: "1", "123": "2", d: "5" };
console.log(defineObject(myObj));

const myObj2 = { abc: 1, "123": "2", d: "5" };
console.log(defineObject(myObj2));

//test 7
function minMaxWord(str) {
  const words = str.split(' ');
  let minWord = words[0];
  let maxWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < minWord.length) {
      minWord = words[i];
    }
    if (words[i].length > maxWord.length) {
      maxWord = words[i];
    }
  }
  return {minWord: minWord, maxWord: maxWord};
}

const results = minMaxWord("Men Abdulaziz Programmerning guruhlarida oqiyman.");
console.log(results);

//test 9
function getNameMaxAge(arr) {
  let maxAge = 0;
  let name = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > maxAge) {
      maxAge = arr[i].age;
      name = arr[i].name;
    }
  }
  return name;
}

const people = [
  { name: "Abdulaziz", age: 23 },
  { name: "Erkin", age: 20 },
  { name: "Temur", age: 21 },
];
const resul = getNameMaxAge(people);
console.log(resul);

//test 11
function createObjectFromNumber(num) {
  const str = num.toString();
  const result = {};
  let sliceIndex = -3;
  const suffixes = ['birlar', 'minglar', 'millionlar', 'milliardlar', 'trilionlar'];
  for (let i = suffixes.length - 1; i >= 0; i--) {
    if (str.length > Math.abs(sliceIndex)) {
      const slicedStr = str.slice(sliceIndex);
      const value = parseInt(slicedStr);
      result[suffixes[i]] = value;
    }
    sliceIndex -= 3;
  }
  return result;
}

const num = 8945472985629;
const objes = createObjectFromNumber(num);
console.log(objes);

//test 14
function createNewObject(obj1, obj2) {
  const result = {};
  for (const key in obj1) {
    if (obj2[key] && obj1[key] === obj2[key]) {
      continue;
    }
    result[key] = obj1[key];
  }
  for (const key in obj2) {
    if (obj1[key] && obj1[key] === obj2[key]) {
      continue;
    }
    result[key] = obj2[key];
  }
  return result;
}

const obj1 = { a: 3, b: 10, c: 5, d: 7 };
const obj2 = { a: 10, d: 4, e: 6, f: 15 };
const obJ = createNewObject(obj1, obj2);
console.log(obJ);

//test 15
function calculateTotal(products) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const discountedPrice = product.price - (product.price * product.discount) / 100;
    const totalProductPrice = discountedPrice * product.quantity;
    totalPrice += totalProductPrice;
  }
  return totalPrice;
}

const products = [
  { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
  { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
  { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
  { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
  { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
];
const resulT = calculateTotal(products);
console.log(resulT);

//test 17
const objS = {
  "it": 20,
  "mushuk": 10,
  "sigir": 200,
  "tovuq": 2
};

const arR = [];
for (const key in objS) {
  arR.push(key, objS[key]);
}
console.log(arR);

//test 18
const grades = [
  { name: "Fizika", grade: 4, kredit: 6 },
  { name: "Matematika", grade: 5, kredit: 6 },
  { name: "Tarix", grade: 4, kredit: 4 },
  { name: "Dasturlash", grade: 5, kredit: 8 },
  { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
];

function calculateGPA(grades) {
  let totalGradePoints = 0;
  let totalCredits = 0;
  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i].grade;
    const credits = grades[i].kredit;
    totalGradePoints += grade * credits;
    totalCredits += credits;
  }
  const gpa = totalGradePoints / totalCredits;
  return gpa;
}

const gpa = calculateGPA(grades);
console.log(gpa);

//test 20
const obJS = { a: 2, b: 3, c: 4, d: 6 };
const n = 3;

const res = {};
for (const key in obJS) {
  res[key] = obJS[key] * n;
}
console.log(res);

//test 23
const students = [
  { name: "Ali", percent: 85 },
  { name: "Vali", percent: 70 },
  { name: "Hasan", percent: 92 },
  { name: "Husan", percent: 60 },
  { name: "Olim", percent: 78 },
  { name: "Sarvar", percent: 87 },
  { name: "Odil", percent: 95 },
  { name: "Nodir", percent: 45 },
];

const gradedStudents = students.map((student) => {
  let grade = 2;
  if (student.percent >= 90) {
    grade = 5;
  } else if (student.percent >= 80) {
    grade = 4;
  } else if (student.percent >= 70) {
    grade = 3;
  }
  return { ...student, grade };
});

console.log(gradedStudents);

//test 25
const pupils = [
  {
    name: "Elbek",
    percent: 95,
  },
  {
    name: "Zafar",
    percent: 78,
  },
  {
    name: "Aziz",
    percent: 83,
  },
];

let passedCount = 0;
let failedCount = 0;

for (let i = 0; i < pupils.length; i++) {
  if (pupils[i].percent >= 70) {
    passedCount++;
  } else {
    failedCount++;
  }
}

console.log(passedCount);
console.log(failedCount);