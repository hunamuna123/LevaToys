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
import { ref, onMounted, watchEffect } from 'vue'
import { useFetch, useRoute } from '#app'
import { api } from '@/store/api.js'

const productData = ref(null)
const route = useRoute()

const id = route.params.id
const apiUrl = api().url

const {
	data: product,
	pending: isLoading,
	refresh,
} = useFetch(() => `http://85.175.100.129:72/api/v1/product/${id}`, {
	headers: {
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
