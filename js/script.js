$(document).ready(function(){
    $('.articles-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            }
          }
        ],
        zIndex: 1,
        dots: false,
        nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        prevArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-left"></i></button>'
      });
})


const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
  const searchBlock = document.querySelector(".search-wrapper-content");

  searchBlock.classList.toggle("_active");
})


const iconMenu = document.querySelector(".menu-icon");
const mobileMenuBlock = document.querySelector(".mobile-menu")

if (iconMenu) {
  
  iconMenu.addEventListener("click", function() {
    iconMenu.classList.toggle("_active");
    mobileMenuBlock.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  })
}