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
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let userInput = e.target.dataset.num;
      screen.value += userInput;
    })
  })

  // Second Functionality:Equal Button
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
      console.log("equal button clicked");
    } else {
      // let calculatedResult = eval("2+5+3");
      // console.log(calculatedResult);
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })

  // Third Functionality : clear Screen

  clearInterval.addEventListener("click", function (e) {
    screen.value = "";
    // console.log("Clear button clicked")
  });
})();
