<template>
  <p class="mx-auto mt-10 mb-5 max-w-[1200px] px-5">RECOMMENDED FOR YOU</p>
  <section
      class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4">
    <Skeleton v-if="shop.loadingProducts" v-for="(item,index) in 8" :key="index" class="flex flex-col"
              animation="wave"></Skeleton>
    <div class="flex flex-col" v-for="(item,index) in bestProducts" :key="index">
      <div class="relative flex">
        <img
            class=""
            style="height: 187px;width: 281px"
            :src="item.image"
            :alt="item.id+'-image'"
        />
        <div
            class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100"
        >
          <router-link :to="{name:'product',params: {id: item.id}}">
              <span
                  class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
          </router-link>
          <span
              class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
          >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-4 w-4"
              >
                <path
                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                />
              </svg>
            </span>
        </div>

        <div
            class="absolute right-1 mt-3 flex items-center justify-center bg-amber-400"
        >
        </div>
      </div>
      <div>
        <p class="mt-2 truncate">{{ item.title }}</p>
        <p class="font-medium text-violet-900">
          {{ item.price }}
        </p>

        <div class="flex items-center">
          <Rating v-model="item.rating.rate" readonly :cancel="false"/>
          <p class="text-sm text-gray-400">({{ item.rating.count }})</p>
        </div>

        <div>
          <button @click="addCart(item)" class="my-5 h-10 w-full bg-violet-900 text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>

  </section>
  <Toast position="top-right" group="br"/>
</template>

<script setup lang="ts">
import {shopStore} from "../../../../../core/store/shop.store"
import Rating from 'primevue/rating'
import Skeleton from 'primevue/skeleton'
import {useToast} from "primevue/usetoast"
import Toast from 'primevue/toast'

const shop = shopStore()
const bestProducts = shop.get_best_products
const toast=useToast()

function addCart(product){
  shop.addCart(product)
  toast.add({
    severity: "success",
    summary: "Accion completada",
    detail: 'El producto fue añadido correctamente',
    group: "br",
    life: 6000,
  })
}

</script>

<style>
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
  color: #4c1d95 !important;
}

.truncate {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
