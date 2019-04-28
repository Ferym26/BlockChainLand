const $window = $(window);
const $document = $(document);
const $body = $('body');

window.BlockChain = {};
window.BlockChain.UI = {};
window.BlockChain.sliders = {};

$document.ready(() => {


		// inits
		let init = require('./init.js');
	
		// Partials
		let header = require('../../partials/header/script.js');
		let footer = require('../../partials/footer/script.js');
	
		// Components
	
		// Blocks
		let sliderMain = require('../../blocks/sliders/slider-main/script.js');
		let appSlider = require('../../blocks/app-area/script.js');
		let aiml = require('../../blocks/aiml/script.js');
		let clients = require('../../blocks/clients/script.js');
		let formMain = require('../../blocks/form-main/script.js');
	
		// Mixins
		let landToggler = require('../../mixins/lang-toggler/script.js');
});