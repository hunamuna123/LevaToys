<template>
  <div class="px-4 py-10 sm:px-4 lg:px-8 lg:py-14 mx-auto">
    <!-- Табы сверху -->
    <div class="border-b border-gray-200 mb-6">
      <nav class="flex justify-between gap-x-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
        <!-- Новый div слева -->
        <div class="justify-start items-center flex text-md md:text-2xl px-4 ">Популярные товары</div>
        <!-- Кнопки справа -->
        <div class="flex gap-x-1 justify-end">
          <button type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none active"
            id="tabs-with-icons-item-1" aria-selected="true" data-hs-tab="#tabs-with-icons-1"
            aria-controls="tabs-with-icons-1" role="tab">
            Категория 1
          </button>
          <button type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none"
            id="tabs-with-icons-item-2" aria-selected="false" data-hs-tab="#tabs-with-icons-2"
            aria-controls="tabs-with-icons-2" role="tab">
            Категория 2
          </button>
          <button type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none"
            id="tabs-with-icons-item-3" aria-selected="false" data-hs-tab="#tabs-with-icons-3"
            aria-controls="tabs-with-icons-3" role="tab">
            Категория 3
          </button>
        </div>
      </nav>
    </div>

    <!-- Контент табов с карточками -->
    <div id="tabs-with-icons-1" role="tabpanel" aria-labelledby="tabs-with-icons-item-1">
      <div class="overflow-x-auto md:overflow-visible pb-4">
        <div class="grid grid-flow-col auto-cols-[270px] gap-4 md:grid-cols-2 lg:grid-cols-4 md:auto-cols-auto md:grid-flow-row">
          <SkeletonProduct v-if="loading"/>
           <template v-else>
            <div v-for="product in products" :key="product.id"
              class="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl">
              <div class="flex items-center justify-center bg-gray-50 p-4 rounded-xl overflow-hidden">
                <img :src="product.thumbnail || '/toy.png'" :alt="product.name"
                  class="h-full w-auto object-contain rounded-xl" />
              </div>
              <div class="p-4 md:p-6 md:pt-2">
                <span class="block mb-1 text-md font-semibold uppercase">{{ product.product_code }} ₽</span>
                <h3 class="text-xl font-semibold text-gray-800">{{ product.name }}</h3>
                <p class="mt-3 text-gray-500">{{ product.description }}</p>
              </div>
              <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                <NuxtLink :to="`/catalog/${product.id}`"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                  Подробнее
                </NuxtLink>
                <button @click="addToCart(product)"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                  В корзину
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div id="tabs-with-icons-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-2">
      2 
    </div>

    <div id="tabs-with-icons-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-3">
      3
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { api } from "@/store/api.js"

const apiStore = api()
const url = computed(() => apiStore.url)

const loading = ref(true)
const products = ref([])
const error = ref(null)

const fetchProducts = async () => {
  try {
    loading.value = true
    const response = await fetch(`${url.value}api/v1/product/index`)
    const result = await response.json()

    if (result.message === 'OK') {
      products.value = result.data
    } else {
      error.value = 'Failed to load products'
    }
  } catch (err) {
    error.value = 'Error loading products'
    console.error('Error fetching products:', err)
  } finally {
    loading.value = false
  }
}

const addToCart = (product) => {
  // TODO: Implement add to cart functionality
  console.log('Adding to cart:', product)
}

onMounted(() => {
  fetchProducts()
})


</script>