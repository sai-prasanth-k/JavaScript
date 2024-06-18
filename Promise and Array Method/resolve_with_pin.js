// Resolve with Pin
// Given a number pin as an input, create a JS promise, resolve with
// the given pin , consume the promise using then() syntax and log
// the response.
// Input
// The input will be a single line containing a number pin
// Output
// The output should be a single line containing the pin
// Sample Input 1
// 200
// Sample Output 1
// 200
// Sample Input 2
// 204
// Sample Output 2
// 204


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
  const pin = parseInt(readLine());
  
  /* Write your code here */
  const myPromise = () => {
      return new Promise((resolve, reject) => {
          resolve(pin);
      })
  }
  myPromise().then(response => console.log(response))
}
