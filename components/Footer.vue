<template>
  <footer class="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
      <!-- Левая половина -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h4 class="text-md font-semibold text-gray-900 uppercase">Интернет магазин</h4>
          <div class="mt-3 grid space-y-3 text-sm">
            <p><NuxtLink class="inline-flex gap-x-2 text-gray-600 hover:text-black focus:outline-hidden focus:text-black"
                to="/catalog">Каталог</NuxtLink></p>
          </div>
        </div>
        <div>
          <h4 class="text-md font-semibold text-gray-900 uppercase">Компания</h4>
          <div class="mt-3 grid space-y-3 text-sm">
            <p><NuxtLink class="inline-flex gap-x-2 text-gray-600 hover:text-black focus:outline-hidden focus:text-black"
                to="/company">О компании</NuxtLink></p>
            <p><NuxtLink class="inline-flex gap-x-2 text-gray-600 hover:text-black focus:outline-hidden focus:text-black"
                to="/company">Лицензии</NuxtLink></p>
            <p><NuxtLink class="inline-flex gap-x-2 text-gray-600 hover:text-black focus:outline-hidden focus:text-black"
                to="/company">Реквизиты</NuxtLink></p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h4 class="text-md font-semibold text-gray-900 uppercase">Помощь</h4>
          <div class="mt-3 grid space-y-3 text-sm">
            <p><NuxtLink class="inline-flex gap-x-2 text-gray-600 hover:text-black focus:outline-hidden focus:text-black"
                to="/help/delivery">Условия доставки</NuxtLink></p>
            <p><NuxtLink class="inline-flex gap-x-2 text-gray-600 hover:text-black focus:outline-hidden focus:text-black"
                to="/help/delivery">Условия сотрудничества</NuxtLink></p>
          </div>
        </div>
        <div>
          <h4 class="text-md font-semibold text-gray-900 uppercase">Контакты</h4>
          <div class="mt-3 grid space-y-3 text-sm">
            <p><NuxtLink class="inline-flex gap-x-2 text-gray-600 hover:text-black focus:outline-hidden focus:text-black"
                to="#">+7-------</NuxtLink></p>
            <p><NuxtLink class="inline-flex gap-x-2 text-gray-600 hover:text-black focus:outline-hidden focus:text-black"
                to="#">mail@---</NuxtLink></p>
          </div>
        </div>


      </div>
    </div>
    <div class="pt-5 mt-5 border-t border-gray-200">
      <div class="sm:flex sm:justify-between sm:items-center">
        <div class="flex flex-wrap items-center gap-3">
          <p class="text-gray-400 text-sm">© 2025 Оптовый интернет-магазин мягких игрушек LevaToys</p>
        </div>
        <div class="flex gap-3 text-sm text-gray-400">
          <p>
            <NuxtLink to="/license">
              Конфиденциальность
            </NuxtLink>
          </p>
          <p>
            <NuxtLink to="/offer">
              Оферта
            </NuxtLink>
          </p>
        </div>

      </div>
    </div>
  </footer>
</template>
