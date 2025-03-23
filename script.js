let myName = 'Alyona';
let myAge = 40;
let myFavouriteAnimal = 'cat';
let myCity = 'Voronezh';
let isStudent = false;
let favouriteColor;
favouriteColor = 'red';
let numberOfPets = null;

//Проверяю тип данных
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof myFavouriteAnimal);
console.log(typeof myCity);
console.log(typeof isStudent);
console.log(typeof favouriteColor);
console.log(typeof numberOfPets);

//Преобразование числового типа в строковый
let ageAsString1 = String(myAge);
console.log(typeof ageAsString1);

let ageAsString2 = myAge.toString();
console.log(typeof ageAsString2);

let ageAsString3 = `${myAge}`
console.log(typeof ageAsString3);

let ageAsString4 = myAge + '';
console.log(typeof ageAsString4);

//Преобразование числового типа в булевый
let isAgeValid = Boolean(myAge);
console.log(typeof isAgeValid);

//Преобразование булевого типа в числовой
let isStudentAsNumber = Number(isStudent);
console.log(isStudentAsNumber);
console.log(typeof isStudentAsNumber);

//1) Напишите функцию, которая принимает два числа и возвращает их сумму.

/*const sum = function(a,b){
    return a+b;
};
console.log(sum(10,2));*/

/*function sum (a,b){
    return a+b;
};
console.log(sum(10,3));*/
 const sum = (a, b)=>{
    return a+b;
 }
 console.log(sum(10,11));

 //2) Напишите функцию, которая принимает число и проверяет, является ли оно четным.
 /*const isEven = function(number){
    return number % 2 === 0;
 }
 console.log(isEven(21));*/

 /*function isEven(number){
    return number % 2 === 0;
 }
 console.log(isEven(24));*/
 const isEven = number => {
    return number % 2 === 0;
 }
 console.log(isEven(21));
 //3) Напишите функцию, которая принимает температуру в градусах Цельсия и возвращает ее эквивалент в градусах Фаренгейта (формула: F = C * 9/5 + 32).
 /*const getInForingate = function(Celsium){
    return Celsium*9/5 + 32;
 }
 console.log(getInForingate(80));*/

 /*function getInForingate(Celsium){
    return Celsium*9/5 + 32;
 }
 console.log(getInForingate(100));*/

 const getInForingate = Celsium =>{
    return Celsium*9/5 + 32;
 }
 console.log(getInForingate(60));

 //4) Напишите функцию, которая принимает строку и возвращает ее в верхнем регистре.
 /*const upperString = function(string){
    return string.toUpperCase();
 }*/
function upperString(string){
    return string.toUpperCase();
}
 console.log(upperString("Hello World"))

 //5) Напишите функцию calculate, которая принимает два числа и коллбек-функцию. Функция calculate должна вызывать коллбек-функцию, передавая ей в качестве аргументов эти два числа, а затем возвращать результат выполнения коллбек-функции.
 const calculate = function(a,b, callback){
    return callback(a,b);
 }
 const add = function(a,b){
    return a+b;
 }
 console.log(calculate(6,3,add));
 //6) Напишите рекурсивную функцию countDown, которая принимает число n и выводит все числа от n до 1 в консоль.
 const countDown = function(n){
    if (n <= 0){
        return
    }
    console.log(n);
    countDown(n-1);
 }
 countDown(6);
 //1) Напишите цикл for, который выводит числа от 1 до 5 в консоль.
 /*for (let i = 1; i<=5; i++){
    console.log(i)
 }*/
let i = 5;
while (i>=1){
    console.log(i);
    i--;
}
//2) Напишите цикл for, который выводит каждую букву строки "Hello" в консоль.
/*let string = "Hello";
for (let i = 0; i < string.length; i++){
    console.log(string.charAt(i));
}*/
let string = "Hello";
let j = 0;
while(j<string.length){
    console.log(string.charAt(j));
    j++;
}
//Задачи на условные ветвления
const checkNumber = function(number){
    if (number < 0){
        console.log("Отрицательное число")
    }else if(number===0){
        console.log("Это ноль")
    }else{
        console.log("Положительное число")
    }
}
checkNumber(5);
checkNumber(-10);

const checkAge = function(age){
    if(age<18){
        console.log("Вы  слишком  молоды  для получения  прав")
    }else{
        console.log("Вы  можете получить права на вождение")
    }
}
checkAge(23);

const getMonthName = function(monthNum){
    let month;

    switch(monthNum){
        case 1:
            month="Январь";
            break;
        case 2:
            month="Февраль";
            break;
        case 3:
            month="Март";
            break;
        case 4:
            month="Апрель";
            break;
        case 5:
            month="Май";
            break;
        case 6:
            month="Июнь";
            break;
        case 7:
            month="Июль";
            break;
        case 8:
            month="Август";
            break;
        case 9:
            month="Сентябрь";
            break;
        case 10:
            month="Октябрь";
            break;
        case 11:
            month="Ноябрь";
            break;
        case 12:
            month="Декабрь";
            break;
        default:
            month="Некорректный номер месяца"
            break;
    }
    return month;
}
console.log(getMonthName(5));