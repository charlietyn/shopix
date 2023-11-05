import {createApp} from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import {router} from "./core/router"
import {createPinia} from "pinia"
import {shopStore} from "./core/store/shop.store"
import PrimeVue from "primevue/config"
import 'primevue/resources/themes/lara-light-teal/theme.css'
import {watch} from "vue"
import {toReactive} from "@vueuse/core"
import ToastService from 'primevue/toastservice';
import Toast from "primevue/toast";


const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.use(ToastService).component("Toast", Toast);
app.use(createPinia())
const shop = shopStore()
router.beforeEach((to, from) => {
    shop.show_search=to.path.includes('category')
    return true
})
shop.construct()
watch(toReactive(shop.cart), shop.onCartChange);
app.mount('#app')
