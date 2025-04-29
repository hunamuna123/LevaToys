<template>
  <nav class="bg-white">
    <div
      class=" w-full mx-auto md:flex hidden md:flex-row sm:justify-between md:items-center md:gap-x-3 py-3 px-4 md:px-6 lg:px-8 ">
      <div id="hs-nav-secondary"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
        <div class="py-2 sm:py-0 flex flex-col sm:flex-row sm:justify-start gap-y-2 sm:gap-y-0 sm:gap-x-6">
          <NuxtLink to="/company"
            class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600">
            Компания</NuxtLink>
          <NuxtLink to="/help/delivery"
            class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600">
            Доставка</NuxtLink>
          <NuxtLink to="/contacts"
            class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600">
            Контакты</NuxtLink>
          <NuxtLink to="/help/blog"
            class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600">
            Полезные статьи</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
  <header class="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
    <nav class="relative  w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center gap-x-1">
        <NuxtLink to="/" class="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80"
          aria-label="Brand">LevaToys</NuxtLink>
        <button type="button"
          class="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          id="hs-header-base-collapse" aria-expanded="false" aria-controls="hs-header-base"
          aria-label="Toggle navigation" data-hs-collapse="#hs-header-base">
          <svg class="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg class="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span class="sr-only">Toggle navigation</span>
        </button>
        <!-- End Collapse Button -->
      </div>

      <!-- Collapse -->
      <div id="hs-header-base"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
        aria-labelledby="hs-header-base-collapse">
        <div
          class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
          <div class="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
            <div class="grow">
              <div class="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                <div id="hs-nav-secondary"
                  class="hs-collapse block md:hidden overflow-hidden transition-all duration-300 basis-full grow">
                  <div class="py-2 md:py-0 flex flex-col md:flex-row md:justify-end gap-y-2 md:gap-y-0 md:gap-x-6">
                    <NuxtLink to="/company"
                      class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600">
                      Компания</NuxtLink>
                    <NuxtLink to="/help/delivery"
                      class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600">
                      Доставка</NuxtLink>
                    <NuxtLink to="/contacts"
                      class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600">
                      Контакты</NuxtLink>
                    <NuxtLink to="/help/blog"
                      class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600">
                      Полезные статьи</NuxtLink>
                  </div>
                </div>

                <!-- Mega Menu -->
                <div
                  class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                  <button id="hs-header-base-mega-menu-fullwidth" type="button"
                    class="hs-dropdown-toggle w-full p-2 flex items-center text-sm bg-teal-500 text-white hover:bg-teal-600 rounded-lg focus:outline-hidden focus:bg-teal-700"
                    aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                    <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 12h.01" />
                      <path d="M3 18h.01" />
                      <path d="M3 6h.01" />
                      <path d="M8 12h13" />
                      <path d="M8 18h13" />
                      <path d="M8 6h13" />
                    </svg> Каталог
                    <svg
                      class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full min-w-60 hidden z-10 top-full start-0 before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
                    role="menu" aria-orientation="vertical" aria-labelledby="hs-header-base-mega-menu-fullwidth">
                    <div class="md:mx-6 lg:mx-8 md:bg-white md:rounded-lg md:shadow-md">
                      <!-- Grid -->
                      <div class="py-1 md:p-2 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div class="flex flex-col">
                          <!-- Link -->
                          <NuxtLink to="/catalog" class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg">

                            <div class="grow">
                              <p class="font-medium text-sm text-gray-800">Все категории</p>
                            </div>
                          </NuxtLink>
                        </div>
                        <div v-for="category in categories" :key="category.id" class="flex flex-col">
                          <!-- Link -->
                          <NuxtLink :to="`/catalog/?category_id=${category.id}`" class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg">

                            <div class="grow">
                              <p class="font-medium text-sm text-gray-800">{{ category.name }}</p>
                            </div>
                          </NuxtLink>
                        </div>
                      </div>
                      <!-- End Grid -->
                    </div>
                  </div>
                </div>
                <!-- End Mega Menu -->
                <HeaderSearch />
              </div>
            </div>

            <div class="my-2 md:my-0 md:mx-2">
              <div class="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300"></div>
            </div>

            <div class=" flex flex-wrap items-center gap-x-1.5">
              <HeaderNavprofile v-if="accessToken" />
              <NuxtLink v-else to="/auth/register"
                class="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg  bg-white text-gray-800 shadow-2xs hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-user-icon lucide-user">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg><span class="px-1">Войти</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { api } from "@/store/api.js";

const apiStore = api();
const url = computed(() => apiStore.url);
const categories = ref([]);

const fetchCategories = async () => {
  try {
    const response = await fetch(`${url.value}api/v1/categories/parent/`);
    const data = await response.json();
    if (data.data) {
      categories.value = data.data;
    }
  } catch (err) {
    console.error('Ошибка при загрузке категорий:', err);
  }
};

onMounted(() => {
  fetchCategories();
});

let accessToken = useCookie("access_token").value;
</script>