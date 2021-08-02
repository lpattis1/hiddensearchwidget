const searchBtn = document.querySelector(".btn");
const searchBar = document.querySelector(".search");

searchBtn.addEventListener("click", function (e) {
  searchBar.classList.add("active");
});
