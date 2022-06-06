// Joining

const dailyRoutine = ["wakeup", "eat", "sleep"];
let routine = dailyRoutine.join("_");
console.log(routine);

//Splitting

let fullName = "Gokul Raj".toUpperCase();
let userName = fullName.split(" ");
let firstName = userName[0];
let secondName = userName[1];
console.log(`My First Name is ${firstName} and My LastName is ${secondName}`);
