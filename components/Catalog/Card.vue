<template>
  <div
    class="w-full flex flex-col gap-5 bg-white border border-gray-200 shadow-sm rounded-[20px] p-4 md:p-5 relative transition-transform duration-200 overflow-hidden">
    <div class="w-full grid grid-cols-2 gap-4">
      <div class="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden">
        <img v-if="product.images && product.images.length" class="w-full h-full object-cover"
          :src="formattedImageUrl" :alt="product.name" />
      </div>
      <div class="flex flex-col gap-1 h-full">
        <p class="text-gray-500">
          {{ product.category?.name }}
        </p>
        <h4 class="text-xl line-clamp-2">
          {{ product.name }}
        </h4>
        <p class="mt-0.5 line-clamp-3">
          {{ product.description }}
        </p>
        <div v-if="isAuthenticated()" class="text-2xl font-bold mt-auto">
          {{ product.price }} ₽
        </div>
        <div v-else class="mt-auto">
          <NuxtLink to="/auth/login" class="text-orange-600 hover:text-orange-700 font-medium">
            Войдите, чтобы увидеть цену
          </NuxtLink>
        </div>
      </div>
    </div>

    <NuxtLink :to="'/catalog/' + product.id">
      <button type="button"
        class="mt-auto w-full py-2.5 px-6 justify-center items-center font-medium text-sm rounded-xl bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:bg-orange-700 transition-colors duration-200 cursor-pointer">
        Подробнее
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { isAuthenticated } from '@/utils/auth'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const formattedImageUrl = computed(() => {
  if (!props.product.images?.[0]?.image) return ''
  const imageUrl = props.product.images[0].image
  return imageUrl.startsWith('https') ? imageUrl : `https://${imageUrl}`
})
</script>
