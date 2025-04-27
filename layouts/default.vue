<template>
  <div class="flex flex-col min-h-screen max-w-[90rem] mx-auto">
    <HeaderNavbar />
    <main class="flex-grow w-full mt-4 px-4 sm:px-6 lg:px-8 mx-auto min-h-[55vh]">
      <slot/>
    </main>
    <Footer />
  </div>
</template>

<script setup>
let route = useRoute()

let pageTitle = computed(() => route.meta.title || '')
</script>
