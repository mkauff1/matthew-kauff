"use strict";
const logoIntro = document.querySelector(".logo-intro");

var typed = new Typed(".typing",{
    strings:["Full Stack Web Developer ","Graphic Designer ","Codeup student " ],
    typeSpeed:120,
    BackSpeed:40,
    loop:true
})

logoIntro.addEventListener('click', () =>{
    document.body.classList.toggle("intro-refresh")
})

//var loader = document.getElementById("preloader");

//window.addEventListener("load", function() {
//    loader.style.display = "none";
//});

logoJ(){
    var loader = document.getElementById("preloader");
    var loading = 0;
    var id = setInterval(loads, 20);

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
};

