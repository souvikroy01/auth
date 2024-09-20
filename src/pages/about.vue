<template>
  <div class="flex flex-col gap-8 justify-center items-center h-[89.5vh]">
    <h1>This is the about page</h1>
    <div>
      <span>Go to -> </span>
      <router-link class="text-blue-500 ml-4 hover:underline" to="/">Home</router-link>
    </div>
  </div>
</template>

<script setup>
import { useMeta } from "vue-meta";

useMeta({
  title:"About"
})
</script>

<style lang="postcss" scoped>

</style>