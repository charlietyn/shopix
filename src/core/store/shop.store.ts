import {defineStore} from "pinia"
import axios_api from "../axios/axiosInstance"
import {useAxiosFetch} from "../axios/useAxiosFetch"
import {computed, reactive, ref} from "vue"

export const shopStore = defineStore('shop', {
    state: () => ({
        products: reactive([]) as any[],
        cart: reactive([]) as any[],
        favorite: [] as any[],
        filter: 'All',
        loadingCategories: ref(true),
        loadingProducts: ref(true),
        categories: reactive([]) as any[],
        page: ref('Home'),
        show_search: ref(true),
    }),
    getters: {
        categories_list(state) {
            return state.categories
        },
        get_best_products(state) {
            return computed(() => {
                return state.products.sort((a:any, b:any) => {
                    return a.rating.rate - b.rating.rate
                }).slice(0, 8)
            })
        },
        countCart(state) {
            return computed(() => {
                return state.cart.length
            })
        },
        cartArray(state) {
            return computed(() => {
                return state.cart
            })
        }
    },
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        construct() {
            this.loadProducts()
            this.loadCategories()
            if (localStorage.getItem('cart'))
                this.cart = JSON.parse(localStorage.getItem('cart') as string)
        },
        detailsCategory() {
            return this.categories.map((e) => {
                return {title: e, count: this.findProductByCategoryAll(e).length}
            })
        },
        loadCategories() {
            const {onResult} = useAxiosFetch(
                axios_api,
                {url: 'products/categories', method: 'get'},
                {}
            )
            onResult((result:any) => {
                this.categories = result.data
                this.loadingCategories = false
            })
        },
        loadProducts() {
            const {onResult} = useAxiosFetch(
                axios_api,
                {url: 'products', method: 'get'},
                {}
            )
            onResult((result:any) => {
                this.products = result.data
                this.loadingProducts = false
            })
        },
        findProduct(id:any) {
            return this.products.find(el => el.id == id)
        },
        findProductByCategory(category:string) {
            return this.products.filter(el => (el.category == category)).slice(0, 4)
        },
        findProductByCategoryAll(category = 'all', name = '') {
            return this.products.filter(el => {
                return category == 'all' ? (el.title.toLowerCase().includes(name.toLowerCase())) : (el.category == category && el.title.toLowerCase().includes(name.toLowerCase()))
            })
        },
        addCart(product:any, quantity = 1) {
            let pos = -1
            const found = this.cart.find((e, index) => {
                pos = index
                return product.id == e.id
            })
            if (!found)
                this.cart.push({...product, ...{quantity: quantity}})
            else {
                this.cart[pos].quantity += quantity
            }
        },

        total() {
            return Math.round(this.cart.map((e:any) => e.price * e.quantity).reduce((a:any, b:any) => a + b, 0) * 100) / 100
        },
        deleteFromCart(index:number) {
            this.cart.splice(index, 1)
        },
        onCartChange() {
            localStorage.setItem('cart', JSON.stringify(this.cart))
            this.cart = JSON.parse(localStorage.getItem('cart') as string)
        }
    },
})

