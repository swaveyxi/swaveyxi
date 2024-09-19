//nav bar
const navBtn = document.querySelector(".nav-toggle");
const navContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".links");

navBtn.addEventListener("click", function () {
  // navContainer.classList.add("show-links");
  const containerHeight = navContainer.getBoundingClientRect().height;
  const navHeight = navLinks.getBoundingClientRect().height;
  if (containerHeight === 0) {
    navContainer.style.height = `${navHeight}px`;
  } else {
    navContainer.style.height = 0;
  }
});

//date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
