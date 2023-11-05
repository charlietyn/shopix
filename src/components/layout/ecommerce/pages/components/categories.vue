<template>
  <h2 class="mx-auto mb-5 max-w-[1200px] px-5 mt-5">SHOP BY CATHEGORY</h2>
  <section class="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-4 gap-5 md mt-5">
    <Skeleton v-if="shop.loadingCategories"  v-for="(item,index) in 4" :key="index" class="mx-auto !h-52 w-auto" animation="wave"></Skeleton>
    <a href="#" v-for="(item,index) in shop.categories" :key="index">
      <div class="relative cursor-pointer">
        <img
            class="mx-auto brightness-50 duration-300 hover:brightness-100 !h-52"
            style="width: 469px"
            :src="'/img/categories/'+(index+1)+'.jpeg'"
            alt="bedroom cathegory image"
        />

        <p
            class="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl"
        >
          {{ capitalizeFirstLetter(item) }}
        </p>
      </div>
    </a>
  </section>

</template>

<script setup lang="ts">
import {shopStore} from "../../../../../core/store/shop.store"
import {capitalizeFirstLetter} from "../../../../../core/utils"
import Skeleton from 'primevue/skeleton'

const shop = shopStore()
</script>

<style scoped>

</style>
