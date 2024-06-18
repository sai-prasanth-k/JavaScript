// Reject with a Message
// Given a string errorMessage as an input, create a JS promise, reject
// with the given errorMessage , consume the promise using catch()
// syntax and log the response.
// Input
// The input will be a single line containing a string errorMessage
// Output
// The output should be a single line containing the errorMessage
// Sample Input 1
// Request Rejected
// Sample Output 1
// Request Rejected
// Sample Input 2
// Resource Not Found
// Sample Output 2
// Resource Not Found


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
  const errorMessage = readLine();
  
  /* Write your code here */
  const myPromise = () => {
      return new Promise((resolve, reject) => {
          reject(errorMessage);
      });
  };
  myPromise().catch( error => console.log(error) );
}
