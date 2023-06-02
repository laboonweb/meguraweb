const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const firstWord = document.querySelector("#first-word");
const secondWord = document.querySelector("#second-word");
const thirdWord = document.querySelector("#third-word");
const fourthWord = document.querySelector("#fourth-word");
const fifthWord = document.querySelector("#fifth-word");
const sixthWord = document.querySelector("#sixth-word");
const seventhWord = document.querySelector("#seventh-word");
const eighthWord = document.querySelector("#eighth-word");
const ninthWord = document.querySelector("#ninth-word");
const tenthWord = document.querySelector("#tenth-word");
const eleventhWord = document.querySelector("#eleventh-word");
const twelfthWord = document.querySelector("#twelfth-word");

const allWords = [
  firstWord,
  secondWord,
  thirdWord,
  fourthWord,
  fifthWord,
  sixthWord,
  seventhWord,
  eighthWord,
  ninthWord,
  tenthWord,
  eleventhWord,
  twelfthWord,
];

let interval = null;

/*
document.querySelector("#intro").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
*/

document.querySelector(".introduction").onmouseover = () => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    allWords.forEach((word) => {
      word.innerText = word.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return word.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= word.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    });
  }, 30);
};
