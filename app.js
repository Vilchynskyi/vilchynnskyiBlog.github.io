// show contact form

let sendMsgButton = document.querySelector(".contact_btn")
let contactForm = document.querySelector(".contact_form")


sendMsgButton.addEventListener("click", function() {
    contactForm.classList.add("show")
    sendMsgButton.classList.add("hide")
})


// slider 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000,
        }
    );
});