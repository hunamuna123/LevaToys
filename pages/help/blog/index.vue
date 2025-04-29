<template>
	<NuxtLayout>
		<div class=" py-10  lg:py-14 mx-auto">
			<div class="overflow-visible pb-4">
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 auto-cols-auto grid-flow-row">
					<SkeletonNews v-if="loading" v-for="n in 16" />
					<template v-else>
						<div v-for="(card, index) in news" :key="card.id"
							class="group hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 p-3 rounded-xl transition"
							href="#">
							<div class="p-2 w-full h-50 overflow-hidden">
								<img class="w-full h-full rounded-xl object-cover" :src="formattedImageUrl(card.image)":alt="card.name" />
							</div>
							<h3 class="text-xl p-2 text-gray-800">
								{{ card.name }}
							</h3>
							<div class="text-sm p-2 text-gray-600 line-clamp-3"
								v-html="getFirstParagraph(card.description)"></div>
							<p class="mt-3 inline-flex items-center gap-x-1 p-2 text-sm font-semibold text-gray-800">
								<NuxtLink :to="`/help/blog/${card.id}`">Читать подробнее</NuxtLink>
								<svg class="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
									xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round">
									<path d="m9 18 6-6-6-6" />
								</svg>
							</p>
						</div>
					</template>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
<script setup>

import { ref, onMounted, computed } from 'vue'
import { api } from "@/store/api.js"
import { isAuthenticated, getAuthHeaders } from '@/utils/auth'

const apiStore = api()
const url = computed(() => apiStore.url)
const news = ref([])
const error = ref(null)
const loading = ref(true)

const formattedImageUrl = (images) => {
	if (!images || images.length === 0) return '/toy.png'
	const imageUrl = images[0]?.image || images[0]
	return imageUrl.startsWith('http') ? imageUrl : `http://${imageUrl}`
}

const getFirstParagraph = (html) => {
	if (!html) return ''
	// Create a temporary div to parse HTML
	const tempDiv = document.createElement('div')
	tempDiv.innerHTML = html
	// Get the first paragraph or return the first text content
	const firstP = tempDiv.querySelector('p')
	return firstP ? firstP.textContent : tempDiv.textContent
}

const fetchNews = async () => {
	loading.value = true
	error.value = null

	try {
		const endpoint = 'api/v1/news/'
		const response = await fetch(`${url.value}${endpoint}`, {
			headers: {
				...getAuthHeaders(),
				'accept': 'application/json',
			},
		})

		const result = await response.json()

		if (result.message === 'OK') {
			news.value = result.data
		} else {
			error.value = 'Ошибка запроса новостей'
		}
	} catch (err) {
		error.value = 'Ошибка запроса новостей'
		console.error('Ошибка запроса', err)
	} finally {
		loading.value = false
	}
}
definePageMeta({
	layout: 'default',
	title: 'Статьи',
})
onMounted(() => {
	fetchNews()
})
</script>