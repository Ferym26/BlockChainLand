(function() {
	
	const vigetWrap = $('.pages-viget');
	const vigetBtn = $('.pages-viget__btn');

	vigetBtn.on('click', function() {
		vigetWrap.toggleClass('open');
	});

})();