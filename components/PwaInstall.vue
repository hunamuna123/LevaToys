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
  // Слушаем событие beforeinstallprompt
  window.addEventListener('beforeinstallprompt', (e) => {
    // Предотвращаем автоматическое появление prompt
    e.preventDefault()
    // Сохраняем событие для использования позже
    deferredPrompt = e
    // Показываем наш кастомный prompt
    showInstallPrompt.value = true
  })

  // Скрываем prompt после успешной установки
  window.addEventListener('appinstalled', () => {
    showInstallPrompt.value = false
  })
})

const installPWA = async () => {
  if (!deferredPrompt) return

  // Показываем нативный prompt
  deferredPrompt.prompt()
  
  // Ждем ответа пользователя
  const { outcome } = await deferredPrompt.userChoice
  
  // Скрываем наш кастомный prompt
  showInstallPrompt.value = false
  
  // Очищаем сохраненное событие
  deferredPrompt = null
}

const dismissPrompt = () => {
  showInstallPrompt.value = false
}
</script> 