<template>
    <NuxtLayout>
        <div class="container mx-auto  min-h-screen">
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-2xl font-semibold">Корзина</h1>
                <div class="text-sm text-gray-500">
                    {{ totalItems }} {{ getNounPluralForm(totalItems, ['товар', 'товара', 'товаров']) }}
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2 max-h-[calc(100vh-12rem)] overflow-y-auto 
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-thumb]:bg-gray-300">
                    <TransitionGroup name="list" tag="div" v-if="cartItems.length">
                        <div v-for="item in cartItems" :key="item.id"
                            class="flex flex-col md:flex-row gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                            <div class="w-full md:w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                                <img :src="item.thumbnail || '/toy.png'" :alt="item.name"
                                    class="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110">
                            </div>
                            <div class="flex-1">
                                <div class="flex flex-col md:flex-row justify-between items-start mb-2">
                                    <div>
                                        <h3 class="font-medium hover:text-teal-500 transition-colors duration-200">
                                            {{ item.name }}
                                        </h3>
                                        <p class="text-sm text-gray-500">{{ formatPrice(item.price) }} ₽/шт</p>
                                        <div class="text-sm text-gray-500 mt-1">
                                            <p v-if="item.article">Артикул: {{ item.article }}</p>
                                            <p v-if="item.product_code">Код товара: {{ item.product_code }}</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-2 mt-2 md:mt-0">
                                        <button @click="removeItem(item)"
                                            class="text-gray-400 hover:text-red-500 transition-colors duration-200">
                                            <span class="i-heroicons-trash"></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center mt-4">
                                    <div
                                        class="py-2 px-3 inline-block  rounded-lg hover:border-teal-500 transition-colors duration-200">
                                        <div class="flex items-center gap-x-1.5">
                                            <button type="button" @click="updateQuantity(item, item.quantity - 1)"
                                                :disabled="item.quantity <= 1"
                                                class="size-6 inline-flex justify-center items-center gap-x-2 p-4 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200"
                                                tabindex="-1" aria-label="Уменьшить">
                                                <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                </svg>
                                            </button>
                                            <input type="text" :value="item.quantity"
                                                @input="(e) => handleQuantityInput(e, item)"
                                                @blur="(e) => validateQuantityOnBlur(e, item)"
                                                class="w-12 bg-transparent border border-gray-200 rounded-lg focus:outline-none text-gray-800 text-center  p-1"
                                                aria-label="Количество">
                                            <button type="button" @click="updateQuantity(item, item.quantity + 1)"
                                                :disabled="item.quantity >= (item.count_stok || 99)"
                                                class="size-6 inline-flex justify-center items-center gap-x-2 text-sm p-4 font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200"
                                                tabindex="-1" aria-label="Увеличить">
                                                <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5v14"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="font-medium mt-2 md:mt-0">
                                        <span class="text-teal-500">{{ formatPrice(item.price * item.quantity) }}
                                            ₽</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TransitionGroup>
                    <div v-else class="text-center py-16">
                        <div class="mb-4">
                            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-medium text-gray-900">Корзина пуста</h3>
                        <p class="mt-1 text-sm text-gray-500">Добавьте товары в корзину, чтобы оформить заказ</p>
                        <div class="mt-6">
                            <NuxtLink to="/catalog"
                                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-teal-500 hover:bg-teal-600 transition-colors duration-200">
                                Перейти в каталог
                            </NuxtLink>
                        </div>
                    </div>

                    <button v-if="cartItems.length" @click="clearCart"
                        class="text-teal-500 hover:text-teal-600 border-teal-300 border rounded-lg p-2 transition-colors duration-200 mt-4">
                        Очистить корзину
                    </button>
                </div>

                <!-- Итого -->
                <div class="lg:col-span-1">
                    <div class="bg-gray-50 p-6 rounded-lg sticky top-4">
                        <div class="space-y-4">
                            <div class="flex justify-between items-center text-sm text-gray-500">
                                <span>Товары ({{ totalItems }})</span>
                                <span>{{ formatPrice(totalSum) }} ₽</span>
                            </div>
                            <div class="border-t border-gray-200 pt-4">
                                <div class="flex justify-between items-center mb-6">
                                    <span class="text-xl font-medium">Итого</span>
                                    <span class="text-xl font-medium text-teal-500">{{ formatPrice(totalSum) }} ₽</span>
                                </div>
                                <button @click="proceedToCheckout" :disabled="!cartItems.length"
                                    class="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors duration-200 disabled:opacity-50 disabled:hover:bg-teal-500">
                                    Перейти к оформлению
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
interface CartItem {
    id: number
    name: string
    description?: string
    product_code?: number
    article?: string
    rating?: number
    in_stock?: boolean
    count_stok?: number
    price: number | null
    oldPrice?: number | null
    thumbnail?: string | null
    feedback_count?: number
    created?: number
    updated?: number
    category?: any
    color?: any
    brand?: any
    sizes?: Array<{
        id: number
        size: {
            name: string
            description: string
            id: number
        }
        product_id: number
        isAvailable: boolean
    }>
    colors?: any[]
    images?: any[]
    quantity: number
}

definePageMeta({
    layout: 'catalog',
})

const cartItems = ref<CartItem[]>([])
const totalItems = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0))
const totalSum = computed(() => cartItems.value.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0))

// Загрузка корзины
onMounted(() => {
    loadCart()
})

// Загрузка данных из localStorage
function loadCart(): void {
    try {
        const stored = localStorage.getItem('busket')
        if (stored) {
            const parsed = JSON.parse(stored)
            cartItems.value = parsed.map((item: CartItem) => ({
                ...item,
                quantity: item.quantity || 1
            }))
        }
    } catch (error) {
        console.error('Ошибка при загрузке корзины:', error)
    }
}

// Сохранение в localStorage
function saveCart(): void {
    localStorage.setItem('busket', JSON.stringify(cartItems.value))
}

// Обновление количества
function updateQuantity(item: CartItem, newQuantity: number): void {
    const quantity = Math.max(1, Math.min(newQuantity, item.count_stok || 99))
    item.quantity = quantity
    saveCart()
}

// Обработка ввода количества
function handleQuantityInput(event: Event, item: CartItem): void {
    const input = event.target as HTMLInputElement
    const value = input.value.replace(/[^0-9]/g, '')
    input.value = value

    if (value) {
        const quantity = parseInt(value)
        if (!isNaN(quantity)) {
            updateQuantity(item, quantity)
        }
    }
}

// Валидация при потере фокуса
function validateQuantityOnBlur(event: Event, item: CartItem): void {
    const input = event.target as HTMLInputElement
    let quantity = parseInt(input.value)

    if (isNaN(quantity) || quantity < 1) {
        quantity = 1
    } else if (quantity > (item.count_stok || 99)) {
        quantity = item.count_stok || 99
    }

    input.value = quantity.toString()
    updateQuantity(item, quantity)
}

// Удаление товара
function removeItem(item: CartItem): void {
    if (confirm(`Вы уверены, что хотите удалить "${item.name}" из корзины?`)) {
        cartItems.value = cartItems.value.filter(i => i.id !== item.id)
        saveCart()
    }
}

// Очистка корзины
function clearCart(): void {
    if (confirm('Вы уверены, что хотите очистить корзину?')) {
        cartItems.value = []
        saveCart()
    }
}

// Форматирование цены
function formatPrice(price: number | null): string {
    if (!price) return '0'
    return new Intl.NumberFormat('ru-RU').format(price)
}

// Склонение существительных
function getNounPluralForm(number: number, forms: [string, string, string]): string {
    const cases = [2, 0, 1, 1, 1, 2]
    return forms[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

function proceedToCheckout(): void {
    navigateTo('/checkout')
}
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}

.list-leave-active {
    position: absolute;
}

button {
    user-select: none;
    -webkit-user-select: none;
}
</style>