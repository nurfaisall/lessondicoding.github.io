let widthImage = document.querySelector("#navbar");

console.log(widthImage)

let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 10000);

document.getElementById("next").addEventListener("click", function naik() {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  console.log(counter);
  if (counter > 4) {
    counter = 1;
  }
});

document.getElementById("previous").addEventListener("click", function turun() {
  document.getElementById("radio" + counter).checked = true;
  counter = counter - 1;
  if (counter < 1) {
    counter = 4;
  }
});
