BlockChain.sliders.sliderAIML = {
	
	slider: $('.js_slider-aiml'),
	
	sliderRun: function() {
		if (this.slider.length > 0 && $.fn.slick) {
			this.slider.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 3000,
				arrows: false,
				dots: false,
			});
			$(".aiml__slider-nav-arrow--next").on("click", function () {
				$('.js_slider-aiml').slick("slickNext")
			});
			$(".aiml__slider-nav-arrow--prev").on("click", function () {
				$('.js_slider-aiml').slick("slickPrev")
			});
		}
	
	},
	
	init: function() {
		this.sliderRun();
	}
}

BlockChain.sliders.sliderAIML.init();