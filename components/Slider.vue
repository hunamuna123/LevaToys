<template>
    <div class="px-4 sm:px-6 lg:px-8 mx-auto mt-6">
        <div v-if="isLoading" class="w-full min-h-96">
            <div class="w-full h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        <div v-else data-hs-carousel='{
            "loadingClasses": "opacity-0",
            "dotsItemClasses": "hs-carousel-active:bg-teal-500 hs-carousel-active:w-6 bg-gray-300 h-1 w-4 rounded-full cursor-pointer duration-200",
            "isDraggable": true
        }' id="carousel" class="relative">
            <div class="hs-carousel relative overflow-hidden w-full min-h-96 bg-gray-100 rounded-lg">
                <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0 cursor-grab hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
                    <div v-for="(item, index) in banner" :key="index" class="hs-carousel-slide w-full">
                        <div class="grid md:grid-cols-2 gap-4 h-96 bg-gray-100">
                            <div class="flex flex-col justify-center h-full gap-6 p-8">
                                <h2 class="text-3xl font-bold lg:text-5xl">
                                    {{ item.name }}
                                </h2>
                                <p class="text-lg text-gray-800 break-words line-clamp-5">
                                    {{ item.description }}
                                </p>
                            </div>
                            <figure class="relative w-full h-full">
                                <img v-if="item.image"
                                    class="hidden md:block w-full h-full object-cover rounded-xl"
                                    :src="`http://${item.image}`" 
                                    alt="Изображение баннера" />
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
    },

    methods: {
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
                    const carouselElement = document.getElementById('carousel')

                    window.HSStaticMethods.autoInit()

                    if (carouselElement) {
                        window.HSCarousel = new HSCarousel(carouselElement)
                        window.HSCarousel.init()
                    } else {
                        console.error('Carousel element not found')
                    }
                })
            }
        },
    },
}
</script>
