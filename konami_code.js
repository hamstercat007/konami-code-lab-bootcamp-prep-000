const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;
function init() {
  document.body.addEventListener("keydown", function onKeydownHandler(e) {
    if (codes[index] === e.key) {
      console.log(e.key + " is pressed correctly")
      index++
    }
    alert("Well done")
  })
}