const maskName = nameInput => {
	document.body.addEventListener('input', e => {
		if (e.target.name !== nameInput) {
			return;
		} else {
			e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ-\s]/g, '');
		}
	});
};
export default maskName;
