//Mr Seagull Wrote this - IT IS AWESOMMMMMMMEEEEEEEEEEE

document.getElementById("Start").addEventListener("click", spin);

//Set balnce to 500
let balance = 500;
let bet = document.getElementById("bet");

const increaseBet = () => {
  bet = bet + 2;
};

function spin() {
  if(bet.value > balance){
    document.getElementById("balanceDisplay").textContent = "Insufficient funds refresh page, try again"
    return
  }
  //alert(bet)
  let final = [];
  final.push(spinReel("r1"));
  final.push(spinReel("r2"));
  final.push(spinReel("r3"));
  //Check if the reels match up by checking 1 and 0 & 0 and 2
  if (final[0] == final[1] && final[1] == final[2]) {
    document.getElementById("status").src = "images/BigWin.png";
    balance = balance += parseInt(bet.value);
  } else {
    document.getElementById("status").src = "images/Fail.png";
    balance = balance - parseInt(bet.value);
  }
  update_theScrene();
  console.log(bet.value)
}
function spinReel(reel) {
  let i = Math.floor(Math.random() * 7);
  if (i == 0) {
    document.getElementById(reel).src = "images/ThreeBars.png";
  }
  if (i == 1) {
    document.getElementById(reel).src = "images/Grapes.png"; 
  }
  if (i == 2) {
    document.getElementById(reel).src = "images/Lemon.png"; 
  }
  if (i == 3) {
    document.getElementById(reel).src = "images/Orange.png"; 
  }
  if (i == 4) {
    document.getElementById(reel).src = "images/Strawberry.png"; 
  }
  if (i == 5) {
    document.getElementById(reel).src = "images/Watermelon.png"; 
  }
  if (i == 6) {
    document.getElementById(reel).src = "images/OneBar.png"; 
  }
  
  return i;
}

const update_theScrene = () => {
  document.getElementById("balanceDisplay").textContent = balance;
};
