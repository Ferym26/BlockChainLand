BlockChain.sliders.sliderMain = {
	
	slider: $('.js_slider-main'),
	
	sliderRun: function() {
		if (this.slider.length > 0 && $.fn.slick) {
			this.slider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: true,
				dots: true,
				lazyLoad: "anticipated",
			});
			// $(".slider-article__arrow--next").on("click", function () {
			// 	sliderArticleMain.slick("slickNext")
			// });
			// $(".slider-article__arrow--prev").on("click", function () {
			// 	sliderArticleMain.slick("slickPrev")
			// });
		}
	
	},
	
	init: function() {
		this.sliderRun();
	}
}

BlockChain.sliders.sliderMain.init();