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
  const integers = JSON.parse(readLine());

  /* Write your code here */
  let sumOfIntegers = 0;
  integers.forEach((eachValue, index) => index % 2 === 0 ? sumOfIntegers += eachValue : sumOfIntegers += 0);
  const noOfEvenIndices = Math.ceil(integers.length / 2);
  const averageOfIntegers = sumOfIntegers / noOfEvenIndices;
  console.log(averageOfIntegers);
}
