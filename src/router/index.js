import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoryView from "@/views/CategoryView.vue"
import ProductView from "@/views/ProductView.vue"
import ProductsView from "@/views/ProductsView.vue"
import CartView from "@/views/CartView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:category',
      name: 'category-category',
      component: CategoryView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/products/:product',
      name: 'products-product',
      component: ProductView
    }
  ]
})

export default router
