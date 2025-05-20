let  buttons = document.querySelectorAll(".button");
let body= document.querySelector("body");
buttons.forEach(function(btn){
  btn.addEventListener("click",function(e){
    let col= e.target.id;
    body.style.backgroundColor=col;
  })
});