<template>
  <banner/>
  <categories/>
  <offers/>
  <products/>
</template>

<script setup lang="ts">

import Categories from "./components/categories.vue"
import {shopStore} from "../../../../core/store/shop.store"
import Banner from "./components/banner.vue"
import Products from "./components/products.vue"
import Offers from "./components/offers.vue"

const shop = shopStore()
shop.page="Home"
</script>

<style scoped>

</style>
