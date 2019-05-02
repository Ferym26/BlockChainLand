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

	function animations() {
		let appArea = new TimelineMax({paused: true});
		let anim_appArea = appArea
			.addLabel("start", "+=0")
			.from('.app-area__title', 0.6, {
				x: -150,
				opacity: 0
			})
			.staggerFrom(".app-area__slider-marker-item", 0.8, {
				y: 80,
				ease: Expo.easeOut,
				delay: 0,
				opacity: 0
			}, 0.15)
			.from('.icon-energo .body', 0.3, {
				y: 100,
				opacity: 0
			}, "start+=0.7")
			.from('.icon-energo .inner', 0.3, {
				opacity: 0
			}, "start+=1.2")
			.from('.icon-energo .frame1', 0.3, {
				y: 20,
				opacity: 0
			}, "start+=1.4")
			.from('.icon-energo .frame2', 0.3, {
				y: 20,
				opacity: 0
			}, "start+=1.7");
		$(".app-area").waypoint(function () {
			anim_appArea.resume();
		}, {
			offset: '82%'
		});
	
		let aiml = new TimelineMax({paused: true});
		let anim_aiml = aiml
			.from('.aiml__title-text', 0.6, {
				x: -200,
				opacity: 0
			})
			.from('.aiml__slider-nav', 0.6, {
				x: -200,
				opacity: 0
			}, '-=0.6')
			.from('.aiml__title-descr', 0.6, {
				x: 200,
				opacity: 0
			}, '-=0.6')
			.from(".aiml__slider", 1, {
				x: 200,
				opacity: 0
			});
		$(".aiml").waypoint(function () {
			anim_aiml.resume();
		}, {
			offset: '85%'
		});
	
		let blockchain = new TimelineMax({paused: true});
		let anim_blockchain = blockchain
			.from(".blockchain", 1.7, {
				x: -300,
				ease: Expo.easeOut,
				delay: 0,
				opacity: 0
			}, 0);
	
		$(".blockchain").waypoint(function () {
			anim_blockchain.resume();
		}, {
			offset: '85%'
		});
	
		let map = new TimelineMax({paused: true});
		let anim_map = map
			.from(".map", 1.7, {
				x: 300,
				ease: Expo.easeOut,
				delay: 0,
				opacity: 0
			}, 0);
	
		$(".map").waypoint(function () {
			anim_map.resume();
		}, {
			offset: '85%'
		});
	
		let clients = new TimelineMax({paused: true});
		let anim_clients = clients
			.from(".clients__title-text", .6, {
				x: -200,
				opacity: 0
			})
			.from(".clients__descr", .6, {
				x: 200,
				opacity: 0
			}, '-=0.6');
	
		$(".clients").waypoint(function () {
			anim_clients.resume();
		}, {
			offset: '85%'
		});
	}

	if ($(window).width() > 1023) {
		animations();
	}


})();