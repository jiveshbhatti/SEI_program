const titleEl = document.querySelector("#title");
const pEl = document.querySelector(".cool");
const aEl = document.querySelector("a");
const commentEls = document.querySelectorAll(".comment");
const commentElsHTMLCollection = document.getElementsByClassName("comment");
console.log(commentEls);
console.log(commentElsHTMLCollection);

for (let commentEl of commentEls) {
  console.log(commentEl);
}

pEl.innerHTML = "Comments for <strong>Today</strong>";
titleEl.style.textAlign = "center";
// pEl.style.color = "purple";
pEl.setAttribute("data-custom", "sweet");
console.log(pEl.hasAttribute("data-custom"));
// console.dir(pEl);

aEl.setAttribute("href", "https://www.google.ca");

pEl.classList.remove("cool");
pEl.classList.add("hot");
