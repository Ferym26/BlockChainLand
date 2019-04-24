BlockChain.UI.landToggler = {
	item: $('.lang-toggler'),
	toggle: function() {
		this.item.on('click', function() {
			$(this).toggleClass('open');
		})
	},
	init: function() {
		this.toggle();
	}
}

BlockChain.UI.landToggler.init();