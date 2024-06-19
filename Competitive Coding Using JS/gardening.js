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
  const isGrassTrimmerFound = JSON.parse(readLine());
  const isWaterHosePipeFound = JSON.parse(readLine());

  /* Write your code here */
  
  let findingGrassTimmer = () => {
      return new Promise((resolve, reject) => {
        const findGrassTrimmer = isGrassTrimmerFound ? resolve("Grass Trimmed") : reject("Grass Trimmer Not Found");
        const wateringPlant = isWaterHosePipeFound ? resolve("Watered Plants") : reject("Water Hose Pipe Not Found");
      });
  };
  
  let isGardenCleanningDone = () => {
      return new Promise((resolve, reject) => {
          isGrassTrimmerFound ? resolve("Garden Cleaned") : reject("Garden Not Cleaned");
      });
  };
  
  let plantWatered = () => {
      return new Promise((resolve, reject) => {
        isGrassTrimmerFound ? (isWaterHosePipeFound ? resolve("Watered Plants") : reject("Water Hose Pipe Not Found")) : null;     
      });
  };
  
  

  const myPromise = async () => {
    try {
     
      /* Write your code here */
      const isGrassTrimmed = await findingGrassTimmer();
      console.log(isGrassTrimmed);
      
      const isGardenCleaned = await isGardenCleanningDone();
      console.log(isGardenCleaned);
      
      const findingWaterHose = await plantWatered();
      console.log(findingWaterHose);
    } catch(error) {

      /* Write your code here */
      console.log(error);
      
    }
  };
  
  myPromise();
}
