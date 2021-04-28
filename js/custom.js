/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function() {
  $('.preloader').fadeOut(800); // set duration in brackets
});


/* navbar
------------------------------------------------*/
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    var x = window.matchMedia("(max-width: 560px)")
    responsiveMenu(x) // Call listener function at run time
    x.addListener(responsiveMenu)
    function responsiveMenu(x) {
      if (x.matches) {
          $(".brand").css("left", "20px");
          $(".brand").css("padding", "15px 0 0 0");
        if (scroll > 80) {
          $(".menu").css("height", "65px");
          $(".menu").css("background-color", "#fff");
          $(".menu").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.1)");
          $(".my-logo").css("max-width", "40px");
          $(".navbar-menu").css("padding-top", "25px");
        } else {
          $(".menu").css("height", "70px");
          $(".menu").css("background-color", "transparent");
          $(".menu").css("box-shadow", "none");
          $(".my-logo").css("max-width", "40px");
          $(".navbar-menu").css("padding-top", "35px");
        }
      } else {
        if (scroll > 80) {
          $(".menu").css("height", "70px");
          $(".menu").css("background-color", "#fff");
          $(".menu").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.1)");
          $(".my-logo").css("max-width", "48px");
          $(".brand").css("padding", "13px 0 0 0");
          $(".brand").css("left", "40px");
          $(".navbar-menu").css("padding-top", "25px");
        } else {
          $(".menu").css("height", "80px");
          $(".menu").css("background-color", "transparent");
          $(".menu").css("box-shadow", "none");
          $(".my-logo").css("max-width", "54px");
          $(".brand").css("padding", "30px 0 0 0");
          $(".brand").css("left", "40px");
          $(".navbar-menu").css("padding-top", "35px");
        }
      }
    }
  })
})


// Menu Toggle
$('.menu-toggle').on('click', function() {
  $('.mobile-menu').toggleClass('open')
  return false
})

$('.mobile-menu a').click(function(){
  $(".mobile-menu").toggleClass('open');
});

$(document).ready(function() {
  $('#menu-nav').click(function() {
    $(this).toggleClass('open');
  });
});

$(document).ready(function() {
  $('.mobile-menu a').click(function() {
    $('#menu-nav').toggleClass('open');
  });
});


// Smooth scrolling to section

$(document).ready(function() {

		$('#menu a[href*=#]').bind('click', function(e) {
        e.preventDefault();
				var target = $(this).attr("href");
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top - 60
				}, 500, function() {
				});
				return false;
		});

    $('.mobile-menu a[href*=#]').bind('click', function(e) {
				e.preventDefault();
				var target = $(this).attr("href");
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top - 50
				}, 500, function() {
				});
				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		$('section').each(function(i) {
				if ($(this).offset().top - 80 <= scrollDistance) {
						$('#menu a.active').removeClass('active');
						$('#menu a').eq(i).addClass('active');
				}
		});
});




/* Istope Portfolio
-----------------------------------------------*/
$(document).ready(function() {

  if ($('.iso-box-wrapper').length > 0) {

    var $container = $('.iso-box-wrapper'),
      $imgs = $('.iso-box img');

    $container.imagesLoaded(function() {

      $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
      });

      $imgs.load(function() {
        $container.isotope('reLayout');
      })

    });

    //filter items on button click

    $('.filter-wrapper li a').click(function() {

      var $this = $(this),
        filterValue = $this.attr('data-filter');

      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });

      // don't proceed if already selected

      if ($this.hasClass('selected')) {
        return false;
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

      return false;
    });

  }

});


/* Carousel
 -----------------------------------------------*/

 $(document).ready(function(){
   $('.slick-carousel').slick({
     arrows: true,
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     slidesToScroll: 1,
     prevArrow:'<div class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></div>',
 　  nextArrow:'<div class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></div>',
   });
 });


 /* Modal
  -----------------------------------------------*/

  // Get the modal
  var modal = document.getElementById("website-modal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("modal-image");
  img.onclick = function(){
    modal.style.display = "block";
  }

  // Get the <span> element that closes the modal
  var closeModal = document.getElementsByClassName("modal")[0];

  // When the user clicks on <span> (x), close the modal
  closeModal.onclick = function() {
    modal.style.display = "none";
  }




  /* wow
  -------------------------------*/
  $(document).ready(function() {
    new WOW({
      mobile: false
    }).init();

});
