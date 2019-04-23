(function() {

	const block1 = {

		// тестовая функция
		test: function() {
			console.log('block-1');
			$('.block2').css({'color': 'green'});
		},

		// инит блока
		init: function() {
			block1.test();

			return false;
		}
	}
	
	block1.init();

})();
