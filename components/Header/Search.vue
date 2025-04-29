<template>
    <div class="">
        <input 
            v-model="searchQuery"
            @input="handlesearch"
            type="text" 
            placeholder="Поиск..." 
            class="py-1.5 md:mt-0 mt-2 px-4 md:w-full w-full block border outline-none border-gray-200 rounded-lg focus:border-blue-100 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        >
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
let searchTimeout = null

const handlesearch = () => {
    // Clear previous timeout
    if (searchTimeout) {
        clearTimeout(searchTimeout)
    }

    // Set new timeout to prevent too many requests
    searchTimeout = setTimeout(() => {
        if (searchQuery.value.trim()) {
            router.push({
                path: '/catalog',
                query: { search: searchQuery.value.trim() }
            })
        }
    }, 500) // 500ms delay before search
}
</script>