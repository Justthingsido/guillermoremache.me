//
// $(document).ready(function(){
//      $('.mobile-nav-toggle').click(function(){
//           if($('.mobile-nav').hasClass('is-open')){
//               $('.mobile-nav').removeClass('is-open');
//         }
//         else {
//           $('.mobile-nav').addClass('is-open');
//         };
//      });
//
// });
//
//
//mobile-nav toggle
//
// $('nav.site-nav a').click(function() {
//   $('nav.site-nav a').removeClass('current');
//   $(this).addClass('current');
// });


//smotth transition to sctions when links in header are clicked


$(document).ready(function () {
		$(document).on("scroll", onScroll);

		$('nav.site-nav a[href^="#"], .mobile-nav a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('nav.site-nav .tag, .mobile-nav .tag').each(function () {
				$(this).removeClass('current');
			})
			$(this).addClass('current');

			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 800, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
  //
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('nav.site-nav .tag').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('nav.site-nav .tag').removeClass("current");
				currentLink.addClass("current");
			}
			else{
				currentLink.removeClass("current");
			}
		});
	}


	// ------------------------------------
	// mosue-scroll

	(function() {
		var delay = false;

		$(document).on('mousewheel DOMMouseScroll', function(event) {
			event.preventDefault();
			if(delay) return;

			delay = true;
			setTimeout(function(){delay = false},200)

			var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

			var a = document.getElementsByTagName('section');
			if(wd < 0) {
				for(var i = 0 ; i < a.length ; i++) {
					var t = a[i].getClientRects()[0].top;
					if(t >= 40) break;
				}
			}
			else {
				for(var i = a.length-1 ; i >= 0 ; i--) {
					var t = a[i].getClientRects()[0].top;
					if(t < -20) break;
				}
			}

				$('html,body').animate({
					scrollTop: a[i].offsetTop
			});

		});
	})();


$(document).ready(function(){
  var $nav = $(".mobile-nav");
  $('.mobile-nav-toggle').click(function(show){
    show.stopPropagation();
    $nav.slideToggle(700); //or .site-nav / .mobile-nav
  });

  $(document).click(function () { // you don't need the else part to fadeout
       if ($nav.is(":visible")) {
           $nav.fadeOut(700);
       }
    });
});


//read_more for experience Section
$(function() { /* to make sure the script runs after page load */

      $('li.read_more').click(function(event) { /* find all a.read_more elements and bind the following code to them */
        event.preventDefault(); /* prevent the a from changing the url */
				$(this).hide(); /* hide the read more button */
				$(this).parents('.col-content').find('.more_text').show(100); /* show the .more_text span */
      });
});

var isShowing = false;
$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        // alert("Show Footer");
        $('.copyright').addClass("copyshow");
        isShowing = true;

    } else if (isShowing === true && $(window).scrollTop() + $(window).height() <= $(document).height() * 0.9) {
        // alert("Hide Footer");
        $('.copyright').removeClass("copyshow");
        isShowing = false;
    }
});
