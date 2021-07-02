const cart = {
	cartGoods: [],
	showCartCount() {
		const totalCount = this.cartGoods.reduce((sum, item) => {
			return sum + item.count;
		}, 0);
		cartCount.textContent = totalCount ? totalCount : '';
	},
	getCountGoodsInCart() {
		return this.cartGoods.length;
	},
	renderCart() {
		cartTableGoods.textContent = '';
		this.cartGoods.forEach(({ id, name, price, count }) => {
			const trGood = document.createElement('tr');
			trGood.className = 'cart-item';
			trGood.dataset.id = id;
			trGood.innerHTML = `
				<td>${name}</td>
				<td>${price}$</td>
				<td><button class="cart-btn-minus">-</button></td>
				<td class="cart-item-count">${count}</td>
				<td><button class="cart-btn-plus">+</button></td>
				<td>${price * count}$</td>
				<td><button class="cart-btn-delete">x</button></td>
			`;
			cartTableGoods.append(trGood);

		});
		const totalPrice = this.cartGoods.reduce((sum, item) => {
			return sum + (item.price * item.count);
		}, 0);
		cartTableTotal.textContent = `${totalPrice}$`;
		this.showCartCount();
	},
	addCartGoods(id) {
		const goodItem = this.cartGoods.find(item => item.id === id);
		goodItem ? this.plusGood(id) :
			getGoods()
				.then(data => data.find(item => item.id === id))
				.then(({ id, name, price }) => {
					this.cartGoods.push({ id, name, price, count: 1 });
					this.showCartCount();
				});
	},
	deleteGood(id) {
		this.cartGoods = this.cartGoods.filter(item => id !== item.id);
		this.renderCart();
	},
	minusGood(id) {
		for (const item of this.cartGoods ) {
			if (item.id === id) {
				item.count--;
				if (!item.count) this.deleteGood(id);
				break;
			}
		}
		this.renderCart();
	},
	plusGood(id) {
		for (const item of this.cartGoods ) {
			if(item.id === id) {
				item.count++;
				break;
			}
		}
		this.renderCart();
	},
	clearCart() {
		this.cartGoods.length = 0;
		this.renderCart();
	}
}