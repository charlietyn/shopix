<template>
  <p class="mx-auto mt-10 mb-5 max-w-[1200px] px-5">RELATED PRODUCTS</p>
  <!-- Recommendations -->
  <section
      class="container mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4"
  >
    <!-- 1 -->

    <div v-for="(item,index) in products_related" :key="index" class="relative flex flex-col"
         style="width: 281px;height:343.53px ">
      <div
          class="absolute flex h-1/2 w-full justify-center gap-3 pt-16 opacity-0 duration-150 hover:opacity-100"
      >
        <router-link :to="{name:'product',params:{id:item.id}}"
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
      <img
          class=""
          style="width: 281px;height: 187px"
          :src="item.image"
          :alt="item.id+'-image'"
      />

      <div>
        <p class="mt-2 truncate">{{ item.title }}</p>
        <p class="font-medium text-violet-900">
          ${{ item.price }}
        </p>

        <div class="flex items-center">
          <Rating v-model="item.rating.rate" readonly :cancel="false"/>
          <p class="text-sm text-gray-400">{{ item.rating.count }} reviews</p>
        </div>

        <div>
          <button @click="addCart(item)" class="my-5 h-10 w-full bg-violet-900 text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import {shopStore} from "../../../core/store/shop.store"
import Rating from "primevue/rating"
import {useToast} from "primevue/usetoast"

const props = defineProps({
      category: String
    }
)
const toast=useToast()

const shop = shopStore()
const products_related = shop.findProductByCategory(props.category as string)

function addCart(product:any) {
  shop.addCart(product,1)
  toast.add({
    severity: "success",
    summary: "Completed Action",
    detail: 'The product was added succesfully',
    group: "br",
    life: 6000,
  })
}
</script>

<style>
.truncate {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
  color: #4c1d95 !important;
}

</style>
