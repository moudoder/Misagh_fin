$(document).ready(function () {
  new WOW().init();
  $(".scroll").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.questions-block').on('click', function() {
  	$(this).toggleClass('active');
  })

  function resizeInput() {
      $(this).attr('size', $(this).val().length);
  }


  let blocks = $('.catalog .hits-block');
  for (let i = blocks.length - 1; i >= 0; i--) {
    let block =  blocks[i];
    let slider = $(block).find('.catalog-block-slider');
    let arrow_prev = $(block).find('.catalog-block-arrow__prev');
    let arrow_next = $(block).find('.catalog-block-arrow__next');
    $(slider).slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      dots: true,
      prevArrow: $(arrow_prev),
      nextArrow: $(arrow_next),
    });
  }

  $('.catalog-modal__item').on('click', function() {
    let arr = $(this).parent('.catalog-modal');
    arr = $(arr).children('.catalog-modal__item');
    $(arr).removeClass('active');
    $(this).addClass('active');

    return false;
  })
  

  $('.first-screen-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1160,
          settings: {
            autoplay: false,
          }
        }
      ]
  });

  

  if ($(window).width() > 1160) {
    $('.first-screen-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        if ($('.slide-dark').hasClass('slick-current')) {
          $('.first-screen').addClass('white-h1');
        }
        else{
          $('.first-screen').removeClass('white-h1');
        }
    });
  }
  if ($(window).width() < 1160) {
    $('.benefits-block-2').insertAfter('.benefits-block-3')
       $('.first-screen-benefits').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true
       });

      $('.universities-block-last').unwrap();
  }
})

