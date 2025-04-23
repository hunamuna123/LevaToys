<template>
    <main class="max-w-[90rem] mx-auto ">
        <HeaderNavbar />
        <div
            class="mt-2 p-6 bg-white rounded-lg  w-full px-4 sm:px-6 lg:px-8 mx-auto mt-[68px] lg:mt-[72px] min-h-[60vh] mb-20">
            <h2 class="text-2xl font-semibold mb-1">Профиль</h2>
            <p class="text-sm text-gray-500 mb-6">Настройте свой профиль как вам удобно</p>

            <form class="space-y-6">


                <!-- Full name -->
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-800">ФИО</label>
                        <input type="text" placeholder="Фамилия"
                            class="mt-1 w-full border rounded-md px-3 border-teal-200 py-2 focus:outline-none  focus:border-teal-300" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-800 invisible">span</label>
                        <input type="text" placeholder="Имя"
                            class="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none border-teal-200 focus:border-teal-300" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-800 invisible">span</label>
                        <input type="text" placeholder="Отчество"
                            class="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none border-teal-200 focus:border-teal-300" />
                    </div>
                </div>


                <div>
                    <label class="block text-sm font-medium text-gray-800">Электронная почта</label>
                    <input type="email" placeholder="work@levatoys.ru"
                        class="mt-1 w-full border  rounded-md px-3 py-2 focus:outline-none border-teal-200 focus:border-teal-300" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-800">ИНН</label>
                    <input type="text" placeholder="Введите свой ИНН"
                        class="mt-1 w-full border  rounded-md px-3 py-2 focus:outline-none border-teal-200 focus:border-teal-300" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-800">Имя компании</label>
                    <input type="text" placeholder="Введите название своей компании"
                        class="mt-1 w-full border  rounded-md px-3 py-2 focus:outline-none border-teal-200 focus:border-teal-300" />
                </div>


                <div class="flex justify-end gap-4">

                    <button type="submit" class="px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600">
                        Сохранить </button>
                </div>
            </form>
        </div>

        <Footer />
    </main>
</template>
