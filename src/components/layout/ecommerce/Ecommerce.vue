<script setup lang="ts">
import EHeader from "./components/EHeader.vue"
import EMenu from "./components/EMenu.vue"
import EBreadcumbs from "./components/EBreadcumbs.vue"
import EFooter from "./components/EFooter.vue"
import {computed, provide, ref} from "vue"

const search =ref('')
provide(/* key */ 'search', /* value */ search)
</script>

<template>
  <div>
    <e-header/>
    <e-menu/>
    <e-breadcumbs/>
    <router-view/>
    <e-footer/>
  </div>
</template>

<style scoped>

</style>
