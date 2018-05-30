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
  // your code here
  const f = function onKeydownHandler(e){
    if (codes[index] === e.key) {
      alert(e.key + " is pressed correctly")
      index++
     
    }
  }
  document.body.addEventListener(f)
}
