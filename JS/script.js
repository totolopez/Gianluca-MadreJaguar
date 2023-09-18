
let carousel = document.querySelector(".carousel");
let numSlides = document.querySelector("ul li").length;
let slideIndex = 0;

carousel.querySelector(".carousel-control-prev").addEventListener("click", function(){
    slideIndex--;
    if(slideIndex < 0) {
        slideIndex = numSlides -1;
    }
    changeSlide(slideIndex);
});

carousel.querySelector(".carousel-control-next").addEventListener("click", function(){
    slideIndex++;
    if(slideIndex > numSlides -1){
        slideIndex = 0;
    }
    changeSlide(slideIndex);
});

function changeSlide(slideIndex) {
    let slide = carousel.querySelector("ul li:nth-child(" + (slideIndex + 1) + ")");
    carousel.querySelectorAll("ul li").forEach(function(slide){
        slide.style.display = "none";
    });
    slide.style.display = "block";
}

setInterval(function(){
    changeSlide(slideIndex);
}, 1000);

