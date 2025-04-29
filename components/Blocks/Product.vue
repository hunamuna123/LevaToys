<template>
  <div class="px-4 py-10 sm:px-4 lg:px-8 lg:py-14 mx-auto">
    <!-- Toast Notifications Container -->
    <div class="fixed top-4 right-4 z-50 flex flex-col gap-2">
      <TransitionGroup name="toast">
        <div v-for="(toast, index) in toasts" :key="toast.id"
          class="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg" role="alert" tabindex="-1">
          <div class="flex p-4">
            <div class="shrink-0">
              <svg class="shrink-0 size-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16"
                height="16" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                </path>
              </svg>
            </div>
            <div class="ms-3">
              <p class="text-sm text-gray-700">
                Товар добавлен в корзину
              </p>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <div class="border-b border-gray-200 mb-6">
      <nav class="flex justify-between gap-x-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
        <div class="justify-start items-center flex text-sm md:text-2xl px-4 ">Популярные товары</div>
        <div class="flex gap-x-1 justify-end">
          <button type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none active"
            id="tabs-with-icons-item-1" aria-selected="true" data-hs-tab="#tabs-with-icons-1"
            aria-controls="tabs-with-icons-1" role="tab">
            Хиты
          </button>
          <button type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none"
            id="tabs-with-icons-item-2" aria-selected="false" data-hs-tab="#tabs-with-icons-2"
            aria-controls="tabs-with-icons-2" role="tab">
            Акции
          </button>
          <button type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none"
            id="tabs-with-icons-item-3" aria-selected="false" data-hs-tab="#tabs-with-icons-3"
            aria-controls="tabs-with-icons-3" role="tab">
            Новинки
          </button>
        </div>
      </nav>
    </div>

    <div id="tabs-with-icons-1" role="tabpanel" aria-labelledby="tabs-with-icons-item-1">
      <div class="overflow-x-auto md:overflow-visible pb-4">
        <div
          class="grid grid-flow-col auto-cols-[270px] gap-4 md:overflow-visible md:grid-cols-2 lg:grid-cols-4 md:auto-cols-auto md:grid-flow-row">
          <SkeletonProduct v-if="loading" />

          <template v-else>
            <div v-for="tab in tab1.slice(0, 4)" :key="tab.id"
              class="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl">
              <div class="flex items-center justify-center bg-gray-50 p-4 rounded-xl overflow-hidden">
                <img :src="formattedImageUrl(tab.images)" :alt="tab.name"
                  class="h-full w-auto object-contain rounded-xl" />
              </div>
              <div class="p-4 md:p-6 md:pt-2">
                <template v-if="isAuthenticated()">
                  <span class="block mb-1 text-md font-semibold uppercase">{{ tab.product_code }} ₽</span>
                </template>
                <template v-else>
                  <NuxtLink to="/auth/login" class="block mb-1 text-md font-semibold text-teal-600 hover:text-teal-700">
                    Войдите, чтобы увидеть цену
                  </NuxtLink>
                </template>
                <h3 class="text-xl font-semibold text-gray-800">{{ tab.name }}</h3>
                <p class="mt-3 text-gray-500">{{ tab.description }}</p>
              </div>
              <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                <NuxtLink :to="`/catalog/${tab.id}`"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                  Подробнее
                </NuxtLink>
                <button @click="addToCart(tab)"
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
      <div class="overflow-x-auto md:overflow-visible pb-4">
        <div
          class="grid grid-flow-col auto-cols-[270px] gap-4 md:overflow-visible md:grid-cols-2 lg:grid-cols-4 md:auto-cols-auto md:grid-flow-row">

          <SkeletonProduct v-if="loading" />

          <template v-else>
            <div v-for="tab in tab2.slice(0, 4)" :key="tab.id"
              class="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl">
              <div class="flex items-center justify-center bg-gray-50 p-4 rounded-xl overflow-hidden">
                <img :src="formattedImageUrl(tab.images)" :alt="tab.name"
                  class="h-full w-auto object-contain rounded-xl" />
              </div>
              <div class="p-4 md:p-6 md:pt-2">
                <template v-if="isAuthenticated()">
                  <span class="block mb-1 text-md font-semibold uppercase">{{ tab.product_code }} ₽</span>
                </template>
                <template v-else>
                  <NuxtLink to="/auth/login" class="block mb-1 text-md font-semibold text-teal-600 hover:text-teal-700">
                    Войдите, чтобы увидеть цену
                  </NuxtLink>
                </template>
                <h3 class="text-xl font-semibold text-gray-800">{{ tab.name }}</h3>
                <p class="mt-3 text-gray-500">{{ tab.description }}</p>
              </div>
              <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                <NuxtLink :to="`/catalog/${tab.id}`"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                  Подробнее
                </NuxtLink>
                <button @click="addToCart(tab)"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                  В корзину
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div id="tabs-with-icons-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-3">
      <div class="overflow-x-auto md:overflow-visible pb-4">
        <div
          class="grid grid-flow-col auto-cols-[270px] gap-4 md:overflow-visible md:grid-cols-2 lg:grid-cols-4 md:auto-cols-auto md:grid-flow-row">
      
            <SkeletonProduct v-if="loading" />
       
          <template v-else>
            <div v-for="tab in tab3.slice(0, 4)" :key="tab.id"
              class="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl">
              <div class="flex items-center justify-center bg-gray-50 p-4 rounded-xl overflow-hidden">
                <img :src="formattedImageUrl(tab.images)" :alt="tab.name"
                  class="h-full w-auto object-contain rounded-xl" />
              </div>
              <div class="p-4 md:p-6 md:pt-2">
                <template v-if="isAuthenticated()">
                  <span class="block mb-1 text-md font-semibold uppercase">{{ tab.product_code }} ₽</span>
                </template>
                <template v-else>
                  <NuxtLink to="/auth/login" class="block mb-1 text-md font-semibold text-teal-600 hover:text-teal-700">
                    Войдите, чтобы увидеть цену
                  </NuxtLink>
                </template>
                <h3 class="text-xl font-semibold text-gray-800">{{ tab.name }}</h3>
                <p class="mt-3 text-gray-500">{{ tab.description }}</p>
              </div>
              <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                <NuxtLink :to="`/catalog/${tab.id}`"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                  Подробнее
                </NuxtLink>
                <button @click="addToCart(tab)"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50">
                  В корзину
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import { api } from "@/store/api.js"
import { isAuthenticated, getAuthHeaders } from '@/utils/auth';

const apiStore = api()
const url = computed(() => apiStore.url)
const tab1 = ref([]);
const tab2 = ref([]);
const tab3 = ref([]);

const error = ref(null);
const toasts = ref([]);
const loading = ref(true);

const formattedImageUrl = (images) => {
  if (!images?.[0]?.image) return '/toy.png'
  const imageUrl = images[0].image
  return imageUrl.startsWith('http') ? imageUrl : `http://${imageUrl}`
}

const fetchProducts = async () => {
  loading.value = true;
  error.value = null;

  try {
    const endpoint = isAuthenticated() ? 'api/v1/auth/product/index' : 'api/v1/product/index';
    const [response1, response2, response3] = await Promise.all([
      fetch(`${url.value}${endpoint}?hit=true`, {
        headers: {
          ...getAuthHeaders(),
          'accept': 'application/json',
        },
      }),
      fetch(`${url.value}${endpoint}?news=true`, {
        headers: {
          ...getAuthHeaders(),
          'accept': 'application/json',
        },
      }),
      fetch(`${url.value}${endpoint}?promotion=true`, {
        headers: {
          ...getAuthHeaders(),
          'accept': 'application/json',
        },
      }),
    ]);

    const [result1, result2, result3] = await Promise.all([
      response1.json(),
      response2.json(),
      response3.json(),
    ]);

    if (result1.message === 'OK') {
      tab1.value = result1.data;
    } else {
      error.value = 'Ошибка запроса hit';
    }

    if (result2.message === 'OK') {
      tab2.value = result2.data;
    } else {
      error.value = 'Ошибка запроса news';
    }

    if (result3.message === 'OK') {
      tab3.value = result3.data;
    } else {
      error.value = 'Ошибка запроса promotion';
    }

  } catch (err) {
    error.value = 'Ошибка запроса products';
    console.error('Ошибка запроса', err);
  } finally {
    loading.value = false;
  }
};


const addToCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem('busket') || '[]')
  existingCart.push(product)
  localStorage.setItem('busket', JSON.stringify(existingCart))

  const toastId = Date.now()
  toasts.value.push({ id: toastId })
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== toastId)
  }, 3000)
}

onMounted(() => {
  fetchProducts()
})

</script>


<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.toast-move {
  transition: transform 0.3s ease;
}
</style>