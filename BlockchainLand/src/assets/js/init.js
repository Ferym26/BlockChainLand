(function() {

	const $window = $(window);
	const $document = $(document);
	const $body = $('body');

	// svg sprites 
	svg4everybody();

	// Lazy load pics
	// let lazyPic = $('.lazy-pic');
	// if (lazyPic.length > 0) {
	// 	lazyPic.lazy({
	// 		beforeLoad: function (element) {
	// 			// let thumbImgCont = element.parents('.wrap');
	// 			// if (thumbImgCont.length > 0) {
	// 			// 	thumbImgCont.addClass('preloader');
	// 			// }
	// 		},
	// 		afterLoad: function (element) {
	// 			// let thumbImgCont = element.parents('.wrap');
	// 			// if (thumbImgCont.length > 0) {
	// 			// 	thumbImgCont.removeClass('preloader');
	// 			// }
	// 		}
	// 	});
	// }

	$('.custom-checkbox').styler();
	$('.custom-select').styler();

	//E-mail Ajax Send
	// $(".bv-form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

})();