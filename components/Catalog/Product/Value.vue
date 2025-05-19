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
				<div class="flex items-center gap-4">
					<div class="flex items-center gap-2">
						<button @click="quantity > 1 && quantity--"
							type="button"
							class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200"
							:disabled="quantity <= 1"
							tabindex="-1" aria-label="Уменьшить">
							<svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M5 12h14"></path>
							</svg>
						</button>
						<input type="text" v-model="quantity"
							@input="handleQuantityInput"
							@blur="validateQuantityOnBlur"
							class="w-12 bg-transparent border border-gray-200 rounded-lg focus:outline-none text-gray-800 text-center p-1"
							aria-label="Количество">
						<button @click="quantity < (product?.count_stok || 99) && quantity++"
							type="button"
							class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200"
							:disabled="quantity >= (product?.count_stok || 99)"
							tabindex="-1" aria-label="Увеличить">
							<svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M5 12h14"></path>
								<path d="M12 5v14"></path>
							</svg>
						</button>
					</div>
					<button @click="addToCart(product)"
						type="button"
						class="py-3 px-6 inline-flex items-center font-medium text-sm rounded-full bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:bg-teal-700 transition-colors duration-200"
					>
						Добавить в корзину
					</button>
				</div>
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
const quantity = ref(1)

const handleQuantityInput = (event) => {
	const input = event.target
	const value = input.value.replace(/[^0-9]/g, '')
	input.value = value

	if (value) {
		const newQuantity = parseInt(value)
		if (!isNaN(newQuantity)) {
			quantity.value = Math.max(1, Math.min(newQuantity, props.product?.count_stok || 99))
		}
	}
}

const validateQuantityOnBlur = (event) => {
	const input = event.target
	let newQuantity = parseInt(input.value)

	if (isNaN(newQuantity) || newQuantity < 1) {
		newQuantity = 1
	} else if (newQuantity > (props.product?.count_stok || 99)) {
		newQuantity = props.product?.count_stok || 99
	}

	input.value = newQuantity.toString()
	quantity.value = newQuantity
}

const addToCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem('busket') || '[]')
  
  // Проверяем, есть ли уже такой товар в корзине
  const existingItemIndex = existingCart.findIndex(item => item.id === product.id)
  
  if (existingItemIndex === -1) {
    // Добавляем новый товар
    existingCart.push({...product, quantity: quantity.value})
  } else {
    // Обновляем количество существующего товара
    existingCart[existingItemIndex].quantity += quantity.value
  }
  
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
