const btn = document.querySelector("button");
const inp = document.querySelector("input");
const ul = document.querySelector("ul");

ul.addEventListener("click", handleClick);

function handleClick(evt) {
  evt.target.style.color = "blue";
}

btn.addEventListener("click", function (evt) {
  const li = document.createElement("li");
  li.textContent = inp.value;
  ul.appendChild(li);
  inp.value = "";
  console.log(evt);
});
