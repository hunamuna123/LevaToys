<script setup>
import { ref, onMounted } from 'vue'
import { api } from '@/store/api'
import { isAuthenticated, getAuthHeaders } from '@/utils/auth'

definePageMeta({
	layout: 'default',
	title: 'Статьи',
})

const route = useRoute()
const newsId = route.params.id
const apiStore = api()
const url = computed(() => apiStore.url)

const news = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchNews = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await fetch(`${url.value}api/v1/news/${newsId}/`, {
      headers: {
        ...getAuthHeaders(),
        'accept': 'application/json',
      },
    })
    
    const result = await response.json()
    
    if (result.message === 'OK') {
  
      if (!result.data.image || result.data.image.length === 0) {
        result.data.image = ['/toy.png']
      } else {
      
        result.data.image = result.data.image.map(img => img.image)
      }
      news.value = result.data
    } else {
      error.value = 'Ошибка запроса новости'
    }
  } catch (err) {
    error.value = 'Ошибка запроса новости'
    console.error('Ошибка запроса', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchNews()
})
const formattedImageUrl = (images) => {
	if (!images || images.length === 0) return '/toy.png'
	const imageUrl = images[0]?.image || images[0]
	return imageUrl.startsWith('https') ? imageUrl : `https://${imageUrl}`
}

</script>
<template>
	<NuxtLayout>
		<div class="mx-auto my-6">
			<div v-if="loading" class="flex justify-center items-center h-64">
				<div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
			</div>

			<div v-else-if="error" class="text-red-500 text-center">
				{{ error }}
			</div>

			<template v-else-if="news">
				<p class="my-4 text-xl font-semibold text-black">
					{{ news.name }}
				</p>

				<img 
					v-if="news.image?.length > 0"
					:src="formattedImageUrl(news.image)" 
					:alt="news.name" 
					class="w-full md:р-64 h-128 object-cover rounded-lg shadow-md" 
				/>

				<div class="mt-6 prose max-w-none" v-html="news.description">
				</div>
			</template>
		</div>
	</NuxtLayout>
</template>