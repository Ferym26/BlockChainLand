BlockChain.UI.landToggler = {
	item: $('.lang-toggler'),
	toggle: function() {
		this.item.on('click', function() {
			$(this).toggleClass('open');
		});
		$(document).on('click', function(e) {
			if (!$(e.target).closest(".lang-toggler").length) {
				$('.lang-toggler').removeClass('open');
			}
			e.stopPropagation();
		});
	},
	init: function() {
		this.toggle();
	}
}

BlockChain.UI.landToggler.init();