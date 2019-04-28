BlockChain.UI.header = {
	scrollTo: function() {
		$(".header__menu-link").click(function() {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top - 20
			}, {
				duration: 1000,
				easing: "swing"
			});
			return false;
		});
	},
	init: function() {
		this.scrollTo();
	}
}

BlockChain.UI.header.init();