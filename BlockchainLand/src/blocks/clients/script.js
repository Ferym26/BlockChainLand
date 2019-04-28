BlockChain.sliders.clients = {
	
	slider: $('.js_clients-slider'),
	slide: $('.js_clients-slider .clients__slider-item:not(".slick-cloned")'),
	
	sliderRun: function() {
		if (this.slider.length > 0 && $.fn.slick) {
			this.slider.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: false,
				dots: false,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						}
					}, 
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					}, 
					{
						breakpoint: 450,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}, 
				]
			});
		}
	
	},

	sliderNav: function() {
		$('.clients__slider-nav').hide();
		if (this.slide.length > 4) {
			$('.clients__slider-nav').show();
		}
		$(".clients__slider-nav-arrow--next").on("click", function () {
			$('.js_clients-slider').slick("slickNext")
		});
		$(".clients__slider-nav-arrow--prev").on("click", function () {
			$('.js_clients-slider').slick("slickPrev")
		});
	},
	
	init: function() {
		this.sliderRun();
		this.sliderNav();
	}
}

BlockChain.sliders.clients.init();