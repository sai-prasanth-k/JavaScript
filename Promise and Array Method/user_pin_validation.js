// Given a correct pin correctPin in the prefilled code and userInput
// as an input, create a JS promise,
// resolve with Success text, if the userInput matches with the
// correctPin
// reject with Please enter valid pin text, if the userInput
// mismatches with the correctPin
// Log the responses using promise .then(), .catch() syntax.
// Input
// The input will be a single line containing a number userInput
// Output
// The output should be a single line string with the appropriate response
// Sample Input 1
// 9372
// Sample Output 1
// Success
// Sample Input 2
// 3464
// Sample Output 2
// Please enter valid pin



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
  const userInput = parseInt(readLine());
  const correctPin = 9372;

  /* Write your code here */
  const myPromise =  () => {
      return new Promise((resolve, reject) => {
          return (userInput === correctPin)? resolve("Success") : reject("Please enter valid pin");
      });
  };
  myPromise().then(msg => console.log("Success"))
  .catch(error => console.log("Please enter valid pin"));
}
