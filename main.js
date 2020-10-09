var openBtn = document.getElementById("open-modal")
var closeBtn = document.getElementById("close-modal")
var overlay = document.getElementById("overlay")

openBtn.addEventListener("click", function(){
    overlay.style.display = "block";
})

closeBtn.addEventListener("click", function(){
    overlay.style.display = "none";
})