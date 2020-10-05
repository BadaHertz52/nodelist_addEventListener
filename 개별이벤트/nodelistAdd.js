const toggles = document.querySelectorAll(".toggle");
const toggleBtns = document.querySelectorAll(".toggle_btn");

function addEventListenerList( ){
   for (let i = 0; i < toggleBtns.length ; i++ ) {
    const btn=toggleBtns[i] ; 
    const box =toggles[i];
    console.log(btn,box);
    console.log(box.classList);
    btn.addEventListener("click", function(){box.classList.toggle("on");}) ;
     
 
     ;} }
addEventListenerList( );


