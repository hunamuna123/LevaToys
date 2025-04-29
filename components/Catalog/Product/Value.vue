<template>
	<div
		class="flex flex-col gap-4 w-full md:max-w-[calc(50%_-_48px)] lg:max-w-[calc(60%_-_48px)]"
	>
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
		<h1 class="text-4xl font-semibold">
			{{ product?.name || 'Нет названия' }}
		</h1>


		<div class="grid sm:grid-cols-2 gap-2 mt-6">
			<h4 class="text-md text-gray-500">
				Бренд:
				<span class="font-medium text-black">
					{{ product?.brand?.name || 'Нет бренда' }}
				</span>
			</h4>
			<h4 class="text-md text-gray-500">
				Количество на складе:
				<span class="font-medium text-black">
					{{ product?.count_stok || 'Товаров не осталось' }}
				</span>
			</h4>
			<h4 class="text-md text-gray-500">
				Категория:
				<span class="font-medium text-black">
					{{ product?.category?.name || 'Нет категории' }}
				</span>
			</h4>
			<h4 class="text-md text-gray-500">
				Размеры:
				<span class="font-medium text-black">
					{{ product?.sizes?.length ? product.sizes.map(size => size.size_id).join(', ') : 'Нет размеров' }}
				</span>
			</h4>
		</div>
		
		<div class="mt-6 flex items-center justify-between gap-4">
			<div class="flex flex-col gap-1">
				<template v-if="isAuthenticated()">
					<h1 class="text-3xl font-bold">
						{{ product?.price ? product.price.toLocaleString('de-DE') : '0' }}
						₽
					</h1>
					<h4 class="text-lg font-medium text-gray-400" v-if="product?.oldPrice">
						<del>
							{{ product.oldPrice.toLocaleString('de-DE') }}
							₽
						</del>
					</h4>
				</template>
				<template v-else>
					<NuxtLink to="/auth/login" class="text-teal-600 hover:text-teal-700 font-medium text-xl">
						Войдите, чтобы увидеть цену
					</NuxtLink>
				</template>
			</div>
			<div>
				<button @click="addToCart(product)"
					type="button"
					class="py-3 px-6 inline-flex items-center font-medium text-sm rounded-full bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:bg-teal-700 transition-colors duration-200"
				>
					Добавить в корзину
				</button>
			</div>
		</div>

		<div class="flex items-center flex-wrap justify-between gap-4 mt-4">

		</div>
		<hr class="my-4" />
		<div class="flex flex-col gap-2">
			<h1 class="text-2xl font-semibold">Описание</h1>
			<p class="text-gray-600">
				{{ product?.description || 'Отсутствует' }}
			</p>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { isAuthenticated } from '@/utils/auth'

defineProps({
	product: {
		type: Object,
		default: () => ({})
	}
})

const toasts = ref([])

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
