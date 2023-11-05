<template>
  <Skeleton v-if="shop.loadingProducts"
            class="container flex-grow mx-auto max-w-[1200px] border-b py-5 mt-5 !h-96 lg:grid lg:grid-cols-2 lg:py-10"
            animation="wave"></Skeleton>
  <section v-if="product"
           class="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10"
  >
    <div class="container mx-auto px-4">
      <img
          class="" style="max-height: 32rem"
          :src="product.image"
          alt="Sofa image"
      />
    </div>
    <div class="mx-auto px-5 lg:px-5">
      <h2 class="pt-3 text-2xl font-bold lg:pt-0">{{ product.title }}</h2>
      <div class="mt-1">
        <div class="flex items-center">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-4 w-4 text-yellow-400"
          >
            <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
            />
          </svg>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-4 w-4 text-yellow-400"
          >
            <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
            />
          </svg>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-4 w-4 text-yellow-400"
          >
            <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
            />
          </svg>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-4 w-4 text-yellow-400"
          >
            <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
            />
          </svg>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-4 w-4 text-gray-200"
          >
            <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
            />
          </svg>

          <p class="ml-3 text-sm text-gray-400">({{ product.rating.count }} reviews)</p>
        </div>
      </div>
      <p class="mt-5 font-bold">
        Availability: <span class="text-green-600">In Stock</span>
      </p>
      <p class="font-bold">
        Category: <span class="font-normal">{{ product.category }}</span>
      </p>
      <p class="font-bold">
        SKU: <span class="font-normal">BE45VGTRK</span>
      </p>
      <p class="mt-4 text-4xl font-bold text-violet-900">
        ${{ product.price }}
      </p>
      <p class="pt-5 text-sm leading-5 text-gray-500">
        {{ product.description }}
      </p>
      <div v-if="product.category!=='electronics' && product.category!=='jewelery'" class="mt-6">
        <p class="pb-2 text-xs text-gray-500">Size</p>

        <div class="flex gap-1">
          <div
              class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          >
            XS
          </div>
          <div
              class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          >
            S
          </div>
          <div
              class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          >
            M
          </div>

          <div
              class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          >
            L
          </div>

          <div
              class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          >
            XL
          </div>
        </div>
      </div>
      <div v-if="product.category!=='electronics' && product.category!=='jewelery'" class="mt-6">
        <p class="pb-2 text-xs text-gray-500">Color</p>

        <div class="flex gap-1">
          <div
              class="h-8 w-8 cursor-pointer border border-white bg-gray-600 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          ></div>
          <div
              class="h-8 w-8 cursor-pointer border border-white bg-violet-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          ></div>
          <div
              class="h-8 w-8 cursor-pointer border border-white bg-red-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          ></div>
        </div>
      </div>
      <div class="mt-6">
        <p class="pb-2 text-xs text-gray-500">Quantity</p>
        <div class="flex">
          <button @click="countCart>1?countCart--:countCart=1"
                  class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          >
            &minus;
          </button>
          <div
              class="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500"
          >
            {{ countCart }}
          </div>
          <button @click="countCart++"
                  class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
          >
            &#43;
          </button>
        </div>
      </div>
      <div class="mt-7 flex flex-row items-center gap-6">
        <button @click="addCart(product)"
                class="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-3 h-4 w-4"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          Add to cart
        </button>
        <button
            class="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-3 h-4 w-4"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>

          Wishlist
        </button>
      </div>
    </div>
  </section>
  <product_detail/>
  <related_product v-if="product" :category="product.category"/>
  <Toast position="top-right" group="br"/>
</template>
<script setup lang="ts">
import {shopStore} from "../../../core/store/shop.store"
import {useRoute} from "vue-router"
import {computed, onMounted, onUpdated, ref} from "vue"
import Product_detail from "./product_detail.vue"
import Related_product from "./related_product.vue"
import Skeleton from "primevue/skeleton"
import Toast from 'primevue/toast'
import {useToast} from "primevue/usetoast"

const toast = useToast()
const shop = shopStore()
const route = useRoute()
const countCart = ref(1)
let product = computed(() => {
  let p= shop.findProduct(route.params.id)
  const title=p?p.title:''
  shop.page="Product "+title
  return p
})


function addCart(product:any) {
  shop.addCart(product, countCart.value as number)
  toast.add({
    severity: "success",
    summary: "Accion completada",
    detail: 'El producto fue añadido correctamente',
    group: "br",
    life: 6000,
  })
}

onUpdated(() => {
  window.scroll(0, 0)
})
onMounted(() => {
  window.scroll(0, 0)
})
</script>

<style scoped>

</style>
