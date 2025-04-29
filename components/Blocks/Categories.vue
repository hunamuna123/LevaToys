<template>
  <div class="max-w-2xl mt-12 mx-auto text-center mb-10">
    <h2 class="text-2xl font-bold md:text-4xl font-inter md:leading-tight">
      Популярные категории
    </h2>
  </div>
  <div class="overflow-x-auto md:overflow-visible px-4 py-10 sm:px-4 lg:px-8">
    <div
      class="grid grid-flow-col auto-cols-[80%] gap-4 md:grid-flow-row md:auto-cols-auto  md:grid-cols-2 lg:grid-cols-3">
      <SkeletonCategories v-if="loading" />
      <template v-else>
        <div v-for="category in categories" :key="category.id"
          class="card bg-teal-400 shadow-2xl  border-teal-300 border rounded-xl relative flex flex-col">
          <div class="relative w-full h-100 rounded-xl overflow-hidden">
            <img :src="formattedImageUrl(category.thumbnail)" :alt="category.name" class="w-full h-full object-cover" />
          </div>
          <div class="absolute top-1 left-4 p-2 rounded-xl text-black text-xl font-bold backdrop-blur-xl">
            {{ category.name }}
          </div>
          <div class="absolute bottom-4 right-4">
            <NuxtLink :to="`/catalog/?category_id=${category.id}`">
              <button class="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </NuxtLink>
          </div> 
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import { api } from "@/store/api.js"
import SkeletonCategories from '~/components/Skeleton/Categories.vue'

const apiStore = api()
const url = computed(() => apiStore.url)

const loading = ref(true)
const categories = ref([])
const error = ref(null)

const formattedImageUrl = (thumbnail) => {
  if (!thumbnail) return '/toy.png'
  return thumbnail.startsWith('http') ? thumbnail : `http://${thumbnail}`
}

const fetchCategories = async () => {
  try {
    loading.value = true
    const response = await fetch(`${url.value}api/v1/categories/parent/`)
    const result = await response.json()

    if (result.message === 'OK') {
      categories.value = result.data
    } else {
      error.value = 'ошибка запроса categories'
    }
  } catch (err) {
    error.value = 'ошибка запроса categories'
    console.error('ошибка запроса', err)
  } finally {
    loading.value = false
  }
}
onMounted(() => {
  fetchCategories()
})


</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.01);
}
</style>
