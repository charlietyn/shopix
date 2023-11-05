<template>
  <section class="hidden w-[300px] flex-shrink-0 px-4 lg:block">
    <div class="flex border-b pb-5">
      <div class="w-full">
        <p class="mb-3 font-medium">CATEGORIES</p>
        <div v-for="(item,index) in shop.detailsCategory()" :key="index" class="flex w-full justify-between">
          <div class="flex justify-center items-center">
            <input type="checkbox" />
            <p class="ml-4 capitalize">{{ item.title }}</p>
          </div>
          <div>
            <p class="text-gray-500">{{item.count}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex border-b py-5">
      <div class="w-full">
        <p class="mb-3 font-medium">PRICE</p>

        <div class="flex w-full">
          <div class="flex justify-between">
            <input
                x-mask="99999"
                min="50"
                type="number"
                class="h-8 w-[90px] border pl-2"
                placeholder="50"
            />
            <span class="px-3">-</span>
            <input
                x-mask="999999"
                type="number"
                max="999999"
                class="h-8 w-[90px] border pl-2"
                placeholder="99999"
            />
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import {shopStore} from "../../../core/store/shop.store"
const shop=shopStore();
</script>

<style scoped>

</style>
