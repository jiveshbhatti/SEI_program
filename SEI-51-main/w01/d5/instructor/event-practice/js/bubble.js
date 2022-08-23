const btn = document.querySelector("button");
const inner = document.getElementById("inner");

document.addEventListener("click", function (evt) {
  console.log(this);
  console.log(`hello from ${evt.target.id}`);
});

// btn.addEventListener("click", function (evt) {
//   console.log("Hello from the button");
//   console.log(evt);
//   evt.stopPropagation();
// });

// inner.addEventListener("click", function () {
//   console.log("Hello from inner");
// });
