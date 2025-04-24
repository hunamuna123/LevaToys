<!-- layouts/default.vue -->
<template>
  <div class="max-w-[90rem] mx-auto">
    <HeaderNavbar />

    <main class="w-full px-4 sm:px-6 lg:px-8 mx-auto mt-[68px] lg:mt-[72px] min-h-[60vh] mb-20">
      <div class="grid md:grid-cols-6">
        <div class="md:col-span-1">
          <div class="">
            <h2 class="text-2xl font-bold  ">{{ pageTitle }}</h2>
            <div class="flex py-8">
              <div>
                <nav class="flex flex-col space-y-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                  <button type="button"
                    class="hs-tab-active:bg-teal-100 hs-tab-active:text-teal-600 text-left px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-teal-600 hover:bg-teal-50 transition"
                    id="vertical-tab-with-border-item-1" aria-selected="true" data-hs-tab="#vertical-tab-with-border-1"
                    aria-controls="vertical-tab-with-border-1" role="tab">
                    О компании
                  </button>
                  <button type="button"
                    class="hs-tab-active:bg-teal-100 text-left hs-tab-active:text-teal-600 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-teal-600 hover:bg-teal-50 transition"
                    id="vertical-tab-with-border-item-2" aria-selected="false" data-hs-tab="#vertical-tab-with-border-2"
                    aria-controls="vertical-tab-with-border-2" role="tab">
                    Tab 2
                  </button>
                  <button type="button"
                    class="hs-tab-active:bg-teal-100 text-left hs-tab-active:text-teal-600 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-teal-600 hover:bg-teal-50 transition"
                    id="vertical-tab-with-border-item-3" aria-selected="false" data-hs-tab="#vertical-tab-with-border-3"
                    aria-controls="vertical-tab-with-border-3" role="tab">
                    Tab 3
                  </button>
                </nav>
              </div>

            </div>
          </div>
        </div>
        <div class="md:col-span-5">
          <slot name="right" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
let route = useRoute()

let pageTitle = computed(() => route.meta.title || '')
</script>
