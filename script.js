"use strict";

const btnShare = document.querySelector(".arrow");
const beforeClick = document.querySelector(".before");
const afterClick = document.querySelector(".after");
const body = document.querySelector("body");
const arrow = document.querySelector(".arrw");

btnShare.addEventListener("click", function () {
  if (screen.width > 1350) {
    afterClick.classList.toggle("hidden");
    if (!afterClick.classList.contains("hidden")) {
      btnShare.style.backgroundColor = "hsl(214, 17%, 51%)";
      arrow.style.filter = "brightness(2.5)";
    } else {
      arrow.style.filter = "brightness(1)";
      btnShare.style.backgroundColor = "hsl(210, 46%, 95%)";
    }
  } else if (screen.width < 500) {
    afterClick.classList.toggle("hidden");
    if (!afterClick.classList.contains("hidden")) {
      beforeClick.classList.toggle("hidden");
      document.querySelector(".one-line").classList.add("bc");
      document.querySelector(".arrw").style.filter = "brightness(3)";
      btnShare.style.backgroundColor = "hsl(214, 17%, 51%)";
    } else {
      beforeClick.classList.remove("hidden");
      document.querySelector(".one-line").classList.remove("bc");
      document.querySelector(".arrw").style.filter = "brightness(1)";
      btnShare.style.backgroundColor = "hsl(210, 46%, 95%)";

    }
  }
});

// if (screen.width + "px" >= "1366" + "px") {
//   btnShare.addEventListener("click", function () {
//     afterClick.classList.toggle("hidden");
//     if (!afterClick.classList.contains("hidden")) {
//       document.querySelector(".arrw").style.filter = "brightness(3)";
//       btnShare.style.backgroundColor = "hsl(214, 17%, 51%)";
//     } else {
//       document.querySelector(".arrw").style.filter = "brightness(1)";
//       btnShare.style.backgroundColor = "hsl(210, 46%, 95%)";
//     }
//   });
// } else {
//   btnShare.addEventListener("click", function () {
//     console.log("15psx");
//   });
// }
// btnShare.addEventListener("click", function () {
//   // afterClick.classList.remove("hidden");
//   // beforeClick.classList.toggle("hidden");
//   // afterClick.classList.toggle("hidden");

//   if (afterClick.classList.contains("hidden")) {
//     document.querySelector(".arrw").style.filter = "brightness(1)";
//     btnShare.style.backgroundColor = "hsl(210, 46%, 95%)";
//     beforeClick.classList.add("hidden");
//     afterClick.classList.remove("hidden");
//   } else {
//     document.querySelector(".arrw").style.filter = "brightness(3)";
//     document.querySelector(".one-line").classList.add("bc");
//     beforeClick.classList.remove("hidden");
//     afterClick.classList.add("hidden");
//     btnShare.style.backgroundColor = "hsl(214, 17%, 51%)";
//   }

//   // if (screen.width + "px" >= "1366px") {
//   //   beforeClick.classList.remove("hidden");
//   //   console.log(false);
//   // }
// });
