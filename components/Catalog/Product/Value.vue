<template>
	<div
		class="flex flex-col gap-4 w-full md:max-w-[calc(50%_-_48px)] lg:max-w-[calc(60%_-_48px)]"
	>
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
			</div>
			<div>
				<button
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
defineProps({
	product: {
		type: Object,
		default: () => ({})
	}
})
</script>
