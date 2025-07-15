const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

window.onload = () => {
    OpeningAnimation();
};
function OpeningAnimation(){
   setTimeout(() =>{
        document.querySelector('.opening-animation').style.top = "-100%";
    },3000)
}

function FixedAnimation(){
    var elemc = document.querySelector(".elem-container");
    var fix = document.querySelector(".fixed-image");
    elemc.addEventListener("mouseenter",function(){
        fix.style.display = "block";
    })
    elemc.addEventListener("mouseleave",function(){
        fix.style.display = "none";
    })

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var image = e.getAttribute("data-image");
            fix.style.backgroundImage = `url(${image})`;
        })
    })
}


function BoxAnimation(){
    var heading = document.querySelectorAll(".heading");
    var description = document.getElementById("desbox");
    var imagebox = document.querySelector(".image-side");

    heading.forEach(function(h2){
        if (h2.classList.contains("active")) {
                const contentDiv = h2.closest(".content");
                const imageUrl = contentDiv.getAttribute("data-image");
                const paragraph = h2.nextElementSibling.textContent;
                description.textContent = paragraph;
                description.style.display = "block";
                imagebox.style.backgroundImage = `url(${imageUrl})`;
            } 
    })
 
    heading.forEach(function(h2){
        h2.addEventListener("click",function(){
            heading.forEach(h2 => h2.classList.remove("active")); 
            h2.classList.add("active"); 

            if (h2.classList.contains("active")) {
                const contentDiv = h2.closest(".content");
                const imageUrl = contentDiv.getAttribute("data-image");
                const paragraph = h2.nextElementSibling.textContent;
                description.textContent = paragraph;
                description.style.display = "block";
                imagebox.style.backgroundImage = `url(${imageUrl})`;
            } 
        })
    })
}

function SwiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }

    });
}

FixedAnimation()
BoxAnimation()
SwiperAnimation()