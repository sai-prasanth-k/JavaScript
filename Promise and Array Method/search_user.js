// Search User
// Given an array users in the prefilled code and userName as an
// input, create a JS promise,
// resolve with User Found text, if the users includes userName
// reject with User Not Found text, if the users does not include
// userName
// Use async/await and try/catch blocks.
// Input
// The input will be a single line containing a string userName
// Output
// The output should be a single line string with the appropriate message
// Sample Input 1
// Abhiram
// Sample Output 1
// User Found



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
  const userName = readLine();
  const users = ["Abhiram", "Gabrill", "Mosh", "Alia", "Rehman", "Manoj"];
  
  /* Write your code here */
  const userValidation = () => {
      return new Promise( (resolve, reject) => {
          users.includes(userName) ? resolve("User Found") : reject("User Not Found");
      });
  };
  
  const myPromise = async () => {
      try {
          const userValid = await userValidation();
          console.log(userValid);
      } catch (e) {
          console.log(e);
      }
  };
  myPromise();
}
