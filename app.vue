<template>
  <NuxtLoadingIndicator color="#F54900" :height="4" :duration="500" :throttle="300" />
  <NuxtPage />
</template>

<script setup>
useHead({
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
})
</script>