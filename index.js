let numbers = [];
let numbers1 = [];
let numbers2 = [];
let numbers3 = 0;
let numbers4 = 1;
let numbers5 = 0;
const numbers_5 = 500;
let numbers6 = 0;
let numbers7 = [];
let numbers8 = [];
let numbers9 = 0;
let numbers10 = [];
let numbers11 = [];

for (let i = 10; i <= 20; i++) {
  numbers.push(i);
}
console.log(numbers);

for (let i = 10; i <= 20; i++) {
  numbers1.push(i * i);
}
console.log(numbers1);

for (let i = 1; i <= 10; i++) {
  numbers2.push(i * 7);
}
console.log(numbers2);

for (let i = 1; i <= 15; i++) {
  numbers3 += i;
}
console.log(numbers3);

for (let i = 15; i <= 35; i++) {
  numbers4 *= i;
}
console.log(numbers4);

for (let i = 1; i <= numbers_5; i++) {
  numbers5 += i;
}
const sum = numbers5 / numbers_5;
console.log(sum);

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    numbers6 += i;
  }
}
console.log(numbers6);

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    numbers7.push(i);
  }
}
console.log(numbers7);

function functionNumber8(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      numbers8.push(i);
    }
  }
  console.log(number + ": " + numbers8.join(", "));
}
functionNumber8(30);

function functionNumber9(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
      numbers9++;
    }
  }
  return numbers9;
}
const number_9 = 30;
const number = functionNumber9(number_9);
console.log(number_9 + ": " + number);

function functionNumber10(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
      numbers10 += i;
    }
  }
  return numbers10;
}
const number_10 = 30;
const functionSum = functionNumber10(number_10);
console.log(number_10 + ": " + number);

for (let i = 1; i <= 10; i++) {
  numbers11.push(i * 10);
}
console.log(numbers11);
