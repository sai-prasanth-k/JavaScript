"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // arrayOfCarBrands
  let arrayOfCarBrands = JSON.parse(readLine().replace(/'/g, '"'));

  /*
   *Write your code here and log the output.
   */
   let brandArray = [];
   
   for (let each_car of arrayOfCarBrands) {
       let brandCountry = each_car["country"];
       if (brandCountry === "India") {
           brandArray.push(each_car["name"]);
       }
   }
   console.log(brandArray);
}
