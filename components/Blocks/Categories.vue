<template>
  <div class="max-w-2xl mt-12 mx-auto text-center mb-10">
    <h2 class="text-2xl font-bold md:text-4xl font-inter md:leading-tight">
      Популярные категории
    </h2>
  </div>

  <div class="overflow-x-auto md:overflow-visible px-4 py-10 sm:px-4 lg:px-8">
  <div
    class="grid grid-flow-col auto-cols-[80%] gap-4 md:grid-flow-row md:auto-cols-auto md:grid-cols-2 lg:grid-cols-3">
    <div v-for="(card, index) in cards" :key="index"
      class="card bg-teal-400 shadow-2xl p-6 border-teal-300 border rounded-xl relative flex flex-col">
      
      <div class="relative w-full h-48 rounded-xl overflow-hidden">
        <!-- <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" /> -->
      </div>


      <div class="absolute top-0 left-4 p-2 rounded-xl text-white text-xl font-bold backdrop-blur-xl">
        {{ card.title }}
      </div>
      <div class="absolute bottom-4 right-4">
        <NuxtLink :to="card.link">
          <button class="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</div>


</template>

<script setup>
let cards = [
  { title: 'Мелкие игрушки', image: '/toy2.png', link: '/catalog?category_id=1' },
  { title: 'Средние игрушки (от 16 см)', image: '/toy3.png', link: '/catalog?category_id=2' },
  { title: 'Большие игрушки (от 35 см.)', image: '/toy4.png', link: '/catalog?category_id=3' },
  { title: 'Новинки', image: '/toy5.png', link: '/catalog?category_id=4' },
  { title: 'Аксессуары', image: '/toy6.png', link: '/catalog?category_id=5' },
  { title: 'Прочие игрушки', image: '/toy7.png', link: '/catalog?category_id=6' }
]
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
</style>
