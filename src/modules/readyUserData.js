import { cart } from './shoppingCart';
import sendUserData from './sendUserData';
import validUserInputs from './validUserInputs';
import { closeModal } from './handleModal';
import { modalForm } from './otherListeners';

//create data
const readyUserData = () => {
	const formData = new FormData(modalForm);
	if (validUserInputs(formData) && cart.getCountGoodsInCart()) {
		formData.append('order', JSON.stringify(cart.cartGoods));
		sendUserData(formData)
			.then(response => {
				if (!response.ok) {
					throw new Error(response.status);
				}
				alert('Заказ отправлен. С Вами свяжется менеджер');
				console.log(response.statusText);
			})
			.catch(err => {
				alert('Произошла ошибка, нам жаль. Повторите позже');
				console.error(err);
			})
			.finally(() => {
				closeModal();
				modalForm.reset();
				cart.clearCart();
			});
	} else {
		if (!cart.getCountGoodsInCart()) alert('Добавьте товары в корзину!');
		if (!validUserInputs(formData)) alert('Заполните поля правильно!');
	}
};
export default readyUserData;
