<template>
  <header class="flex h-16 items-center justify-between max-w-[1200px] mx-auto px-5 w-full"><a href="/index.html">
    <img style="width: 123px;height: 36px" class="cursor-pointer sm:h-auto sm:w-auto" src="/public/img/logo/company.png"
         alt="company logo"> </a>
    <div class="md:hidden">
      <button >
        <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-8 w-8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
        </svg>
      </button>
    </div>
    <div class="border h-9  items-center md:flex w-2/5" v-if="shop.show_search">
      <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 mx-3 w-4" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"></path>
      </svg>
      <input class=" md:block outline-none w-11/12" v-model="search"  type="search"  style="height: 2rem;padding: 10px;" placeholder="Search">
      <button class="bg-amber-400 h-full hover:bg-yellow-300 ml-auto px-4" @click="clear"> Clear</button>
    </div>
    <div class="gap-3 hidden md:!flex">
      <router-link :to="{name:'cart'}"
         class="cursor-pointer flex flex-col items-center justify-center relative">
        <span class="relative inline-block">
       <svg fill="currentColor" class="h-6 w-6" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0zM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75z"
                clip-rule="evenodd"></path>

        </svg>
    <span
        class="absolute -top-2 left-3 px-2 py-1 text-xs font-bold leading-none text-red-100 transform bg-red-600 rounded-full">{{count}}</span>
</span>
        <p class="text-xs">Cart</p>
      </router-link>
      <a href="/account-page.html"
         class="cursor-pointer flex flex-col items-center justify-center relative">
        <span class="absolute bottom-[33px] flex h-2 right-1 w-2"> <span
            class="absolute animate-ping bg-red-400 h-full inline-flex opacity-75 rounded-full w-full"></span> <span
            class="bg-red-500 h-2 inline-flex relative rounded-full w-2"></span> </span>
        <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
        </svg>
        <p class="text-xs">Account</p>
      </a>
    </div>
  </header>
  <section x-show="mobileMenuOpen" @click.outside="mobileMenuOpen = false"
           class="absolute bg-white h-screen left-0 right-0 w-full z-50" style="display:none">
    <div class="mx-auto">
      <div class="flex gap-3 justify-center mx-auto py-4 w-full"><a href="/wishlist.html"
                                                                    class="cursor-pointer flex flex-col items-center justify-center">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
        </svg>
        <p class="text-xs">Wishlist</p></a> <a href="/cart.html"
                                               class="cursor-pointer flex flex-col items-center justify-center">
        <svg fill="currentColor" class="h-6 w-6" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0zM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75z"
                clip-rule="evenodd"></path>
        </svg>
        <p class="text-xs">Cart</p></a> <a href="/account-page.html"
                                           class="cursor-pointer flex flex-col items-center justify-center relative">
          <span class="absolute bottom-[33px] flex h-2 right-1 w-2"> <span
              class="absolute animate-ping bg-red-400 h-full inline-flex opacity-75 rounded-full w-full"></span> <span
              class="bg-red-500 h-2 inline-flex relative rounded-full w-2"></span> </span>
        <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
        </svg>
        <p class="text-xs">Account</p></a></div>
      <form class="border flex h-9 items-center mx-5 my-4">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 mx-3 w-4" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"></path>
        </svg>
        <input class="hidden md:block outline-none w-11/12" type="search" placeholder="Search">
        <button type="submit" class="bg-amber-400 h-full hover:bg-yellow-300 ml-auto px-4"> Search</button>
      </form>
      <ul class="font-medium text-center">
        <li class="py-2">
          <router-link :to="{name:'index'}">Home</router-link>
        </li>
        <li class="py-2">
          <router-link :to="{name:'index'}">Catalog</router-link>
        </li>
        <li class="py-2">
          <router-link :to="{name:'index'}">About Us</router-link>
        </li>
        <li class="py-2">
          <router-link :to="{name:'index'}">Contact Us</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import {shopStore} from "../../../../core/store/shop.store"
import {inject} from "vue"
let search=inject('search')
const shop=shopStore()
const count= shop.countCart
function clear(){
  search.value=''
}
</script>

<style lang="scss" scoped>

</style>
