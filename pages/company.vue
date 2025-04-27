<script setup>
definePageMeta({
	layout: 'default',
	title: 'О нас',
})

const activeTab = ref('vertical-tab-with-border-1')

const switchTab = (tabId) => {
	activeTab.value = tabId
}
</script>
<template>
	<NuxtLayout>
		<div class="grid md:grid-cols-6">
			<div class="md:col-span-1">
				<div class="">
					<h2 class="text-2xl font-bold  ">{{ pageTitle }}</h2>
					<div class="flex py-6">
						<div>
							<nav class="flex flex-col space-y-2" aria-label="Tabs" role="tablist"
								aria-orientation="horizontal">

								<button type="button"
									class="hs-tab-active:bg-teal-100 hs-tab-active:text-teal-600 text-left px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-teal-600 hover:bg-teal-50 transition"
									:class="{ 'bg-teal-100 text-teal-600': activeTab === 'vertical-tab-with-border-1' }"
									id="vertical-tab-with-border-item-1" 
									@click="switchTab('vertical-tab-with-border-1')"
									aria-selected="true"
									data-hs-tab="#vertical-tab-with-border-1" 
									aria-controls="vertical-tab-with-border-1"
									role="tab">
									О компании
								</button>

								<button type="button"
									class="hs-tab-active:bg-teal-100 text-left hs-tab-active:text-teal-600 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-teal-600 hover:bg-teal-50 transition"
									:class="{ 'bg-teal-100 text-teal-600': activeTab === 'vertical-tab-with-border-2' }"
									id="vertical-tab-with-border-item-2" 
									@click="switchTab('vertical-tab-with-border-2')"
									aria-selected="false"
									data-hs-tab="#vertical-tab-with-border-2" 
									aria-controls="vertical-tab-with-border-2"
									role="tab">
									Лицензии
								</button>

								<button type="button"
									class="hs-tab-active:bg-teal-100 text-left hs-tab-active:text-teal-600 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-teal-600 hover:bg-teal-50 transition"
									:class="{ 'bg-teal-100 text-teal-600': activeTab === 'vertical-tab-with-border-3' }"
									id="vertical-tab-with-border-item-3" 
									@click="switchTab('vertical-tab-with-border-3')"
									aria-selected="false"
									data-hs-tab="#vertical-tab-with-border-3" 
									aria-controls="vertical-tab-with-border-3"
									role="tab">
									Реквизиты
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
									<svg class="shrink-0 mt-1 size-5 text-gray-500" xmlns="http://www.w3.org/2000/svg"
										width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
										stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<circle cx="12" cy="12" r="10" />
										<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
										<path d="M12 17h.01" />
									</svg>

									<div class="grow">
										<h3 class="md:text-lg font-semibold text-gray-800">
											Plush.team – оптовый интернет-магазин мягкой игрушки.
										</h3>
										<p class="mt-1 text-gray-500">
											- Вы устали искать нужную вам мягкую игрушку по поставщикам? <br>
											- Вы переплачиваете за услуги транспортных компаний делая заказы у разных
											поставщиков?<br>
											- Ваша бухгалтерия загружена от количества сопроводительной
											документации?<br>
											- Вам надоело, что Вы заказываете одну игрушку, а на момент оплаты
											номенклатура
											изменилась?<br>
										</p>
									</div>
								</div>
							</div>

							<div class="py-6 first:pt-0 last:pb-0">
								<div class="flex gap-x-5">
									<svg class="shrink-0 mt-1 size-5 text-gray-500" xmlns="http://www.w3.org/2000/svg"
										width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
										stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<circle cx="12" cy="12" r="10" />
										<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
										<path d="M12 17h.01" />
									</svg>

									<div class="grow">
										<h3 class="md:text-lg font-semibold text-gray-800">
											Вы обратились по адресу!
										</h3>
										<p class="mt-1  text-gray-500">
											Мы являемся не только производителями мягкой игрушки, но и консолидируем
											крупнейших поставщиков из стран СНГ и Китая. <br><br>

											Это позволяет нам организовать более 800 наименований мягкой игрушки. Мы
											уверены, что у нас вы найдёте нужную вам игрушку. А в случае её отсутствия,
											наш
											отдел обеспечения сделает всё, чтобы данная игрушка оказалась у нас в
											кратчайшие
											сроки.<br><br>

											Говорят, что мир построен на трёх столпах.<br><br>

											Мы придерживаемся данного предположения и в нашей работе.<br><br>

											Первый столп — это наша философия "клиент всегда прав", которая является
											основой
											нашей работы.<br><br>
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

							Сертификат соответствия — документ, подтверждающий соответствие продукции требованиям
							качества и безопасности, установленными для нее действующими стандартами и правилами.
						</p>
					</div>
					<div id="vertical-tab-with-border-3" role="tabpanel"
						aria-labelledby="vertical-tab-with-border-item-3"
						v-show="activeTab === 'vertical-tab-with-border-3'">
						<div class="overflow-x-auto">
							<table class="min-w-full text-sm text-left text-gray-700">
								<tbody>
									<tr class="border-b border-gray-300">
										<th class="py-4  font-medium w-1/2">Полное наименование:</th>
										<td class="py-4 "> Общество с ограниченной ответственностью «Плюш Тим»</td>
									</tr>
									<tr class="border-b border-gray-300">
										<th class="py-4  font-medium">Сокращенное наименование:</th>
										<td class="py-4 "> ООО «Плюш Тим»</td>
									</tr>
									<tr class="border-b border-gray-300">
										<th class="py-4  font-medium">ИНН/КПП:</th>
										<td class="py-4 "> 5027336511/502701001</td>
									</tr>
									<tr class="border-b border-gray-300">
										<th class="py-4  font-medium">Юридический адрес:</th>
										<td class="py-4 "> 140002, Московская область, г.о. Люберцы, г. Люберцы, ул.
											Колхозная, д. 8А , помещ. 24</td>
									</tr>
									<tr class="border-b border-gray-300">
										<th class="py-4  font-medium">Фактический адрес:</th>
										<td class="py-4 "> 140002, Московская область, г.о. Люберцы, г. Люберцы, ул.
											Колхозная, д. 8А , помещ. 24</td>
									</tr>
									<tr class="border-b border-gray-300">
										<th class="py-4  font-medium">Телефон:</th>
										<td class="py-4 "> +7(495)129-33-41</td>
									</tr>
									<tr class="border-b border-gray-300 ">
										<th class="py-4  font-medium">Электронная почта:</th>
										<td class="py-4 ">sales@plush.team</td>
									</tr>
									<tr class="border-b border-gray-300">
										<th class="py-4  font-medium">Банковские реквизиты:</th>
										<td class="py-4 "> БИК 044030653
											Р/с №40702810255710003733 СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК
											Кор/счет 30101810500000000653</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>