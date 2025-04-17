<template>
  <div class="max-w-2xl mt-40 mx-auto text-center mb-10">
    <h2 class="text-2xl font-bold md:text-4xl font-inter md:leading-tight">
      Соберем под любые цели
    </h2>
  </div>

  <div class="overflow-x-auto md:overflow-visible px-4">
    <div
      class="grid grid-flow-col auto-cols-[350px] gap-4 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:auto-cols-auto md:grid-flow-row"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="bg-white shadow-2xl   border-teal-300 border rounded-xl relative flex flex-col"
      >
        <img
          src="/toy.png"
          :alt="card.title"
          class="w-full h-auto rounded-xl object-cover"
        />
        <div class="absolute top-2 left-4 text-white text-xl font-bold backdrop-blur-xl">
          {{ card.title }}
        </div>
        <div class="absolute bottom-4 right-4">
          <NuxtLink to="/pc">
            <button
              class="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  { title: 'Мелкие игрушки'},
  { title: 'Мелкие игрушки'},
  { title: 'Мелкие игрушки'},
  { title: 'Мелкие игрушки'},
  { title: 'Мелкие игрушки'},
  { title: 'Мелкие игрушки'},
]
</script>



<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
