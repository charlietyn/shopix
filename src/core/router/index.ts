import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../../components/layout/ecommerce/pages/index.vue')
    },
    {
        path: '/product/:id',
        name: 'product',
        component: () => import('../../modules/products/pages/product.vue')
    },
    {
        path: '/category/:id',
        name: 'category',
        component: () => import('../../modules/categories/pages/categories.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../../modules/cart/pages/cart.vue')
    },

]
export const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true,
})

