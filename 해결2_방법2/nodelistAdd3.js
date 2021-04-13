
const toggles = document.querySelectorAll(".toggle");
const toggleBtns = document.querySelectorAll(".toggle_btn");
const arrayToggleBtns = Array.from(toggleBtns);

function addEventListenerList( ){
   toggleBtns.forEach( btn => {
     btn.addEventListener("click", function( ){ 
       const index = arrayToggleBtns.indexOf(btn); 
       toggles[index].classList.toggle("on");
       })
  })        
;} 
addEventListenerList( );
