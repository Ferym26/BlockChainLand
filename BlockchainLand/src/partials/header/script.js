BlockChain.UI.header = {
	scrollTo: function() {
		let hamburger = $('.js_hamburger');
		// let overlay = $('.overlay');
		let mobMenu = $('.mob-menu');
		let windowHeight = $(window).height();
		$(".js_scrolTo").click(function() {
			let elemHeight = $($(this).attr("href")).height();
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top - 65 - ((windowHeight / 2) - (elemHeight / 2))
			}, {
				duration: 1000,
				easing: "swing"
			});

			setTimeout(function() {
				$('body').removeClass('open-mob');
				hamburger.removeClass('open');
				mobMenu.removeClass('open');
			}, 500);
			
		});
	},
	mobileMenu: function() {
		let hamburger = $('.js_hamburger');
		// let overlay = $('.overlay');
		let mobMenu = $('.mob-menu');

		hamburger.on('click', function() {
			$(this).toggleClass('open');
			$('body').toggleClass('open-mob');
			// overlay.toggleClass('open');
			mobMenu.toggleClass('open');
		});
	},
	init: function() {
		this.scrollTo();
		this.mobileMenu();
	}
}

BlockChain.UI.header.init();