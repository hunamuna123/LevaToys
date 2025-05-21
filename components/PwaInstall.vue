<template>
  <div v-if="showInstallPrompt" class="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <img src="/icons/icon-192x192.png" alt="App Icon" class="w-12 h-12">
        <div>
          <h3 class="font-semibold">Установить Лёва</h3>
          <p class="text-sm text-gray-600">Добавьте приложение на главный экран для быстрого доступа</p>
        </div>
      </div>
      <div class="flex space-x-2">
        <button @click="installPWA" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Установить
        </button>
        <button @click="dismissPrompt" class="text-gray-500 hover:text-gray-700">
          Позже
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const showInstallPrompt = ref(false)
let deferredPrompt = null

onMounted(() => {

  window.addEventListener('beforeinstallprompt', (e) => {

    e.preventDefault()

    deferredPrompt = e

    showInstallPrompt.value = true
  })

  window.addEventListener('appinstalled', () => {
    showInstallPrompt.value = false
  })
})

const installPWA = async () => {
  if (!deferredPrompt) return

 
  deferredPrompt.prompt()
  

  const { outcome } = await deferredPrompt.userChoice
  

  showInstallPrompt.value = false
  

  deferredPrompt = null
}

const dismissPrompt = () => {
  showInstallPrompt.value = false
}
</script> 