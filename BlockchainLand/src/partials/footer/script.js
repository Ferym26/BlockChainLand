BlockChain.UI.footer = {
	scrollTop: function() {
		//прокрутка страницы вверх
		$('.js_scrollTop').click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, {
				duration: 1000,
				easing: "swing"
				});
			return false;
		});
	},
	init: function() {
		this.scrollTop();
	}
}

BlockChain.UI.footer.init();