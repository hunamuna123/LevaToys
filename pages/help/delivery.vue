<script setup>
definePageMeta({
	layout: 'default',
})

const activeTab = ref('vertical-tab-with-border-1')

const switchTab = (tabId) => {
	activeTab.value = tabId
}
</script>
<template>
	<NuxtLayout>
		<div class="grid md:grid-cols-6">
			<div class="md:col-span-1 ">
				<div class="">
					<h2 class="text-2xl font-bold   ">{{ pageTitle }}</h2>
					<div class="flex py-6">
						<div>
							<nav class="flex flex-col space-y-2" aria-label="Tabs" role="tablist"
								aria-orientation="horizontal">

								<button type="button"
									class="hs-tab-active:bg-orange-100 hs-tab-active:text-orange-600 text-left px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-orange-600 hover:bg-orange-50 transition"
									:class="{ 'bg-orange-100 text-orange-600': activeTab === 'vertical-tab-with-border-1' }"
									id="vertical-tab-with-border-item-1"
									@click="switchTab('vertical-tab-with-border-1')" aria-selected="true"
									data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1"
									role="tab">
									Условия доставки
								</button>

								<button type="button"
									class="hs-tab-active:bg-orange-100 text-left hs-tab-active:text-orange-600 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-orange-600 hover:bg-orange-50 transition"
									:class="{ 'bg-orange-100 text-orange-600': activeTab === 'vertical-tab-with-border-2' }"
									id="vertical-tab-with-border-item-2"
									@click="switchTab('vertical-tab-with-border-2')" aria-selected="false"
									data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2"
									role="tab">
									Условия сотрудничества
								</button>

							</nav>
						</div>

					</div>
				</div>
			</div>
			<div class="md:col-span-5 p-3">
				<div class="">
					<div id="vertical-tab-with-border-1" role="tabpanel"
						aria-labelledby="vertical-tab-with-border-item-1"
						v-show="activeTab === 'vertical-tab-with-border-1'">
						<div class=" mx-auto divide-y divide-gray-200">
							<div class="py-6 first:pt-0 last:pb-0">
								<div class="flex gap-x-5">

									<div class="grow">
										<p class="mt-1 text-gray-500">
											Вам не нужно заниматься поиском поставщиков в своём регионе, мы отправим Вам
											мягкую игрушку в любой уголок страны и даже в страны таможенного союза.
											<br><br>
											Наша компания сотрудничает только с проверенными транспортными компаниями:
											ПЭК, Деловые Линии, Байкал Сервис, Энергия.<br><br>
											Доставка в другие транспортные компании, производится при заказе от 30 000
											руб.<br><br>
											Доставка до ТК, целиком за наш счёт!?<br><br>
											Бесплатная доставка по г. Москва (в пределах МКАД) при заказе от 30 000
											руб.<br><br>
											Стоимость и сроки доставки за МКАД обсуждаются отдельно.<br><br>
											Доставка производится с 9:00 до 18:00.<br><br>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="vertical-tab-with-border-2" role="tabpanel"
						aria-labelledby="vertical-tab-with-border-item-2"
						v-show="activeTab === 'vertical-tab-with-border-2'">
						<h3 class="text-xl">Сертификаты</h3>
						<p class="text-gray-500 my-2">

							- Минимальная сумма заказа 30 000 рублей <br><br>
							- Оплата производится 100% авансовым платежом.<br><br>
							- Выставляем счёт, только после сборки Вашего заказа.<br><br>
							- С момента выставления счёта, резервируем игрушку для Вас. Максимальный срок резерва, 5
							рабочих дней.<br><br>
							- Доставка до терминала транспортной компании, полностью за наш счет. (Со списком ТК
							партнеров, более подробно в графе «Доставка»)<br><br>
							- Отгрузка заказов производится со склада в Москве.<br><br>
							- Поможем Вам с выбором игрушки, определим спектр, подходящий под Вашу концепцию.<br><br>
							- С удовольствием составим Договор поставки, для сотрудничества.<br><br>
						</p>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>