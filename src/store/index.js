import { createStore } from 'vuex'

export default createStore({
	state: {
		products: []
	},
	mutations: {
		add (state, product) {
			state.products.push(product)
		}
	}
})
