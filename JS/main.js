let bars = document.querySelector("header .mobile");
let headerLinks = document.querySelector("header .links");
let close = document.querySelector("header .links .close");
bars.addEventListener(("click"), () => {
  headerLinks.classList.toggle("active");
});

close.addEventListener(("click"), () => {
  headerLinks.classList.toggle("active");
});

let imgs = Array.from(document.querySelectorAll(".slider img"));

let slidesCount = imgs.length;

let currentSlide = 1;

let slideNumber = document.querySelector(".slide-number");

let ul = document.createElement("ul");

ul.setAttribute("id", "indecator-ul");

for (let i = 0; i < slidesCount; i++) {
  let lis = document.createElement("li");
  lis.setAttribute("data-content", i + 1);
  ul.appendChild(lis);
}

document.querySelector(".indecator").appendChild(ul);

let prevButton = document.querySelector(".prev");

prevButton.addEventListener("click", prev);

function prev() {
  if (currentSlide == 1) {
    return false;
  } else {
    currentSlide--;
  }
  check();
}

let nextButton = document.querySelector(".next");

nextButton.addEventListener("click", next);

function next() {
  if (currentSlide === slidesCount) {
    return false;
  } else {
    currentSlide++;
  }
  check();
}

let createdUl = document.getElementById("indecator-ul");

let lis = Array.from(document.querySelectorAll("#indecator-ul li"));

lis.forEach((li) => {
  li.onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-content"));
    check();
  };
});

check();

function check() {
  slideNumber.textContent = `Slide #${currentSlide} of ${slidesCount}`;

  imgs.forEach((img) => {
    img.classList.remove("active");
  });

  lis.forEach((li) => {
    li.classList.remove("active");
  });

  imgs[currentSlide - 1].classList.add("active");

  createdUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
