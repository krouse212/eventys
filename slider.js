$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    // center
    // mobileFirst: true,
    autoplay: true,
    variableWidth: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3
        }
      }
    ]
  });