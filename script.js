"use strict";
const logoIntro = document.querySelector(".logo-intro");

var typed = new Typed(".typing",{
    strings:["Veteran","Youth Pastor","Husband","Mentor","Father"],
    typeSpeed:120,
    BackSpeed:80,
    loop:true
})

//logoIntro.addEventListener('click', () =>{
//    document.body.classList.toggle("intro-refresh")
//})

//var loader = document.getElementById("preloader");
/*
window.addEventListener("click", function logoJ(){
    var loader = document.getElementById("preloader");
    var loading = 0;
    var id = setInterval(loads, 1000);

    function loads() {
        if (loading == 0) {
            loader.classList.add('active');
        } else if (loading == 100) {
            clearInterval(id);
            window.open("index.html", "_self");
            loader.classList.remove('active');
        } else {
            loading = loading + 1;
            if (loading == 90) {
                loader.style.animation = "fadeout 1s ease";
            }
        }
    }
});
*/

//var loader = document.getElementById("preloader");
/*
$(window).load(function() {
    $(".preloader").delay(5000).fadeOut("slow");
    $("#overlayer").delay(5000).fadeOut("slow");
})
*/

/*
$(document).ready(function(){
    window.setTimeout('fadeout();', 2000);
});

function fadeout(){
    $('#loader').delay(1000).fadeOut('slow', function() {
        $('.notLoaded').removeClass('notLoaded');
    });
}
*/

