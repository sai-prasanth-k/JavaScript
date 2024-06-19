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
  const dayCharge = JSON.parse(readLine());
  const days = parseInt(readLine());
 
  /* Write your code here */
  let bill =  dayCharge * days;
  let discount = 0;
  let discountedBill = 0;
  if (days > 5) {
      discount = 15 ;
  }else if (days > 2 && days <= 5){
      discount = 5;
  }
  discountedBill = bill - (bill * discount) / 100;
  console.log(discountedBill);
}