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

class Mobile {
 
  constructor(brand, batteryStatus, song, isCallInProgress){
      this.brand = brand;
      this.batteryStatus = batteryStatus;
      this.song = song;
      this.isCallInProgress = isCallInProgress
  }
  playMusic() {
      console.log(`Playing ${this.song} Song`);
  }
  
  stopMusic(){
      console.log("Music Stopped");
  }
  
  fullCharge(){
      if (this.batteryStatus < 100) {
          this.batteryStatus = 100;
          console.log("Mobile Fully Charged");
      }else if (this.batteryStatus === 100) {
          console.log("Mobile Already Fully Charged");
      }
  }
  
  makeCall() {
      console.log("Calling...");
      this.isCallInProgress = true;
  }
  
  endCall() {
      if(this.isCallInProgress){
          this.isCallInProgress = false;
          console.log("Call Ended");
      }else {
          console.log("No Ongoing Call to End");
      }
  }

}

/* Please do not modify anything below this line */

function main() {
  const brand = readLine();
  const ram = readLine();
  const batteryStatus = parseInt(readLine());
  const song = readLine();
  const isCallInProgress = JSON.parse(readLine());

/* Please do not modify anything above this line */
  
  const myMobile = new Mobile(brand, batteryStatus, song, isCallInProgress);

/* Please do not modify anything below this line */
  
  myMobile.fullCharge();
  
  myMobile.playMusic();
  myMobile.stopMusic();
  
  myMobile.endCall();
  myMobile.makeCall();
  myMobile.endCall();
}