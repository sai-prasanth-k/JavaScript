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

/* Please do not modify anything above this line */

function User(username, isOnline) {
  this.username = username,
  this.isOnline = isOnline
}

/* Please do not modify anything below this line */

function main() {
  let firstUserName = readLine();
  let firstUserOnlineStatus = JSON.parse(readLine());
  let secondUserName = readLine();
  let secondUserOnlineStatus = JSON.parse(readLine());

/* Please do not modify anything above this line */ 
  
  let userObj1 = new User(firstUserName,firstUserOnlineStatus);
  let userObj2 = new User(secondUserName, secondUserOnlineStatus);
  console.log(userObj1);
  console.log(userObj2);
}
