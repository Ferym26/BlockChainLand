BlockChain.sliders.sliderAppArea = {

	slider: $('.js_slider-arr-area'),

	sliderRun: function () {
		if (this.slider.length > 0 && $.fn.slick) {
			this.slider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 3000,
				arrows: false,
				dots: false,
				lazyLoad: "anticipated",
				responsive: [
					{
						breakpoint: 768,
						settings: {
							adaptiveHeight: true,
						}
					}, 
				]
			});
		}
	},

	sliderNav: function () {
		$(".app-area__slider-nav-arrow--next").on("click", function () {
			$('.js_slider-arr-area').slick("slickNext")
		});
		$(".app-area__slider-nav-arrow--prev").on("click", function () {
			$('.js_slider-arr-area').slick("slickPrev")
		});
	},

	slideMarkers: function () {
		let markers = $('.app-area__slider-marker-item');
		this.slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
			markers.removeClass('active');
			markers.each(function (i, item) {
				if ($(this).data('active') == currentSlide) {
					$(this).addClass('active');
				}
			});
		});

		markers.on('click', function () {
			markers.removeClass('active');
			$(this).addClass('active');
			$('.js_slider-arr-area').slick('slickGoTo', $(this).data('active'));
		})
	},

	slideMarkersMob: function () {
		let markers = $('.jq-selectbox__dropdown li');
		this.slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
			markers.removeClass('active');
			markers.each(function (i, item) {
				if ($(this).data('active') == currentSlide) {
					$(this).addClass('active');
				}
			});
		});

		$($('.custom-select')[0]).change(function () {
			$('.js_slider-arr-area').slick('slickGoTo', $(this).find('li.selected').data('active'));
		})
	},

	init: function () {
		this.sliderNav();
		this.slideMarkers();
		if ($(window).width() < 768) {
			this.slideMarkersMob();
		}
		this.sliderRun();
	}
}

BlockChain.sliders.sliderAppArea.init();
