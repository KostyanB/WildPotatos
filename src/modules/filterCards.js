import { getGoods } from "./getGoods";
import { renderCards } from "./renderCards";

// fiter of goods
const filterCards = (field, value) => {
	getGoods()
		.then(data => data.filter(good => good[field] === value))
		.then(renderCards);
};
export default filterCards;
