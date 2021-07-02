import correctInputs from './correctInputs';
import readyUserData from './readyUserData';

// change inputs
export const changeListener = () => {
	document.addEventListener('change', e => {
		if (e.target.classList.contains('modal-input')) {
			correctInputs(e.target);
		} else {
			return;
		}
	});
};
// submit form
export const modalForm = document.querySelector('.modal-form');
export const submitListener = () => {
	modalForm.addEventListener('submit', e => {
		e.preventDefault();
		readyUserData();
	});
};
