/*
const country = "Thailand";
const continent = "Asia";
let population = 71;
const isIsland = false;
const language = "thai";

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);


console.log(population/2);
population++;

console.log(population);
console.log(population > 6); //is show some boolean
console.log(population < 33); //is show some boolean

const description1 =
    country + 
    " is in " +
    continent +
    ", and its " +
    population + 
    ", million people speak " +
    language;

console.log(description1);


const description = `${country} is in ${continent}, and its ${population}, million people speak ${language}`; // เป็นการใช้ literal syntax

console.log(description);

if (population > 33) {
    console.log(`${country}'s population ${population} million is above average`); //population average is 33 million
} else {
        console.log(`${country}'s population is ${33 - population} million is below average`); // population average is 33 million
    }


console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 23
console.log("19" - "13" + 17); // -> 24
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 18
// จากโจทย์จะสรุปได้ว่า JavaScript เมื่อ string เจอกับ + ทีเป็น string จะกลายเป็นการต่อข้อความแทนที่จะ + เลข แต่ถ้าเป็น - * / จะคิดเลขปกติ


const numNeighbours = prompt("how many neighbour countries does your country have?");

// LATER : This will help us prevert bugs นี่จะช่วยให้เราเจอบัคได้

if (numNeighbours === 1){ // === จะเป็นการเปรียบเทียบค่า และ ชนิดข้อมูล แต่ถ้าเป็น == จะแปลงชนิดข้อมูลอัตโนมัติ
    console.log("Only 1 border!");
}
    else if (numNeighbours > 1){
        console.log("More than 1 border");
    }
    else {
        console.log("No borders");
    }


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);    
console.log(typeof javascriptIsFun); 
console.log(typeof 23); 
console.log(typeof "jonas"); 

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);


let age = 30; //จะเปลี่ยนแปลงค่าของตัวแปรได้ตลอด
age = 31;

const birthYear = 1991; // จะไม่สามารถเปลี่ยนค่าของตัวแปรได้
// birthYear = 1990; -> X
//const job;

var job = "programmer";
job = "teacher";

lastName = "thangmahameak";
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas , ageSarah);

console.log(ageJonas * 2 , ageJonas / 10 , 2 ** 3);
// 2 ** 3 คือการยกกำลัง -> 2 * 2 * 2 = 9

const firstName = "sikkadit";
const lastName = "thangmahameak";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x* 4 = 100
x++; // x + 1 = 101
x--; // x - 1 = 100
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // > , < , >= , <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x , y;
x = y = 25 - 10 - 5; // x = y = 10 , x = 10
console.log(x , y);
// การคิดเลขของการ coding จะเรียงลำดับความสำคัญของ operators = () , * , / , + , - 



//CHALLENGE #1!


// Data 1
const massMark = 78;
const heightMark = 1.69;


const massJohn = 92;
const heightJohn = 1.95;


const BMImark = massMark / (heightMark * heightMark);
const BMIjohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMImark > BMIjohn;
if (markHigherBMI)
{
    console.log("markHigherBMI")
}

console.log("BMImark:" , BMImark , "BMIjohn:" , BMIjohn);

// Data 2
const massMark2 = 95;
const heightMark2 = 1.88;

const massJohn2 = 85;
const heightJohn2 =1.76;

const BMImark2 = massMark2 / (heightMark2 * heightMark2);
const BMIjohn2 = massJohn2 / (heightJohn2 * heightJohn2);

const markHigherBMI2 = BMImark2 > BMIjohn2;
if (markHigherBMI2)
{
    console.log("markHigherBMI2");
}
else
{
    console.log("markLowerBMI2")
}
console.log("BMImark2:" , BMImark2 , "BMIjohn2" , BMIjohn2);


const firstName = "sikkadit";
const job = "Progammer";
const birthYear = 2003;
const year = 2026;

const sikkadit = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(sikkadit);

const sikkaditnew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(sikkaditnew)

console.log(`Just a regular string....`);

console.log(`String with \n\
multiple \n\
line`);

console.log(`String with
multiple
line`);

const age = 15;

if (age >= 18) // if age >= 18 do here
{
    console.log(`Sarah can start driving license!`);
}
else // if age < 18 do here
{
    const yearsLeft = 18 - age;
    console.log(`not old enough she is too young wait another ${yearsLeft} years!`);
}
// ทำตามฟังก์ชั่นที่ใส่ไว้ ถ้าเป็น true ก็ทำ if ถ้าเป็น false ก็ทำ else ง่ายๆ basicๆ 

const birthYear = 2012;
let century;

if (birthYear <= 2000)
{
    century = 20;
}
else
{
    century = 21;
}

console.log(century);


//CHALLENGE #2!


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn)
{
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`)
}
else(BMIJohn > BMIMark)
{
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`)
}



// type conversion
const inputYear = "1991";
console.log(Number(inputYear) , inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23) , 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");


let n = "1" + 1; // "11"
n = n - 1; 
console.log(n);


// 5 falsy values: 0 ," " , undefined , null , NaN(NaN = Not A Number)

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("sikkadit"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money)
{
    console.log("Don't spend it all ;D");
}
else
{
    console.log("Get a job bro!")
}
//if else จะมองเป็น Boolean ถ้า money = 0 จะทำให้ Boolean เป็น false ดังนั้น ถ้าอยากให้เป็น true ต้องมีค่า มากกว่า 0 หรือไม่มี 5 falsy value ตามข้างบน

const age = "18";
if (age === 18) console.log("You just become an adult :D (strict");

if (age == 18) console.log("You just become an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?")); // ถ้าอยากให้ใส่เป็นตัวเลขให้ใช้function Number()ด้วย
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23)
{
    console.log("Cool! 23 is an amezing number!");
}
else if (favourite === 7)
{
    console.log("7 is also a cool number");
}
else if (favourite === 9)
{
    console.log("9 is also a cool number")
}
else
{
    console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("why not 23");



const hasDriverLicense = true; // A
const hasGoodVision = true;    // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive)
// {
//     console.log("Sarah is able to drive!");
// }
// else
// {
//     console.log("Someone else should dirve...");
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);


if (hasDriverLicense && hasGoodVision && !isTired)
{
    console.log("Sarah is able to drive!");
}
else
{
    console.log("Someone else should dirve...");
}


// CHALLENGE #3!


const scoreDolphins = (96 + 108 + 89) / 3; 
const scoreKoalas = (88 + 91 + 110) /3;

console.log(scoreDolphins , scoreKoalas)

if (scoreDolphins > scoreKoalas)
{
console.log("Dolphins win the trophy");
}
else if (scoreKoalas > scoreDolphins)
{
console.log("Koalas win the trophy");
}
else 
console.log("Both win the trophy");

// BONUS 1

const scoreDolphins = (97 + 112 + 80) / 3; 
const scoreKoalas = (109 + 95 + 50) /3;

console.log(scoreDolphins , scoreKoalas)

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100)
{
    console.log("Dolphins win the trophy");
}

else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100)
{
    console.log("Koalas win the trophy");
}

else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100)
{
    console.log("Both win the trophy");
}

else
{
    console.log("No one wins the trophy");
}


const day = "thursday" ;

switch(day)
{
    case "monday": // day === "monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;

    case "tuesday":
        console.log("Prepare theory videos");
        break;

    case "wednesday":
        break;
        
    case "thursday":
        console.log("Write code examples");
        break;

    case "friday":
        console.log("Recod Video");
        break;

    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    
    default:
        console.log("Not a valid day!");
}

// if else version 

if (day === "monday")
{
    console.log("Plan course structure");
    console.log("Go to coding meetup");
}

else if (day === "tuesday")
{
    console.log("Prepare theory videos");
}

else if (day === "wednesday" || "thursday")
{
    console.log("Write code examples")
}

else if (day === "friday")
{
    console.log("Recod Video");
}

else if (day === "saturday" || "sunday")
{
    console.log("Enjoy the weekend :D");
}

else
{
    console.log("Not a valid day!");
}


3 + 4
1991
true && false && !false

if (23 > 10)
{
    const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} year old ${me}`);



const age = 23;
// age >= 18 
// ? console.log("I like to drink wine") 
// : console.log("I like to drink water");


const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18)
{
    drink2 = "wine";
}
else
{
    drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);



//CHALLENGE #4!


const bill = 275;

const between50_300 = bill >= 50 && bill <= 300;
let tip ;

between50_300
? tip = bill * 15/100
: tip = bill * 20/100;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
//อันนี้ทำเอง


//อันนี้ของ exemple
const bill = 275;
const tip = bill <= 300 && bill >= 50
? bill * 0.15 // เท่ากับ 15/100
: bill * 0.20; // เท่ากับ 20/100

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/


