<template>
	<div v-if="product?.images?.length > 1" data-hs-carousel='{
			"loadingClasses": "opacity-0"
		}' class="relative md:max-w-[50%] lg:max-w-[40%]">
		<div class="hs-carousel flex flex-col-reverse">
			<div class="flex-none mt-4">
				<div
					class="hs-carousel-pagination max-w-full flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent">
					<div
						v-for="(image, index) in product.images"
						:key="image.id"
						class="hs-carousel-pagination-item shrink-0 border-2 rounded-xl overflow-hidden cursor-pointer w-[120px] h-[120px] hs-carousel-active:border-teal-400"
						:data-hs-carousel-slide-to="index">
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden">
							<img 
								:src="getImageUrl(image.image)" 
								:alt="product.name || ''"
								class="w-full h-full object-cover"
								@error="handleImageError" />
						</div>
					</div>
				</div>
			</div>

			<div class="relative grow overflow-hidden min-w-full aspect-square bg-white rounded-lg">
				<div
					class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
					<div 
						v-for="image in product.images" 
						:key="image.id"
						class="hs-carousel-slide w-full">
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden">
							<img 
								:src="getImageUrl(image.image)" 
								:alt="product.name || ''"
								class="w-full h-full object-contain"
								@error="handleImageError" />
						</div>
					</div>
				</div>

				<button type="button"
					class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-black hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg transition-colors duration-200">
					<span class="text-2xl" aria-hidden="true">
						<svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round">
							<path d="m15 18-6-6 6-6"></path>
						</svg>
					</span>
					<span class="sr-only">Previous</span>
				</button>
				<button type="button"
					class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-black hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg transition-colors duration-200">
					<span class="sr-only">Next</span>
					<span class="text-2xl" aria-hidden="true">
						<svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round">
							<path d="m9 18 6-6-6-6"></path>
						</svg>
					</span>
				</button>
			</div>
		</div>
	</div>
	<div v-else-if="product?.images?.length === 1" class="relative md:max-w-[50%] lg:max-w-[40%] flex flex-col-reverse">
		<div class="flex-none mt-4">
			<div
				class="max-w-full flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent">
				<div
					class="shrink-0 border-2 rounded-xl overflow-hidden cursor-pointer w-[120px] h-[120px] border-teal-400">
					<div
						class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden">
						<img 
							:src="getImageUrl(product.images[0].image)" 
							:alt="product.name || ''"
							class="w-full h-full object-cover"
							@error="handleImageError" />
					</div>
				</div>
			</div>
		</div>
		<div class="relative grow overflow-hidden min-w-full aspect-square bg-white rounded-lg">
			<div
				class="flex justify-center items-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden">
				<img 
					:src="getImageUrl(product.images[0].image)" 
					:alt="product.name || ''"
					class="w-full h-full object-contain"
					@error="handleImageError" />
			</div>
		</div>
	</div>
	<div v-else class="relative md:max-w-[50%] lg:max-w-[40%] flex flex-col-reverse">
		<div class="flex-none mt-4">
			<div
				class="max-w-full flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent">
				<div
					class="shrink-0 border-2 rounded-xl overflow-hidden cursor-pointer w-[120px] h-[120px] border-teal-400">
					<div
						class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden">
						<img 
							src="/toy.png" 
							alt="Default product image"
							class="w-full h-full object-cover" />
					</div>
				</div>
			</div>
		</div>
		<div class="relative grow overflow-hidden min-w-full aspect-square bg-white rounded-lg">
			<div class="flex flex-col items-center justify-center h-full bg-gray-100 rounded-xl p-8 text-center">
				<svg class="w-12 h-12 text-gray-400 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
				<h3 class="text-lg font-semibold text-gray-700 mb-1">Нет изображений</h3>
				<p class="text-sm text-gray-500">Для этого товара пока нет фотографий</p>
			</div>
		</div>	
	</div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
	product: {
		type: Object,
		required: true
	}
})

const getImageUrl = (imageUrl) => {
	if (!imageUrl) return '/toy.png'
	return imageUrl.startsWith('http') ? imageUrl : `http://${imageUrl}`
}

const handleImageError = (event) => {
	event.target.src = '/toy.png'
}

onMounted(() => {
	window.HSStaticMethods.autoInit()
})

watch(() => props.product?.images?.length, () => {
	if (props.product?.images?.length > 1) {
		window.HSStaticMethods.autoInit();
	}
});

</script>