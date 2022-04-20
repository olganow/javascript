// Задание 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.

function age(age_1, age_2, age_3) {
   
     if (age_1 < age_2) {
         return (`"You don\'t have access cause your age is "${age_1}" It\'s less then"`);
       } else if (age_1 >= age_2 && age_1 < age_3) { 
         return ('Welcome !'); 
      } else if (age_1 > age_3) { 
         return ('"Keep calm and look Culture channel!"'); 
       } else { 
         return('"Technical work"'); 
       }

 }
 const checkAge =  age(17, 18, 612);


//Задание 2*: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number4***:
 function age2(age_1, age_2, age_3) {
   if (/^(0|[1-9]\d*)$/.test(age_1) && /^(0|[1-9]\d*)$/.test(age_2)  && /^(0|[1-9]\d*)$/.test(age_3) ) {
         if (age_1 < age_2) {
             return (`"You don\'t have access cause your age is "${age_1}" It\'s less then"`);
           } else if (age_1 >= age_2 && age_1 < age_3) { 
             return ('Welcome !'); 
         } else if (age_1 > age_3) { 
             return ('"Keep calm and look Culture channel!"'); 
           } else { 
             return('"Technical work"'); 
           }

       }
       else { 
         return('"ERROR"'); 
       }

}
const checkAge2 =  age2(12,  "fd", 612);

// Задание 3*: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number4***:
// Комментарий к решению: функция из задания 2 выполняет требования задания 3
function age3(age_1, age_2, age_3) {
     if (/^(0|[1-9]\d*)$/.test(age_1) && /^(0|[1-9]\d*)$/.test(age_2)  && /^(0|[1-9]\d*)$/.test(age_3) ) {
           if (age_1 < age_2) {
               return (`"You don\'t have access cause your age is "${age_1}" It\'s less then"`);
            } else if (age_1 >= age_2 && age_1 < age_3) { 
               return ('Welcome !'); 
          } else if (age_1 > age_3) { 
               return ('"Keep calm and look Culture channel!"'); 
             } else { 
               return('"Technical work"'); 
             }
  
         }
         else { 
           return('"ERROR"'); 
      
          }

}
const checkAge3 = age3("12", 23, 612);


// Задание 4*: Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке


function age4(age_1, age_2, age_3) {
  if (/^(0|[1-9]\d*)$/.test(age_1) && /^(0|[1-9]\d*)$/.test(age_2)  && /^(0|[1-9]\d*)$/.test(age_3) ) {
        if (age_1 < age_2) {
            return (`"You don\'t have access cause your age is "${age_1}" It\'s less then"`);
         } else if (age_1 >= age_2 && age_1 < age_3) { 
            return ('Welcome !'); 
       } else if (age_1 > age_3) { 
            return ('"Keep calm and look Culture channel!"'); 
          } else { 
            return('"Technical work"'); 
          }

      }
      else { 
        return('"ERROR"'); 
   
       }

}

let age_1 = prompt('Could you please fill in your age');
 
 console.log(age4(age_1, 23, 612))