// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let x = 2;
let result = 1;

for ( let i = 1; i <= 10; i++){
  result *= x;
  console.log (result)
}
console.log (result)



//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2


function  exponent(x, b) {
  let result = x;
  for (let i = 1; i <= b; i++) {
    result *= x;
   
  }
  return result;
}

exponent(2, 10);


//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let smile = '';

for (let i = 1; i <= 5; i++){
  smile += ';)';
  console.log (smile)
}

//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), 
//а также количество строк для вывода
function  smiling(b) {
  let smile = '';

  for (let i = 1; i <= b; i++){
    smile += ';)';
    console.log (smile)
  }
  
  return smile;
}

smiling(10);


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'


function getWordStructure(w) {
  let vowelsCount = (w.match(/[aeiouy]/gi)).length;
  let consonants = (w.match(/[qwrtpsdfghjklzxcvbnm]/gi)).length;;
  return console.log('vowels = ' + vowelsCount +' & ' + 'consonants = ' + consonants );
}


getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-list');



//   4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

function checkPolindromWord(pw) {
  let pwturn = '';

  var string = pw.toString();

  for (var i = string.length-1; i >= 0; i--) {
    pwturn +=string.charAt(i);

  }
  return (pw.toLowerCase() === pwturn.toLowerCase());
}
checkPolindromWord('abba');