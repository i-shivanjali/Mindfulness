$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Adjust as needed
      arrows: false,
            infinite: true, // Enable continuous scrolling
            dots: true, // Show navigation dots
            draggable: true // Enable cursor access to slide images
    //   prevArrow: '<button class="slick-prev">❮</button>',
    //   nextArrow: '<button class="slick-next">❯</button>',
    });
  });

            