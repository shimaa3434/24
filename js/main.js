$('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    speed: 1000,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
