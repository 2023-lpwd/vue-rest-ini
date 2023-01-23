import { createStore } from 'vuex'

export default createStore({
	state: {
		products: []
	},
	mutations: {
		add (state, product) {
			state.products.push(product)
		},
		remove (state, id) {
			const indexToDelete = state.products.findIndex(product => product.id === id)
			state.products.splice(indexToDelete, 1)
		}
	}
})
