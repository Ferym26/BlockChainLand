BlockChain.form = {

	formValidation: function() {
		$('.bv-form').bootstrapValidator();

		Inputmask({
			oncomplete: function() {
				$('.bv-form').data('bootstrapValidator').updateStatus($(this).attr('name'), 'VALID', null);
			},
			onincomplete: function() {
				$('.bv-form').data('bootstrapValidator').updateStatus($(this).attr('name'), 'INVALID', null);
			},
			onKeyValidation: function() {
				$('.bv-form').data('bootstrapValidator').updateStatus($(this).attr('name'), 'NOT_VALIDATED', null);
			}
		}).mask(document.querySelectorAll("input[type='tel']"));
	},
	
	init: function() {
		this.formValidation();
	}
}

BlockChain.form.init();

