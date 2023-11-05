<template>
  <section
      class="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
  >
    <sidebar_categories/>
    <div class="w-full">
      <div class="mb-5 flex items-center justify-between px-5">
        <div class="flex gap-3">
          <button
              class="flex items-center justify-center border px-6 py-2 md:hidden"
          >
            Filters
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="mx-2 h-4 w-4"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>

        <div class="hidden gap-3 lg:flex">
          <button class="border bg-amber-400 py-2 px-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </button>
        </div>
      </div>
      <section
          class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3"
      >
        <div class="flex flex-col" v-for="(item,index) in listProduct" :key="index">
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
    </div>
  </section>
  <Toast position="top-right" group="br"/>
</template>

<script setup lang="ts">
import {shopStore} from "../../../core/store/shop.store"
import {useRoute} from "vue-router"
import {capitalizeFirstLetter} from "../../../core/utils"
import Sidebar_categories from "./sidebar_categories.vue"
import Toast from 'primevue/toast'
import Rating from 'primevue/rating'
import {useToast} from "primevue/usetoast"
import {computed, inject, onUpdated, ref} from "vue"

const shop = shopStore()
const route = useRoute()

const filter_category = ref(route.params.id as string)
onUpdated(() => {
  filter_category.value = route.params.id as string
  shop.page = "Category -- " + capitalizeFirstLetter(route.params.id as string)
})
const search: any = inject('search')
const listProduct = computed(() => {
  return shop.findProductByCategoryAll(filter_category.value as string, search.value as string)
})
const toast = useToast()

function addCart(product: any) {
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
</style>
