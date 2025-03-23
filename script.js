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