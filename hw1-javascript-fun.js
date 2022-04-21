// Задание 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;


const checkAge = function(age){
   
  if (age < age_2) {
      console.log(`"You don\'t have access cause your age is "${age}" It\'s less then "` + age_2);
    } else if (age >= age_2 && age < age_3) { 
      console.log ('Welcome !'); 
    } else if (age > age_3) { 
      console.log ('"Keep calm and look Culture channel!"'); 
    } else { 
      console.log('"Technical work"'); 
    }
}


checkAge(17);
checkAge(18);
checkAge(612);


//Задание 2*: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number4***:
const checkAge2 = function(age){
  if (typeof age =='number'){
//  if (+age){ так тоже можно
    
    if (age < age_2) {
        console.log(`"You don\'t have access cause your age is "${age}" It\'s less then "` + age_2);
      } else if (age >= age_2 && age < age_3) { 
        console.log ('Welcome !'); 
      } else if (age > age_3) { 
        console.log ('"Keep calm and look Culture channel!"'); 
      } else { 
        console.log('"Technical work"'); 
      }
   }
   else {
    console.log('"Not number"'); 
   }
  }
  
  checkAge2('fddf');
  checkAge2(18);
  checkAge2(612);


// Задание 3*: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number4***:
// Комментарий к решению: функция из задания 2 выполняет требования задания 3

const checkAge3 = function(age){
 
  age = parseInt (age);


  if (!isNaN(age)){
    
    if (age < age_2) {
        console.log(`"You don\'t have access cause your age is "${age}" It\'s less then "` + age_2);
      } else if (age >= age_2 && age < age_3) { 
        console.log ('Welcome !'+ age); 
      } else if (age > age_3) { 
        console.log ('"Keep calm and look Culture channel!"'); 
      } else { 
        console.log('"Technical work"'); 
      }
   }
   else {
    console.log('"It is not valid  "'); 
   }
   console.log(age); 
  }
  
  checkAge3(17);
  checkAge3('18');
  checkAge3('225fg');



