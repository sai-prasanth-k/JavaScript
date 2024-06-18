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
  const sumOfArray = nestedArray.map((eachList) => 
  (eachList.some(everyValue => everyValue % 2 === 0) 
  ? eachList.reduce((acculumated, currentValue) => acculumated + currentValue) : 0));
  console.log(sumOfArray);
}

