<template>
  <div class="px-4 py-10 sm:px-4 lg:px-8 lg:py-14 mx-auto">
    <div class="border-b border-gray-200 mb-6">
      <nav class="flex justify-between gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
        <div class="justify-start items-center flex text-2xl  mb-2">Полезные статьи</div>
      </nav>
    </div>
    <div class="overflow-x-auto md:overflow-visible  pb-4">
      <div
        class="grid grid-flow-col auto-cols-[270px] gap-4 md:grid-cols-2 lg:grid-cols-4 md:auto-cols-auto md:grid-flow-row">
        <a v-for="(card, index) in tab1Cards" :key="index"
          class="group hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-xl  transition" href="#">

          <div class="w-full h-30 md:h-40 overflow-hidden rounded-xl ">
            <img class="w-full h-full object-cover" :src="card.image" :alt="card.title" />
          </div>
          <h3 class="mt-5 text-xl text-gray-800">
            {{ card.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            {{ card.description }}
          </p>
          <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
            Читать подробнее
            <svg class="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>

        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let tab1Cards = ref([
  {
    image: '/toy.png',
    price: 549,
    title: 'Будет ли модная игрушка капибара в 2025?',
    description: 'Обзоры товаров'
  },
  {
    image: '/toy.png',
    price: 349,
    title: 'Будет ли модная игрушка капибара в 2025?',
    description: 'ОБзор сисек'
  },
  {
    image: '/toy.png',
    price: 799,
    title: 'Будет ли модная игрушка капибара в 2025?',
    description: 'Товары для даунов'
  },
  {
    image: '/toy.png',
    price: 999,
    title: 'Будет ли модная игрушка капибара в 2025?',
    description: 'Как дела сосал'
  }
])
</script>