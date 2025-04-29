
<template>
    <div class="px-4 sm:px-6 lg:px-8 mx-auto mt-6">
        <div v-if="isLoading" class="w-full min-h-96">
            <SkeletonSlider/>
        </div>
        <div v-else data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-teal-700 hs-carousel-active:border-teal-700 size-3 border border-gray-400 rounded-full cursor-pointer",
        "isAutoPlay": false
      }' id="carousel" class="relative">
            <div class="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
                <div
                    class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-all duration-700 opacity-0">
                    <div v-for="(item, index) in banner" :key="index" class="hs-carousel-slide">
                        <div class="flex justify-center h-full bg-teal-100 p-6">
                            <span class="self-center text-4xl text-black transition duration-700">
                                {{ item.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button"
                class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-black hover:bg-teal-800/10 focus:outline-hidden focus:bg-teal-800/10 rounded-s-lg">
                <span class="text-2xl" aria-hidden="true">
                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                </span>
                <span class="sr-only">Previous</span>
            </button>

            <button type="button"
                class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-black hover:bg-teal-800/10 focus:outline-hidden focus:bg-teal-800/10 rounded-e-lg">
                <span class="sr-only">Next</span>
                <span class="text-2xl" aria-hidden="true">
                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </span>
            </button>

            <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
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
                let response = await axios.get(`${this.url}api/v1/main/banner/`, {
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
					let carouselElement = document.getElementById('carousel')

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

