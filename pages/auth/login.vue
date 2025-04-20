<script setup>
import { ref, onMounted } from 'vue'
import IMask from 'imask'

definePageMeta({
  layout: 'auth',
})

const phone = ref('')
const errorBoolen = ref(false)
const error = ref('')
const showPin = ref(false)

function sendData() {
  const cleaned = phone.value.replace(/\D/g, '')

  if (cleaned.length !== 11) {
    error.value = 'Введите корректный номер телефона'
    errorBoolen.value = true
    return
  }

  errorBoolen.value = false
  showPin.value = true
  console.log('Номер телефона:', phone.value)
}

onMounted(() => {
  const phoneInput = document.getElementById('phone-input')
  if (phoneInput) {
    IMask(phoneInput, {
      mask: '+{7} (000) 000-00-00',
    })
  }
})
</script>

<template>
  <NuxtLayout>
    <div class="text-start">
      <NuxtLink to="/" class="text-neutral-600 font-bold decoration-2 hover:underline text-sm">
        На главную
      </NuxtLink>
      <h1 class="text-4xl font-bold text-teal-500 my-2 mb-3">Добро пожаловать</h1>
      <h6 class="text-gray-500">Введите номер телефона, чтобы войти</h6>
    </div>

    <form @submit.prevent="sendData" class="mt-6">
      <div class="grid gap-y-4">
        <div>
          <label for="phone-input" class="block text-sm font-medium text-gray-700 mb-1">
            Номер телефона
          </label>
          <input
            id="phone-input"
            v-model="phone"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            class="w-full px-4 py-2 border rounded-lg text-sm focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>
        <div v-if="showPin" class="flex justify-center gap-14  " data-hs-pin-input>
          <input
            v-for="i in 4"
            :key="i"
            type="text"
            maxlength="1"
            class="block w-14 h-14 text-center border border-gray-300 rounded-md sm:text-sm focus:border-teal-500 focus:ring-teal-500 transition"
            placeholder="⚬"
            data-hs-pin-input-item
            :tabindex="i"
          />
        </div>

        <p v-if="errorBoolen" class="text-red-600 text-sm">{{ error }}</p>

        <button
          type="submit"
          class="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-teal-500 text-white hover:bg-teal-700 transition-colors duration-200"
        >
          Продолжить
        </button>

        <p class="text-center text-sm text-gray-600">
          Нужна регистрация?
          <NuxtLink
            to="/auth/register"
            class="text-teal-500 decoration-2 hover:underline font-medium"
          >
            Зарегистрироваться
          </NuxtLink>
        </p>
      </div>
    </form>
  </NuxtLayout>
</template>
