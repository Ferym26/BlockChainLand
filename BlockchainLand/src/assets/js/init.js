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
				x: -400,
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

		let appAreaIcon2 = new TimelineMax({paused: true});
		let anim_appAreaIcon2 = appAreaIcon2
			.addLabel("start", "+=0")
			.from('.app-area__slider-item .icon-ts .train', 0.6, {
				opacity: 0,
				delay: 0.3,
				x: -50
			})
			.from('.app-area__slider-item .icon-ts .train', 1, {
				repeat: -1,
				yoyo: true,
				y: -4,
				ease: Elastic.easeOut.config(1, 0.5),
			})
			.from('.app-area__slider-item .icon-ts .clowds', 2, {
				opacity: 0,
				x: -50,
				ease: Power2.easeOut,
			}, "start+=1");

		let appAreaIcon3 = new TimelineMax({paused: true});
		let anim_appAreaIcon3 = appAreaIcon3
			.addLabel("start", "+=0")
			.from('.app-area__slider-item .icon-eco .globus', 0.9, {
				opacity: 0,
				delay: 0.3,
				y: 80,
				ease: Power4.easeOut,
				scale: 0.7
			});

		let appAreaIcon4 = new TimelineMax({paused: true});
		let anim_appAreaIcon4 = appAreaIcon4
			.addLabel("start", "+=0")
			.staggerFrom('.app-area__slider-item .icon-city .windows path', 0.5, {
				delay: 0.3,
				opacity: 0
			}, 0.1)
			.staggerFrom('.app-area__slider-item .icon-city .roots path', 0.5, {
				strokeDasharray: 1e3,
				strokeDashoffset: 1e3,
				ease: Expo.easeIn
			}, 0.1, "start+=1");
		
		let appAreaIcon5 = new TimelineMax({paused: true});
		let anim_appAreaIcon5 = appAreaIcon5
			.addLabel("start", "+=0")
			.staggerFrom('.app-area__slider-item .icon-parking .waves path', 1.4, {
				delay: 0.3,
				y: 10,
				opacity: 0,
				repeat: -1,
			}, 0.1);
		
		let appAreaIcon6 = new TimelineMax({paused: true});
		let anim_appAreaIcon6 = appAreaIcon6
			.addLabel("start", "+=0")
			.fromTo('.app-area__slider-item .icon-gaz .pipe', 1, {
				delay: 0.3,
				scaleX: 1.2,
				transformOrigin: "50% 50%",
				repeat: -1,
				yoyo: true,
			}, {
				scaleX: 0.9,
				scaleY: 1.08,
				transformOrigin: "50% 50%",
				repeat: -1,
				yoyo: true,
			})
			.to('.app-area__slider-item .icon-gaz .arrow', 1, {
				transformOrigin: "9.305px 9.005px",
				rotation: 75,
				repeat: -1,
				yoyo: true,
			}, "start+=0")

		let appAreaIcon7 = new TimelineMax({paused: true});
		let anim_appAreaIcon7 = appAreaIcon7
			.addLabel("start", "+=0")
			.staggerTo('.app-area__slider-item .icon-fisk .gbuttons rect', 1, {
				delay: 0.3,
				y: 2,
				scaleX: 0.85,
				transformOrigin: "50% 50%",
				repeat: -1,
				yoyo: true,
			}, 0.5)
			.from('.app-area__slider-item .icon-fisk .gcheck', 2, {
				strokeDasharray: 200,
				strokeDashoffset: 200,
				repeat: -1,
			}, "start+=1")

		let appAreaIcon8 = new TimelineMax({paused: true});
		let anim_appAreaIcon8 = appAreaIcon8
			.addLabel("start", "+=0")
			.staggerFrom('.app-area__slider-item .icon-tax .col1 rect', 0.6, {
				delay: 0.3,
				opacity: 0,
			}, 0.15)
			.staggerFrom('.app-area__slider-item .icon-tax .col2 rect', 0.6, {
				opacity: 0,
			}, 0.1)
			.staggerFrom('.app-area__slider-item .icon-tax .col3 rect', 0.8, {
				opacity: 0,
			}, 0.08);

		let appAreaIcon9 = new TimelineMax({paused: true});
		let anim_appAreaIcon9 = appAreaIcon9
			.addLabel("start", "+=0")
			.from('.app-area__slider-item .icon-prognoz .lens', 1.6, {
				delay: 0.3,
				rotation: -30,
				repeat: -1,
				yoyo: true,
				transformOrigin: "35.65px 35.65px",
			});

		let appAreaIcon10 = new TimelineMax({paused: true});
		let anim_appAreaIcon10 = appAreaIcon10
			.addLabel("start", "+=0")
			.staggerFrom('.app-area__slider-item .icon-osv .body path', 0.5, {
				delay: 0.3,
				strokeDasharray: 200,
				strokeDashoffset: 200,
				ease: Expo.easeIn
			}, 0.3)
			.from('.app-area__slider-item .icon-osv .lighter', 0.5, {
				opacity: 0,
				repeat: -1,
				yoyo: true
			});
		
		// Запуск анимаций иконок при листании слайдера
		$('.js_slider-arr-area').on('afterChange', function (event, slick, currentSlide, nextSlide) {
			if (currentSlide == 1) {
				anim_appAreaIcon2.resume();
			}
			if (currentSlide == 2) {
				anim_appAreaIcon3.resume();
			}
			if (currentSlide == 3) {
				anim_appAreaIcon4.resume();
			}
			if (currentSlide == 4) {
				anim_appAreaIcon5.resume();
			}
			if (currentSlide == 5) {
				anim_appAreaIcon6.resume();
			}
			if (currentSlide == 6) {
				anim_appAreaIcon7.resume();
			}
			if (currentSlide == 7) {
				anim_appAreaIcon8.resume();
			}
			if (currentSlide == 8) {
				anim_appAreaIcon9.resume();
			}
			if (currentSlide == 9) {
				anim_appAreaIcon10.resume();
			}
		});
		


		let aiml = new TimelineMax({paused: true});
		let anim_aiml = aiml
			.from('.aiml__title-text', 0.6, {
				x: -400,
				opacity: 0
			})
			.from('.aiml__slider-nav', 0.6, {
				x: -400,
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
				x: -400,
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