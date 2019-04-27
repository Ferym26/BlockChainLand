BlockChain.sliders.sliderAppArea = {
	
	slider: $('.js_slider-arr-area'),
	
	sliderRun: function() {
		if (this.slider.length > 0 && $.fn.slick) {
			this.slider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 3000,
				arrows: true,
				dots: true,
				lazyLoad: "anticipated",
			});
		}	
	},

	sliderNav: function() {
		$(".app-area__slider-nav-arrow--next").on("click", function () {
			$('.js_slider-arr-area').slick("slickNext")
		});
		$(".app-area__slider-nav-arrow--prev").on("click", function () {
			$('.js_slider-arr-area').slick("slickPrev")
		});
	},

	slideMarkers: function() {
		let markers = $('.app-area__slider-marker-item');
		this.slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
			markers.removeClass('active');
			markers.each(function(i, item) {
				if ($(this).data('active') == currentSlide) {
					$(this).addClass('active');
				}
			});
		});

		markers.on('click', function() {
			markers.removeClass('active');
			$(this).addClass('active');
			$('.js_slider-arr-area').slick('slickGoTo', $(this).data('active'));
		})
	},
	
	init: function() {
		this.sliderNav();
		this.slideMarkers();
		this.sliderRun();
	}
}

BlockChain.sliders.sliderAppArea.init();