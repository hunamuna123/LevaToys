<template>
	<NuxtLayout>
		<div class="-mt-4 lg:-mt-8 w-full flex flex-col gap-10">
			<div class="w-full flex flex-col md:flex-row gap-12">
				<template v-if="isLoading">
					<CatalogProductSkeleton />
				</template>
				<template v-else-if="productData">
					<CatalogProductCarousel :product="productData" />
					<CatalogProductValue :product="productData" />
				</template>
				<template v-else>
					<div class="w-full text-center py-8">
						<p class="text-gray-500">Товар не найден</p>
					</div>
				</template>
			</div>
			<div v-if="productData">
				<CatalogProductTabs :product="productData"/>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from 'vue'
import { useFetch, useRoute } from '#app'
import { api } from '@/store/api.js'
import { isAuthenticated, getAuthHeaders } from '@/utils/auth'

const productData = ref(null)
const route = useRoute()
const apiStore = api()
const url = computed(() => apiStore.url)

const id = route.params.id

const {
	data: product,
	pending: isLoading,
	error,
	refresh,
} = useFetch(() => {
	const endpoint = isAuthenticated() ? 'api/v1/auth/product' : 'api/v1/product'
	return `${url.value}${endpoint}/${id}/`
}, {
	headers: {
		...getAuthHeaders(),
		accept: 'application/json',
	},
	immediate: true,
})

definePageMeta({
	layout: 'catalog',
})

onMounted(() => {
	if (!product.value) {
		refresh()
	}
})

watchEffect(() => {
	if (product.value?.data) {
		productData.value = product.value.data
	}
})
</script>
