import './css/style.css';
import './css/bootstrap-grid.min.css';
import './css/swiper-bundle.min.css';
import clickListener from './modules/clickListener';
clickListener();
import { changeListener, submitListener } from './modules/otherListeners';
changeListener();
submitListener();
import maskPhone from './modules/maskPhone';
maskPhone('[name="phoneCustomer"]');
import maskName from './modules/maskName';
maskName('nameCustomer');
import Swiper from './modules/swiper-bundle.min.js';
new Swiper('.swiper-container', {
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});
