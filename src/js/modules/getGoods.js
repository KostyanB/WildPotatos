// get goods from database
const checkGoods = () => {
	const data = [];
	return async () => {
		if(data.length) return data;
		const result = await fetch('db/db.json'); // wait + res
		if (!result.ok) throw `Ошибка БД ${result.status}`;
		data.push(...(await result.json()));
		return data
	};
};
const getGoods = checkGoods();