// //функция ничего не принимает на вход

// function yolochka1(){
//   let mass = "hello"
//   console.log(mass)
// }

// yolochka1()

// //функция ничего не принимает на вход

// function yolochka2(item1, item2){
//   let mass = "hello"
//   console.log(mass,item1, item2)
// }

// yolochka2(11,22)


// //cтрелочная функция 

// function f1(){
//   console.log("hello1111")
// }

// let f11 =() => {console.log("hello0000")}
// f1()
// f11()

// let t1 = 10
// let t2 = 20

// let f22 = (t11,t22) =>{console.log("sum =" , t11 +t22)}

// f22 (t1,t2)

// let t3 = 30;
// let t4 = 40;

// let f33 = (t1 > t2) ?
// (tt1,tt2) =>console.log("order ", tt1 + tt2)://true
// (tt1,tt2) =>console.log("order ", tt1 - tt2);//false

// f33(t3, t4)


// напрягитесь прототипы

function yolochka33(){};

yolochka33.prototype.fast = function(){
  console.log('fast !!')
}
yolochka33.prototype.green = function(sun,co2){
  console.log('green!!', sun, " + ", co2)
}

yolochka33.prototype.shishki = function(){
  console.log('shishki!!')
}

let forest = new yolochka33()

forest.fast()
forest.green(4500, 50)
forest.shishki()

