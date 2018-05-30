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
  function onKeydownHandler(e){
    if (codes[index] === e.key) {
      alert('')
      index++
     
    }
  }
  document.body.addEventListener("")
}
