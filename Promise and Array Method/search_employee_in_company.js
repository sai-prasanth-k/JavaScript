// Given an array of objects companies in the prefilled code and
// companyId , employeeId as inputs, create a JS promise,
// resolve with Employee Found text, if the companyId matches with
// the companyCode and the corresponding employees list includes
// the employeeId in the given companies .
// reject with Company Not Found text, if the companyId does not
// match any companyCode in the companies
// reject with Employee Not Found text, if the corresponding
// employees does not include employeeId
// Use async/await and try/catch blocks.
// Input
// The first line of input contains a string companyId
// The second line of input contains a number employeeId
// Output
// The output should be a single line string with the appropriate message
// Sample Input 1
// PY234
// 293
// Sample Output 1
// Employee Found
// Sample Input 2
// YR001
// 293
// Sample Output 2
// Company Not Found




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
  const companyId = readLine();
  const employeeId = parseInt(readLine());

  const companies = [
    {
      companyCode:"PY234",
      employees: [293, 730, 637]
    },
    {
      companyCode:"GR023",
      employees:[823, 563]
    }, 
    {
      companyCode:"HC754",
      employees: [511, 529, 943]
    }, 
    {
      companyCode:"PA439",
      employees: [276, 188, 333]
    }, 
    {
      companyCode:"CX536",
      employees: [431, 923]
    },
    {
      companyCode:"RD310",
      employees: [356, 901]
    }
  ];
  
  /* Write your code here */
  
  const employeeSearch = () => {
      return new Promise ( (resolve, reject) => {
          const findCompany = companies.find(eachCompany => eachCompany.companyCode === companyId);
          
          
          if (findCompany ) {
              const isEmployee = (findCompany.employees).includes(employeeId);
              if (isEmployee) {
                resolve("Employee Found");
              }else {
                  reject ("Employee Not Found");
              }
          }else  { 
              reject("Company Not Found");
          }
      });
  };
  
  const myPromise = async () => {
      try {
          const findEmployee = await employeeSearch();
        console.log(findEmployee);
      } catch (e) {
          console.log(e);
      }
  };
  
  myPromise();
  
}
