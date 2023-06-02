const firstFeature = document.querySelector(".feature-container-1");
const secondFeature = document.querySelector(".feature-container-2");
const thirdFeature = document.querySelector(".feature-container-3");
const fourthFeature = document.querySelector(".feature-container-4");

const allFeatures = [firstFeature, secondFeature, thirdFeature, fourthFeature];

window.addEventListener("scroll", checkFeature);
checkFeature();

function checkFeature() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  allFeatures.forEach((feature) => {
    const boxTop = feature.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      feature.classList.add("show");
    } else {
      feature.classList.remove("show");
    }
  });
}
