var slider_container = document.querySelector(".slider-container"),
  header = document.querySelector("header"),
  slidersArrow = document.querySelectorAll(".slidersArrow"),
  slide = document.querySelectorAll(".slide"),
  textEl = document.querySelectorAll(".slide ul li"),
  timer;
onload = () => {
  let page_height = screen.height,
    header_height = header.offsetHeight;
  slider_container.style.height = page_height + "px";
  slider_container.style.marginTop = header_height + "px";
  slide[0].classList.add("active_slide");
  slide[0].style.opacity = 1;
  textEl[0].classList.add("cTop");
  textEl[1].classList.add("cRight");
  textEl[2].classList.add("cLeft");
};
if (screen.width <= 768) {
  slide.forEach((s, i) => {
    var slideVideo = s.querySelector("video");
    if (slideVideo != null) {
      slide[i].remove();
      (header = document.querySelector("header")),
        (slider_container = document.querySelector(".slider-container")),
        (slidersArrow = document.querySelectorAll(".slidersArrow")),
        (slide = document.querySelectorAll(".slide")),
        (textEl = document.querySelectorAll(".slide ul li"));
    }
  });
}
function startInterval() {
  timer = setInterval(() => {
    var activeSlide = document.querySelector(".active_slide"),
      nextActiveSlide = activeSlide.nextElementSibling;
    if (nextActiveSlide != null) {
      activeSlide.classList.remove("active_slide");
      nextActiveSlide.classList.add("active_slide");
      removeClass();
    } else {
      activeSlide.classList.remove("active_slide");
      slide[0].classList.add("active_slide");
      removeClass();
    }
  }, 3000);
}
function removeClass() {
  textEl.forEach((el) => {
    if (el.classList.contains("cTop")) {
      el.classList.remove("cTop");
    } else if (el.classList.contains("cRight")) {
      el.classList.remove("cRight");
    } else {
      el.classList.remove("cLeft");
    }
  });
  var newActiveSlide = document.querySelector(".active_slide"),
    hasVideo = newActiveSlide.querySelector("video");
  if (hasVideo == null) {
    var newTextActiveSlide = newActiveSlide.querySelectorAll("ul li");
    if (newTextActiveSlide != null) {
      newTextActiveSlide[0].classList.add("cTop");
      newTextActiveSlide[1].classList.add("cRight");
      newTextActiveSlide[2].classList.add("cLeft");
    }
  }
}
setTimeout(() => {
  startInterval();
  slidersArrow[0].addEventListener("click", () => {
    clearInterval(timer);
    startInterval();
    var activeSlide = document.querySelector(".active_slide"),
      previousActiveSlide = activeSlide.previousElementSibling;
    if (previousActiveSlide != null) {
      activeSlide.classList.remove("active_slide");
      previousActiveSlide.classList.add("active_slide");
      removeClass();
    } else {
      var i = slide.length - 1;
      activeSlide.classList.remove("active_slide");
      slide[i].classList.add("active_slide");
      removeClass();
    }
  });
  slidersArrow[1].addEventListener("click", () => {
    clearInterval(timer);
    startInterval();
    var activeSlide = document.querySelector(".active_slide"),
      nextActiveSlide = activeSlide.nextElementSibling;
    if (nextActiveSlide != null) {
      activeSlide.classList.remove("active_slide");
      nextActiveSlide.classList.add("active_slide");
      removeClass();
    } else {
      activeSlide.classList.remove("active_slide");
      slide[0].classList.add("active_slide");
      removeClass();
    }
  });
}, 6000);