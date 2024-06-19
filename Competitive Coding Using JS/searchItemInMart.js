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
  const categoryOfItem = readLine();
  const item = readLine();

  const mart = [
    {
      category:"pulses",
      items: ["green gram", "green peas", "Turkish gram"]
    },
    {
      category:"soaps",
      items:["santoor", "dove", "lux", "pears"]
    }, 
    {
      category:"oil",
      items: ["sunflower oil", "grapeseed oil", "soybean oil"]
    }, 
    {
      category:"cereals",
      items: ["wheat", "rice", "maize", "oat"]
    }, 
    {
      category:"spices",
      items: ["cumin", "coriander", "black pepper", "clove"]
    }
  ];
  
  /* Write your code here */
  
  const itemSearch = function() {
      return new Promise((resolve, reject) => {
          const findCategory = mart.find(eachSet => eachSet.category === categoryOfItem);
          
          if (findCategory) {
              (findCategory.items).includes(item) ? resolve("Item Found"): reject("Item Not Found");
          }else {
              reject("Category Not Found");
          }
      });
  };
  
  const myPromise = async () => {
      try {
          const findCategoryOfItem = await itemSearch();
          console.log(findCategoryOfItem);
      } catch (e) {
          console.log(e);
      }
  };
  
  myPromise();
  
}
