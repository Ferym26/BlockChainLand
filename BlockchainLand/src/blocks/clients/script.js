BlockChain.sliders.clients = {
	
	slider: $('.js_clients-slider'),
	slide: $('.js_clients-slider .clients__slider-item:not(".slick-cloned")'),
	
	sliderRun: function() {
		if (this.slider.length > 0 && $.fn.slick) {
			this.slider.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 3000,
				arrows: false,
				dots: false,
			});
		}
	
	},

	sliderNav: function() {
		if (this.slide.length > 4) {
			$('.clients__slider-nav').show();
		}
		$(".clients__slider-nav-arrow--next").on("click", function () {
			$('.js_slider-aiml').slick("slickNext")
		});
		$(".clients__slider-nav-arrow--prev").on("click", function () {
			$('.js_slider-aiml').slick("slickPrev")
		});
	},
	
	init: function() {
		this.sliderRun();
		this.sliderNav();
	}
}

BlockChain.sliders.clients.init();