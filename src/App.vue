<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { useLoginUserStore } from './stores/useLoginUserStore'
const loginUserStore = useLoginUserStore()
loginUserStore.fetchLoginUser()

import { healthUsingGet } from '@/api/mainController'

healthUsingGet().then((res) => {
  console.log(res)
})
</script>
<style>
#app {
}
</style>
