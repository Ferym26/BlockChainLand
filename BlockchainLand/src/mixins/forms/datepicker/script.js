(function() {

	// Datepicker

	var pageDatePicker = $('.datepicker');
		if (pageDatePicker.length > 0) {
			pageDatePicker.datepicker({
				language: 'ru',
				format: 'dd.mm.yyyy',
				todayHighlight: true
			});
		}
})();