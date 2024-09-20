<template>
  <div>
    <metainfo>
          <template v-slot:title="{ content }">
              {{ content ? `${content} | ${siteName}` : siteName }}
          </template>
      </metainfo>
    <router-view></router-view>
  </div>
</template>

<script setup>

const siteName = "Example.com"

</script>

<style lang="postcss" scoped>

</style>