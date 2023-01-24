import { createStore } from 'vuex'

export default createStore({
	state: {
		products: JSON.parse(localStorage.getItem('cart')) || []
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
			localStorage.setItem('cart', JSON.stringify(state.products))
		},
		remove (state, id) {
			// We need to find index of product we want to delete
			const indexToDelete = state.products.findIndex(product => product.id === id)
			// Delete 1 item from index
			state.products.splice(indexToDelete, 1)
			// Synchronize store & localStorage
			localStorage.setItem('cart', JSON.stringify(state.products))
		},
		updateQuantity (state, { id, quantity }) {
			if (quantity <= 0) return
			const stateProduct = state.products.find(item => id === item.id)
			if (stateProduct) {
				stateProduct.quantity = quantity
			}
			// Synchronize store & localStorage
			localStorage.setItem('cart', JSON.stringify(state.products))
		},
		emptyCart (state) {
			state.products = []
			localStorage.setItem('cart', JSON.stringify(state.products))
		}
	}
})
