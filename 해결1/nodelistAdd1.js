const $toggles = document.querySelectorAll(".toggle");
const toggleBtns = document.querySelectorAll(".toggle_btn");


function forEach () {toggleBtns.forEach(
  function(Btn) {
   Btn.addEventListener("click",function(){ Btn.classList.toggle("change")},false);
  }
);}

forEach();

