<template>
  <div class="max-w-[90rem] mx-auto ">
    <HeaderNavbar/>
    <div class="md:mt-30 mt-20">
    <Slider/>
    <BlocksInfo/>
    <BlocksCategories/>
    <BlocksInfotwo/>
    <BlocksProduct/>
    <BlocksNews/>
    <Footer/>
    <CookieConsent />
    </div>

  </div>
</template>=

<script setup>
import CookieConsent from '~/components/UI/CookieConsent.vue'
</script>