/*
'use strict';

let hasDriverLicense = false;
const passTest = true;

if (passTest)
{
    hasDriverLicense = true;
}
if (hasDriverLicense)
{
    console.log("I can drive :D");
}

// const interface = "Audio"; ใน 'use strict' mode จะไม่สามารถใช้คำพวกนี้เป้นตัวแปรได้
// const private = 534;

*/

function logger()
{
    console.log("My name is Sikkadit");
}

// calling / runing / invoking function
logger();
logger();
logger();
 
function fruitProcessor(apples ,orenges)
{
    const juice = `Juice with ${apples} apples and ${orenges} orenges`;
    return juice;
}

const appleJuice = fruitProcessor(5 , 0);
console.log(appleJuice);

const appleOrengeJuice = fruitProcessor(2 , 4);
console.log(appleOrengeJuice);

const num = Number("23");
