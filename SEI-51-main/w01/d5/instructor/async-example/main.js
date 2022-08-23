const lightSequence = [
  { color: "red", time: 3000 },
  { color: "yellow", time: 1000 },
  { color: "green", time: 2000 },
];

// lightEls = [
//   div#red,
//   div#green,
//   div#yellow
// ]

const lightEls = document.querySelectorAll("main > div");

let curLightIdx = 0;

function renderLight(cb) {
  lightEls.forEach((el) => (el.style.backgroundColor = "black"));
  lightEls[curLightIdx].style.backgroundColor =
    lightSequence[curLightIdx].color;
  setTimeout(cb, lightSequence[curLightIdx].time);
}

function renderNextLight() {
  debugger;
  renderLight(renderNextLight);
  curLightIdx = ++curLightIdx % 3;
}

renderNextLight();
