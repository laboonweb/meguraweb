function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
  let alphabet = [
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
  ];
  return alphabet[rand(0, alphabet.length - 1)];
}

function getRandomParagraph(paragraph) {
  let text = paragraph.innerHTML;

  let finalWord = "";
  for (let i = 0; i < text.length; i++) {
    finalWord += text[i] == "" ? "" : getRandomLetter();
  }

  return finalWord;
}

let wordContainer = document.querySelector(".word-container");

let firstParagraph = document.querySelector("#first-paragraph");
let secondParagraph = document.querySelector("#second-paragraph");
let thirdParagraph = document.querySelector("#third-paragraph");
let fourthParagraph = document.querySelector("#fourth-paragraph");

let interv1 = "undefined";
let interv2 = "undefined";
let interv3 = "undefined";
let interv4 = "undefined";
let canChange1 = false;
let canChange2 = false;
let canChange3 = false;
let canChange4 = false;
let globalCount1 = 0;
let globalCount2 = 0;
let globalCount3 = 0;
let globalCount4 = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let FIRST_INITIAL_WORD = firstParagraph.innerHTML;
let SECOND_INITIAL_WORD = secondParagraph.innerHTML;
let THIRD_INITIAL_WORD = thirdParagraph.innerHTML;
let FOURTH_INITIAL_WORD = fourthParagraph.innerHTML;
let isGoing1 = false;
let isGoing2 = false;
let isGoing3 = false;
let isGoing4 = false;

function initializeAll() {
  initializeOne();
  initializeTwo();
  initializeThree();
  initializeFour();
}

function initializeOne() {
  if (isGoing1) return;

  isGoing1 = true;
  let firstRandomParagraph = getRandomParagraph(firstParagraph);
  firstParagraph.innerHTML = firstRandomParagraph;

  interv1 = setInterval(function () {
    let finalWord = "";
    for (let x = 0; x < FIRST_INITIAL_WORD.length; x++) {
      if (x <= count1 && canChange1) {
        finalWord += FIRST_INITIAL_WORD[x];
      } else {
        finalWord += getRandomLetter();
      }
    }
    firstParagraph.innerHTML = finalWord;
    if (canChange1) {
      count1++;
    }
    if (globalCount1 >= 20) {
      canChange1 = true;
    }
    if (count1 >= FIRST_INITIAL_WORD.length) {
      clearInterval(interv1);
      count1 = 0;
      canChange1 = false;
      globalCount1 = 0;
      isGoing1 = false;
    }
    globalCount1++;
  }, 50);
}

function initializeTwo() {
  if (isGoing2) return;

  isGoing2 = true;
  let secondRandomParagraph = getRandomParagraph(secondParagraph);
  secondParagraph.innerHTML = secondRandomParagraph;

  interv2 = setInterval(function () {
    let finalWord = "";
    for (let x = 0; x < SECOND_INITIAL_WORD.length; x++) {
      if (x <= count2 && canChange2) {
        finalWord += SECOND_INITIAL_WORD[x];
      } else {
        finalWord += getRandomLetter();
      }
    }
    secondParagraph.innerHTML = finalWord;
    if (canChange2) {
      count2++;
    }
    if (globalCount2 >= 20) {
      canChange2 = true;
    }
    if (count2 >= SECOND_INITIAL_WORD.length) {
      clearInterval(interv2);
      count2 = 0;
      canChange2 = false;
      globalCount2 = 0;
      isGoing2 = false;
    }
    globalCount2++;
  }, 50);
}

function initializeThree() {
  if (isGoing3) return;

  isGoing3 = true;
  let thirdRandomParagraph = getRandomParagraph(thirdParagraph);
  thirdParagraph.innerHTML = thirdRandomParagraph;

  interv3 = setInterval(function () {
    let finalWord = "";
    for (let x = 0; x < THIRD_INITIAL_WORD.length; x++) {
      if (x <= count3 && canChange3) {
        finalWord += THIRD_INITIAL_WORD[x];
      } else {
        finalWord += getRandomLetter();
      }
    }
    thirdParagraph.innerHTML = finalWord;
    if (canChange3) {
      count3++;
    }
    if (globalCount3 >= 20) {
      canChange3 = true;
    }
    if (count3 >= THIRD_INITIAL_WORD.length) {
      clearInterval(interv3);
      count3 = 0;
      canChange3 = false;
      globalCount3 = 0;
      isGoing3 = false;
    }
    globalCount3++;
  }, 50);
}

function initializeFour() {
  if (isGoing4) return;

  isGoing4 = true;
  let fourthRandomParagraph = getRandomParagraph(fourthParagraph);
  fourthParagraph.innerHTML = fourthRandomParagraph;

  interv4 = setInterval(function () {
    let finalWord = "";
    for (let x = 0; x < FOURTH_INITIAL_WORD.length; x++) {
      if (x <= count4 && canChange4) {
        finalWord += FOURTH_INITIAL_WORD[x];
      } else {
        finalWord += getRandomLetter();
      }
    }
    fourthParagraph.innerHTML = finalWord;
    if (canChange4) {
      count4++;
    }
    if (globalCount4 >= 20) {
      canChange4 = true;
    }
    if (count4 >= THIRD_INITIAL_WORD.length) {
      clearInterval(interv4);
      count4 = 0;
      canChange4 = false;
      globalCount4 = 0;
      isGoing4 = false;
    }
    globalCount4++;
  }, 50);
}

wordContainer.addEventListener("mouseenter", initializeAll);

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(initializeAll, 50);
});

//im clicking crtl s haha
// what do you think boss?
