<template>
  <div class="flex flex-col min-h-screen max-w-[90rem] mx-auto">
    <HeaderNavbar />
    <main class="flex-grow w-full px-4 sm:px-6 lg:px-8 mx-auto min-h-[55vh] pt-[48px] md:pt-[89px] md:mt-4">
      <slot/>
    </main>
    <Footer />
    <PwaInstall />
  </div>
</template>

<script setup>
import PwaInstall from '~/components/PwaInstall.vue'
let route = useRoute()

let pageTitle = computed(() => route.meta.title || '')
</script>
