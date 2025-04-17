<template>
    <div class="px-4 py-10 sm:px-4 lg:px-8 lg:py-14 mx-auto">
      <!-- Табы сверху -->
      <div class="border-b border-gray-200 mb-6">
        <nav class="flex justify-between gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          <!-- Новый div слева -->
          <div class="justify-start items-center flex text-2xl px-4 ">Большие игрушки (от 35см.)</div>
          <!-- Кнопки справа -->
          <div class="flex gap-x-1 justify-end">
            <button
              type="button"
              class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none active"
              id="tabs-with-icons-item-1"
              aria-selected="true"
              data-hs-tab="#tabs-with-icons-1"
              aria-controls="tabs-with-icons-1"
              role="tab"
            >
              Мягкие игрушки
            </button>
            <button
              type="button"
              class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none"
              id="tabs-with-icons-item-2"
              aria-selected="false"
              data-hs-tab="#tabs-with-icons-2"
              aria-controls="tabs-with-icons-2"
              role="tab"
            >
              Новинки
            </button>
            <button
              type="button"
              class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none"
              id="tabs-with-icons-item-3"
              aria-selected="false"
              data-hs-tab="#tabs-with-icons-3"
              aria-controls="tabs-with-icons-3"
              role="tab"
            >
              Хиты
            </button>
          </div>
        </nav>
      </div>
  
      <!-- Контент табов с карточками -->
      <div id="tabs-with-icons-1" role="tabpanel" aria-labelledby="tabs-with-icons-item-1">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(card, index) in tab1Cards" :key="index" class="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl">
            <div class="flex items-center justify-center bg-gray-50 p-4 rounded-xl overflow-hidden">
              <img :src="card.image" alt="" class="h-full w-auto object-contain rounded-xl" />
            </div>
            <div class="p-4 md:p-6 md:pt-2">
              <span class="block mb-1 text-md font-semibold uppercase">{{ card.price }} ₽</span>
              <h3 class="text-xl font-semibold text-gray-800">{{ card.title }}</h3>
              <p class="mt-3 text-gray-500">{{ card.description }}</p>
            </div>
            <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a href="#" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                Подробнее
              </a>
              <a href="#" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                В корзину
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <div id="tabs-with-icons-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-2">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(card, index) in tab2Cards" :key="index" class="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl">
            <div class="flex items-center justify-center bg-gray-50 p-4 rounded-xl overflow-hidden">
              <img :src="card.image" alt="" class="h-full w-auto object-contain rounded-xl" />
            </div>
            <div class="p-4 md:p-6 md:pt-2">
              <span class="block mb-1 text-md font-semibold uppercase">{{ card.price }} ₽</span>
              <h3 class="text-xl font-semibold text-gray-800">{{ card.title }}</h3>
              <p class="mt-3 text-gray-500">{{ card.description }}</p>
            </div>
            <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a href="#" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                Подробнее
              </a>
              <a href="#" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                В корзину
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <div id="tabs-with-icons-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-3">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(card, index) in tab3Cards" :key="index" class="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl">
            <div class="flex items-center justify-center bg-gray-50 p-4 rounded-xl overflow-hidden">
              <img :src="card.image" alt="" class="h-full w-auto object-contain rounded-xl" />
            </div>
            <div class="p-4 md:p-6 md:pt-2">
              <span class="block mb-1 text-md font-semibold uppercase">{{ card.price }} ₽</span>
              <h3 class="text-xl font-semibold text-gray-800">{{ card.title }}</h3>
              <p class="mt-3 text-gray-500">{{ card.description }}</p>
            </div>
            <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a href="#" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                Подробнее
              </a>
              <a href="#" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                В корзину
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Данные для карточек
  const tab1Cards = ref([
    { image: '/toy.png', price: 549, title: 'Окула Долбаеп, 40 см', description: 'Арт. 66600605 Кол-во в упак. 24' },
    { image: '/toy.png', price: 349, title: 'Медведь Плюшевый', description: 'Арт. 23456789 Кол-во в упак. 12' },
    { image: '/toy.png', price: 799, title: 'Робот Пылесос', description: 'Арт. 78945612 Кол-во в упак. 10' },
    { image: '/toy.png', price: 999, title: 'Робот-собака', description: 'Арт. 10293847 Кол-во в упак. 15' },
  ])
  
  const tab2Cards = ref([
    { image: '/toy.png', price: 499, title: 'Плюшевый Медведь', description: 'Арт. 55522233 Кол-во в упак. 20' },
    { image: '/toy.png', price: 349, title: 'Динозавр', description: 'Арт. 98989898 Кол-во в упак. 10' },
    { image: '/toy.png', price: 799, title: 'Жираф 3D', description: 'Арт. 45612389 Кол-во в упак. 5' },
    { image: '/toy.png', price: 1299, title: 'Кубик-Рубик', description: 'Арт. 56748392 Кол-во в упак. 12' },
  ])
  
  const tab3Cards = ref([
    { image: '/toy.png', price: 649, title: 'Летающий диск', description: 'Арт. 65478912 Кол-во в упак. 8' },
    { image: '/toy.png', price: 499, title: 'Гигантский мяч', description: 'Арт. 34221354 Кол-во в упак. 6' },
    { image: '/toy.png', price: 799, title: 'Игрушечный вертолет', description: 'Арт. 91028374 Кол-во в упак. 7' },
    { image: '/toy.png', price: 999, title: 'Кубик-антистресс', description: 'Арт. 74185296 Кол-во в упак. 10' },
  ])
  </script>
  