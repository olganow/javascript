// Задание 4*: Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;



const checkAge4 = function(age){
 
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
  

let agePrompt = prompt('Could you please fill in your age');
 
checkAge4(agePrompt);

