<template>
    <div class="border-b  border-gray-200 mb-6">
        <nav class="flex justify-between gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <div class="flex gap-x-2 justify-end">
                <button type="button"
                    class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b border-gray-300-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none active"
                    id="tabs-with-icons-item-1" aria-selected="true" data-hs-tab="#tabs-with-icons-1"
                    aria-controls="tabs-with-icons-1" role="tab">
                    Характеристики
                </button>
                <button type="button"
                    class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b border-gray-300-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none"
                    id="tabs-with-icons-item-2" aria-selected="false" data-hs-tab="#tabs-with-icons-2"
                    aria-controls="tabs-with-icons-2" role="tab">
                    Описание
                </button>
                <button type="button"
                    class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b border-gray-300-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none"
                    id="tabs-with-icons-item-3" aria-selected="false" data-hs-tab="#tabs-with-icons-3"
                    aria-controls="tabs-with-icons-3" role="tab">
                    Оплата
                </button>
                <button type="button"
                    class="hs-tab-active:font-semibold hs-tab-active:border-teal-600 hs-tab-active:text-teal-600 py-4 px-1 inline-flex items-center gap-x-2 border-b border-gray-300-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-teal-600 focus:outline-hidden focus:text-teal-600 disabled:opacity-50 disabled:pointer-events-none"
                    id="tabs-with-icons-item-4" aria-selected="false" data-hs-tab="#tabs-with-icons-4"
                    aria-controls="tabs-with-icons-4" role="tab">
                    Доставка
                </button>
            </div>
        </nav>
    </div>
    <div id="tabs-with-icons-1" role="tabpanel" aria-labelledby="tabs-with-icons-item-1">
        <div class="overflow-x-auto">
            <table class="min-w-full text-sm text-left text-gray-700">
                <tbody>
                    <tr class="border-b border-gray-300">
                        <th class="py-4 px-4 font-medium w-1/2">Ассортимент</th>
                        <td class="py-4 px-4">Без возможности выбора</td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <th class="py-4 px-4 font-medium">Материал</th>
                        <td class="py-4 px-4">Искусственный мех, текстильные материалы, полисифирное волокно</td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <th class="py-4 px-4 font-medium">Штрих код</th>
                        <td class="py-4 px-4">4603301200320</td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <th class="py-4 px-4 font-medium">Размер</th>
                        <td class="py-4 px-4">100 см.</td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <th class="py-4 px-4 font-medium">Пол</th>
                        <td class="py-4 px-4">Унисекс</td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <th class="py-4 px-4 font-medium">Возраст</th>
                        <td class="py-4 px-4">от 3-х лет</td>
                    </tr>
                    <tr class="border-b border-gray-300 ">
                        <th class="py-4 px-4 font-medium">Сертификат</th>
                        <td class="py-4 px-4">EAC</td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <th class="py-4 px-4 font-medium">Условия хранения</th>
                        <td class="py-4 px-4">Запрещается хранить в помещениях с высокой влажностью</td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <th class="py-4 px-4 font-medium">Тип упаковки</th>
                        <td class="py-4 px-4">На выбор</td>
                    </tr>
                    <tr>
                        <th class="py-4 px-4 font-medium">Вес</th>
                        <td class="py-4 px-4">325 грамм</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>

    <div id="tabs-with-icons-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-2">
        <p class="text-gray-600">
				{{ product?.description || 'Отсутствует' }}
			</p>
    </div>

    <div id="tabs-with-icons-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-3">
        <div class="flex flex-col gap-2 text-md">
            <p>- Минимальная сумма заказа 10 000 рублей</p>
            <p>- Оплата производится 100% авансовым платежом</p>
            <p>- Выставляем счёт, только после сборки Вашего заказа.</p>
            <p>- С момента выставления счёта, резервируем игрушку для Вас. Максимальный срок резерва, 5 рабочих дней.
            </p>

        </div>
    </div>

    <div id="tabs-with-icons-4" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-4">
        <div class="flex flex-col gap-2 text-md">
            <p class="my-5">Вам не нужно заниматься поиском поставщиков в своём регионе, мы отправим Вам мягкую игрушку в любой
                уголок страны и даже в страны таможенного союза. Наша компания сотрудничает только с проверенными
                транспортными компаниями: ПЭК, Деловые Линии, Байкал Сервис, Энергия.</p>

            <p>- Доставка до терминала транспортной компании, полностью за наш счет.</p>
            <p>- Бесплатная доставка по г. Москва (в пределах МКАД) при заказе от 20 000 руб.</p>
            <p>- Отгрузка заказов производится со склада в Москве.</p>
            <p>- С удовольствием составим Договор поставки, для сотрудничества.</p>
            <p>Подробнее о условиях доставки в разделе <NuxtLink to="/help/delivery" class="text-teal-500">Доставка</NuxtLink></p>
        </div>
    </div>
</template>

<script setup>
defineProps({
	product: {
		type: Object,
		default: () => ({})
	}
})
</script>