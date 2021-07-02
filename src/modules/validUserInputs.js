
const validUserInputs = formData => {
	const correctBase = {
		correctName: false,
		correctTel: false,
	};
	for (const [name, value] of formData) {
		if (name === 'nameCustomer') {
			correctBase.correctName = (value === '' || value.length < 3) ? false : true;
		}
		if (name === 'phoneCustomer') {
			const corrNum = value.replace(/[\s\+\(\)-]*/g, '');
			correctBase.correctTel = (corrNum.length < 11) ? false : true;
		}
	}
	return Object.values(correctBase).every(item => item);
};
export default validUserInputs;
