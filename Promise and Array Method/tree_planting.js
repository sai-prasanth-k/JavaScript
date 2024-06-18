// Tree Planting
// Given a boolean isResourceAvailable as an input, create a JS
// promise,
// resolve with Tree Planted text, if the isResourceAvailable is true
// reject with Resource not available text, if the isResourceAvailable
// is false
// Use async/await and try/catch blocks.
// Input
// The input will be a single line containing a boolean isResourceAvailable
// Output
// The output should be a single line string with the appropriate message
// Sample Input 1
// true
// Sample Output 1
// Tree Planted



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
  const isResourceAvailable = JSON.parse(readLine());
  
  /* Write your code here */
  const validateAvailable = (isResourceAvailable) => {
      return new Promise( (resolve, reject) => {
          isResourceAvailable === true ? resolve("Tree Planted") : reject("Resource not available");
      });
  };
  
  const myPromise = async () => {
      try {
          const plantingStatus = await validateAvailable(isResourceAvailable);
          console.log(plantingStatus);
      } catch(error) {
          console.log(error);
      }
  }
  myPromise();
}
