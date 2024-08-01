$(document).ready(function () {
    $(".slider-default").owlCarousel({
      loop: true,
      nav: true,
      autoWidth:true,
      dots: false,
      margin:30,
      navText: ["<img src='./assets/icons/slider-arrow-left.svg'>","<img src='./assets/icons/slider-arrow-right.svg'>"],
      responsive: {
        
        576: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });
  });

  