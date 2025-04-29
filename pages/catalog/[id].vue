<template>
	<NuxtLayout>
		<div class="-mt-4 lg:-mt-8 w-full flex flex-col gap-10">
			<div class="w-full flex flex-col md:flex-row gap-12">
				<CatalogProductCarousel v-show="!isLoading" />
				<CatalogProductSkeleton v-if="isLoading" />
				<CatalogProductValue v-else :product="productData" />
			</div>
            <div>
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
	refresh,
} = useFetch(() => {
	const endpoint = isAuthenticated() ? 'api/v1/auth/product/auth/' : 'api/v1/product/'
	return `${url.value}${endpoint}${id}`
}, {
	headers: {
		...getAuthHeaders(),
		accept: 'application/json',
	},
})
definePageMeta({
	layout: 'catalog',
})
onMounted(() => {
	refresh()
})

watchEffect(() => {
	if (product.value) {
		productData.value = product.value.data
	}
})
</script>
