/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  getCard();
};

//Variable Declarations
// Array of number and symbol
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const palos = ["♦", "♥", "♠", "♣"];

// Store rand combinations in variables, one for numbers and two for symbols (left upper corner and lower right corner of card)
let num = document.querySelector(".num");
let palo1 = document.querySelector(".palo1");
let palo2 = document.querySelector(".palo2");

// Generate Random Combination of Numbers and Symbols
const getCard = function() {
  const rand = function(arr) {
    let rand1 = Math.floor(Math.random() * arr.length);
    return arr[rand1];
  };
  // Edit HTML elements with the combination
  num.innerHTML = rand(numbers);
  let palorand = rand(palos);
  palo1.innerHTML = palorand;
  palo2.innerHTML = palorand;

  // Make the proper symbols red
  if (palorand === "♦" || palorand === "♥") {
    palo1.style.color = "red";
    palo2.style.color = "red";
  } else {
    palo1.style.color = "black";
    palo2.style.color = "black";
  }
};

let interval = setInterval(getCard, 5000);
const timerBtn = document.querySelector(".timerBtn");

// Generate Random card on click of button
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  getCard();
});

// Set timer and stop timer buttton
timerBtn.addEventListener("click", function() {
  if (timerBtn.classList.contains("timerOff")) {
    clearInterval(interval);
    timerBtn.classList.toggle("timerOff");
    timerBtn.innerHTML = "Activate Timer";
  } else {
    interval = setInterval(getCard, 5000);
    timerBtn.classList.toggle("timerOff");
    timerBtn.innerHTML = "Deactivate Timer";
  }
});

//Card Size Button Medium and Small
const sizeBtn = document.querySelector(".sizeBtn");
const cardSize = document.querySelector(".cardSize");

sizeBtn.addEventListener("click", function() {
  if (sizeBtn.classList.contains("mSize")) {
    sizeBtn.classList.remove("mSize");
    cardSize.classList.replace("card", "smallCard");
    palo1.classList.replace("palo1M", "palo1S");
    num.classList.replace("numM", "numS");
    palo2.classList.replace("palo2M", "palo2S");
    sizeBtn.innerHTML = "Big Card";
  } else {
    sizeBtn.classList.add("mSize");
    cardSize.classList.replace("smallCard", "card");
    palo1.classList.replace("palo1S", "palo1M");
    num.classList.replace("numS", "numM");
    palo2.classList.replace("palo2S", "palo2M");
    sizeBtn.innerHTML = "Small Card";
  }
});
