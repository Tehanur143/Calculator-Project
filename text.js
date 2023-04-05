// IIFE

(function () {
  // Targetting the screen has-class-screen

  let screen = document.querySelector(".screen");
  let button = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");
  // console.log(screen);
  console.log(button);
  // console.log(clear);
  // console.log(equal);

  // First Functionality
  button.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let userInput = e.target.dataset.num;
      screen.value += userInput;
    });
  });
})();
