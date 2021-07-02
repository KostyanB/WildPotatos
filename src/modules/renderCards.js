import createCard  from './createCard';
const longGoodsList = document.querySelector('.long-goods-list');
// render
export const renderCards = data => {
	longGoodsList.textContent = ''; //clear goods list
	const cards = data.map(createCard);
	longGoodsList.append(...cards);
	document.body.classList.add('show-goods');
};