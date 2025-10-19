//Statement : 
//"Write a program in which there is a car object (with properties brand, model, and year) and use a for...in loop to print all the properties and their values."

let car = {
   Name : "BMD",
   Model : "M5",
   Year : 2022
}

for (let key in car) {
   console.log(key + ": " + car[key]);
}