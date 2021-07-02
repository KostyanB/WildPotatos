const correctInputs = target => {
	if (target.name === 'nameCustomer') {
		target.value = target.value.replace(/\s+/g, ' ');
		const nameData = target.value.trim().split(' ');
		let userName = '', baseName = '';
		nameData.forEach(item => {
			baseName += `${item.charAt(0).toUpperCase() + item.substring(1)} `;
			userName = baseName.trim();
		});
		target.value = (userName === ' ') ? '' : userName;
	} else if (target.name === 'phoneCustomer') {
		target.value = target.value.replace(/^\+\d{1}\s/g, '+7 ');
	} else {
		return;
	}
};
export default correctInputs;
