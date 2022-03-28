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
