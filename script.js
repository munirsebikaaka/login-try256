"use strict";
// create an array of all elements to be used
//loop over that array
//create boolean arrays from the mother array in the password to check if a satain element is present
// check if a password has every element from the created small elements
//check if the password is <= 8 elements

const allUsedElement = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "(",
  ")",
  "_",
  "+",
  "~",
  "`",
  "|",
  "}",
  "{",
  "[",
  "]",
  ":",
  ";",
  "?",
  ">",
  "<",
  ",",
  "/",
  "=",
];
const allSmallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const allSymbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "(",
  ")",
  "_",
  "+",
  "~",
  "`",
  "|",
  "}",
  "{",
  "[",
  "]",
  ":",
  ";",
  "?",
  ">",
  "<",
  ",",
  "/",
  "=",
];
const alCapitalLets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "V",
];
const btn = document.querySelector("button");
const tryOut = () => {
  for (const el of allUsedElement) {
    let password = document.querySelector(".inputss").value;
    const receiveMessage = document.querySelector(".message");
    const isSymbolsRequired = allSymbols.includes(el);
    const isSmallLettersRequired = allSmallLetters.includes(el);
    const isCapRequired = alCapitalLets.includes(el);

    const isNumsRequired = allNums.includes(el);

    if (password && isNumsRequired) {
      if (password.length >= 8) {
        receiveMessage.style.color = "#fff";
        receiveMessage.textContent = "Check in...";
      } else if (password.length < 8) {
        receiveMessage.style.color = "red";
        receiveMessage.textContent = "Password must have atleast 8 digits.";
      } else if (!password) {
        receiveMessage.textContent = "Check in";
      }
    }
  }
};
btn.addEventListener("click", tryOut);
