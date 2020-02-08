var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: "arrow",
    },
    breakpoints: {

        540: {
          slidesPerView: 2
          
        }
      }
});

var menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", function () {
    console.log("клик")
})