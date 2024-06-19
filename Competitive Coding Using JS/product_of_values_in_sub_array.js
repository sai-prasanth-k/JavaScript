"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const nestedArray = JSON.parse(readLine());

  /* Write your code here */
  const productArray = nestedArray.map(eachArray => eachArray.some(eachValue => eachValue % 2 === 0) ? 
  eachArray.reduce((product, value) => product * value) : 0);
  console.log(productArray);
}
