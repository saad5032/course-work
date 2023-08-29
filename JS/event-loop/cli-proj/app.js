import readLineSync from "readline-sync";
import axios from "axios";
import chalk from "chalk";
import fs from "fs";

async function Main() {
  console.log(chalk.green("*************************************************"));
  console.log("\t\t WEATHER CLI \t\t");
  console.log(chalk.green("*************************************************"));
  const options = [
    "Exit The Program",
    "City co-ordinates",
    "Live Temperature in Celsius ( \u2103  )",
    "Live Temperature in Fahrenheit ( \u2109  )",
    "Live Temperature in Kelvin ( \u212A )",
    "Min and Max Temp",
    "humidity",
    "UTC Time",
    "Display Sunrise and Sunset Time in UTC",
    "Local time",
  ];
  options.forEach((ele, i) => {
    console.log(`Enter ${i} to ${ele}`);
  });
  const option = readLineSync.questionInt(
    "Enter your option from the above menu : "
  );
}

// Main();



//1. Display City Name at Top
//2. Display the Current Temperature in Celsius and Fahrenheit
//3. Same for min and max temp
//4. Display Sunrise and Sunset Time in UTC
//5. Display humidity
//6. Display UTC time
//8. Display City Name with city code

let currentEpoch = Date.now()  // UTC format
// console.log(currentEpoch);

let currentDate = new Date(currentEpoch).toLocaleString() // If you to convert UTC to your local time
console.log(currentDate);

function cityName(){
  fs.readFile("cities.json",(err,info)=>{
    if (err) throw err;
    data = JSON.parsa(info)
  })
}