<template>
  <nav class="bg-violet-900 relative">
    <Skeleton v-if="shop.loadingCategories" style="height: 4rem"
              class=" hidden items-center md:flex mx-auto w-full"
              animation="wave"></Skeleton>
    <div v-else class="h-12 hidden items-center max-w-[1200px] md:flex mx-auto w-full">
      <router-link    :to="{name:'category',params:{id:'all'}}"
              class="bg-amber-400 cursor-pointer flex h-full items-center justify-center ml-5 w-40">
        <div class="flex justify-around" >
          <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 mx-1 w-6" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
          All categories
        </div>
      </router-link>
      <div class="flex gap-8 mx-7">
        <router-link class="duration-100 font-light hover:text-yellow-400 hover:underline text-white"
                                      :to="{name:'index'}">Home</router-link>
        <router-link v-for="(item,index) in shop.categories" :key="index" class="duration-100 font-light hover:text-yellow-400 hover:underline text-white"
                                      :to="{name:'category',params:{id:item}}">{{capitalizeFirstLetter(item)}}</router-link>
        </div>
      <div class="flex gap-4 ml-auto px-5"><a
          class="duration-100 font-light hover:text-yellow-400 hover:underline text-white"
          href="javascript:void(0)">Login</a> <span class="text-white">|</span> <a
          class="duration-100 font-light hover:text-yellow-400 hover:underline text-white" href="javascript:void(0)">Sign
        Up</a></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Skeleton from "primevue/skeleton"
import {shopStore} from "../../../../core/store/shop.store"
import {capitalizeFirstLetter} from "../../../../core/utils"
const shop=shopStore()

</script>

<style scoped>

</style>
