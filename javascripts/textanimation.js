const firstParagraph = document.getElementById("first-paragraph");
const text = firstParagraph.innerHTML;

const secondParagraph = document.getElementById("second-paragraph");
const secondText = secondParagraph.innerHTML;

//After the animation ends, remove the border-right and stop the blinking for the firstParagraph and call the function for animating the secondParagraph

setTimeout(() => {
  firstParagraph.style.borderRight = "none";
  firstParagraph.style.animation = "none";
}, 2 * 1000);
