import { getGoods } from './getGoods';
import { cart } from './shoppingCart';
import { openModal, closeModal } from './handleModal';
import { renderCards } from './renderCards';
import filterCards from './filterCards';
import smoothScroll from './smoothScroll.js';

const closeModalBtn = document.querySelector('.modal-close'),
	modalCart = document.querySelector('#modal-cart');

const clickListener = () => {
	document.addEventListener('click', e => {
		const target = e.target;
		// console.log('target: ', target);
		//open/close cart
		if (target.closest('.button-cart')) openModal();
		if (target === closeModalBtn || target === modalCart) closeModal();
		//scroll links
		if (target.closest('.scroll-link') || target.matches('.footer-menu-link')) {
			e.preventDefault();
			// const id = target.parentNode.getAttribute('href');
			smoothScroll();
		}
		//view all
		if (target.closest('.view-all')) {
			e.preventDefault();
			smoothScroll('#body');
			getGoods().then(renderCards);
		}
		//navigation
		if (target.matches('.navigation-link')) {
			e.preventDefault();
			const field = target.dataset.field,
				value = target.textContent;
			field ? filterCards(field, value) : getGoods().then(renderCards);
		}
		//goods cart items
		if (target.closest('.cart-item')) {
			const targetId = target.closest('.cart-item').dataset.id;
			(target.matches('.cart-btn-delete')) ? cart.deleteGood(targetId) :
				(target.matches('.cart-btn-plus')) ? cart.plusGood(targetId) :
					cart.minusGood(targetId);
		}
		//add to cart
		if (target.closest('.add-to-cart')) {
			const targetId = target.closest('.add-to-cart').dataset.id;
			cart.addCartGoods(targetId);
		}
		//clear cart
		if (target.closest('.btn-clear-cart')) {
			closeModal();
			cart.clearCart();
		}
	});
};
export default clickListener;

