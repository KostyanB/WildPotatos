import { cart } from './shoppingCart';
const modalCart = document.querySelector('#modal-cart');
// open cart
export const openModal = () => {
	cart.renderCart();
	modalCart.classList.add('show');
};
// close cart
export const closeModal = () => modalCart.classList.remove('show');