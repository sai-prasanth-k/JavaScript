// Campfire
// We have a task to light a Campfire
// Given two boolean values isSticksFound and isLighterFound as
// inputs, create three JS promises using async/await and try/catch
// blocks.


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
  const isSticksFound = JSON.parse(readLine());
  const isLighterFound = JSON.parse(readLine());

  /* Write your code here */
  
  const isStickGathered = () => {
      return new Promise ( (resolve, reject) => {
          isSticksFound ? resolve("Sticks Gathered") : reject("Sticks Not Found");
      });
  };
  
  const isStickArranged = () => {
      return new Promise( (resolve, reject) => {
          if (isSticksFound) {
          resolve("Sticks Arranged");
          }else {
              reject("");
          }
      });
  };
  
  const isStickLighted = () => {
      return new Promise ((resolve, reject) => {
          if (isSticksFound){
          isLighterFound ? resolve("Campfire Lighted") : reject("Lighter Not Found");}
      });
  };
  
  const myPromise = async () => {
      try {
          const stickGathered = await isStickGathered();
          console.log(stickGathered);
      }catch (e) {
          console.log(e);
      }
    const stickArranged = await isStickArranged();
    console.log(stickArranged);
      try {
          const stickLighted = await isStickLighted();
          console.log(stickLighted);
      } catch (err) {
          console.log(err);
      }
  };
  
  
  myPromise();
  
  
  
  
}
