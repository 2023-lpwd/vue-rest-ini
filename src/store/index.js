import { createStore } from 'vuex'

export default createStore({
	state: {
		products: []
	},
	mutations: {
		add (state, product) {
			// Check if product is already in state.product
			const stateProduct = state.products.find(item => product.id === item.id)
			if (!stateProduct) {
				// List all product object keys and add quantity key
				state.products.push({ ...product, quantity: 1 })
			} else {
				// stateProduct already exist in cart -> Increase quantity
				stateProduct.quantity++
			}
		},
		remove (state, id) {
			const indexToDelete = state.products.findIndex(product => product.id === id)
			state.products.splice(indexToDelete, 1)
		}
	}
})
