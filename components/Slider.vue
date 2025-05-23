<template>
    <div class="px-4 sm:px-6 lg:px-8 mx-auto mt-6">
        <div v-if="isLoading" class="w-full min-h-96">
            <div class="w-full h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        <div v-else data-hs-carousel='{
            "loadingClasses": "opacity-0",
            "dotsItemClasses": "hs-carousel-active:bg-orange-500 hs-carousel-active:w-6 bg-gray-300 h-1 w-4 rounded-full cursor-pointer duration-200",
            "isDraggable": true
        }' id="carousel" class="relative">
            <div class="hs-carousel relative overflow-hidden w-full min-h-96 bg-gray-100 rounded-lg">
                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0 cursor-grab hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
                    <div v-for="(item, index) in banner" :key="index" class="hs-carousel-slide w-full">
                        <div class="grid md:grid-cols-2 gap-4 h-96 bg-gray-100">
                            <div class="flex flex-col justify-center h-full gap-6 p-4 md:p-8">
                                <h2 class="text-2xl md:text-3xl lg:text-5xl font-bold">
                                    {{ item.name }}
                                </h2>
                                <p class="text-base md:text-lg text-gray-800 break-words line-clamp-3 md:line-clamp-5">
                                    {{ item.description }}
                                </p>
                            </div>
                            <figure class="relative w-full h-full">
                                <img v-if="item.image"
                                    class="w-full h-full object-contain md:object-cover rounded-xl"
                                    :src="getImageUrl(item.image)" 
                                    :alt="item.name || 'Изображение баннера'"
                                    @error="handleImageError" />
                                <div v-else class="flex flex-col items-center justify-center h-full bg-gray-100 rounded-xl p-4 md:p-8 text-center">
                                    <svg class="w-8 h-8 md:w-12 md:h-12 text-gray-400 mb-2 md:mb-3" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <h3 class="text-base md:text-lg font-semibold text-gray-700 mb-1">Нет изображения</h3>
                                    <p class="text-xs md:text-sm text-gray-500">Для этого баннера пока нет фотографии</p>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
        </div>
    </div>
</template>

<script>
import { api } from '@/store/api.js'
import axios from 'axios'
import { mapState } from 'pinia'

export default {
    data() {
        return {
            banner: [],
            isLoading: true,
        }
    },

    computed: {
        ...mapState(api, ['url']),
    },

    mounted() {
        this.getNews()
        document.addEventListener('touchstart', this.handleTouchStart, { passive: false })
    },

    beforeUnmount() {
        document.removeEventListener('touchstart', this.handleTouchStart)
    },

    methods: {
        handleTouchStart(e) {
            if (e.target.closest('.hs-carousel')) {
                e.preventDefault()
            }
        },

        getImageUrl(imageUrl) {
            if (!imageUrl) return '/toy.png'
            return imageUrl.startsWith('https') ? imageUrl : `https://${imageUrl}`
        },

        handleImageError(event) {
            event.target.src = '/toy.png'
        },

        async getNews() {
            this.isLoading = true
            try {
                const response = await axios.get(`${this.url}api/v1/main/banner/`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                this.banner = response.data.data
            } catch (error) {
                console.error('Error fetching news:', error)
            } finally {
                this.isLoading = false
                this.$nextTick(() => {
                    window.HSStaticMethods.autoInit()
                })
            }
        },
    },
}
</script>

<style scoped>
.hs-carousel {
    touch-action: pan-y;
}

.hs-carousel-body {
    touch-action: pan-y;
}

@media (max-width: 768px) {
    .hs-carousel-slide {
        min-height: 100%;
    }
    
    .hs-carousel-slide img {
        display: block !important;
        max-height: 200px;
        margin: 0 auto;
    }

    .hs-carousel-slide figure {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
