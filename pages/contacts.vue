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
					<h2 class="text-2xl font-bold  ">{{ pageTitle }}</h2>
					<div class="flex py-6">
						<div>
							<nav class="flex flex-col space-y-2" aria-label="Tabs" role="tablist"
								aria-orientation="horizontal">

								<button type="button"
									class="hs-tab-active:bg-teal-100 hs-tab-active:text-teal-600 text-left px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-teal-600 hover:bg-teal-50 transition"
									:class="{ 'bg-teal-100 text-teal-600': activeTab === 'vertical-tab-with-border-1' }"
									id="vertical-tab-with-border-item-1"
									@click="switchTab('vertical-tab-with-border-1')" aria-selected="true"
									data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1"
									role="tab">
									Контакты
								</button>
					
								<button type="button"
									class="hs-tab-active:bg-teal-100 text-left hs-tab-active:text-teal-600 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-teal-600 hover:bg-teal-50 transition"
									:class="{ 'bg-teal-100 text-teal-600': activeTab === 'vertical-tab-with-border-2' }"
									id="vertical-tab-with-border-item-2"
									@click="switchTab('vertical-tab-with-border-2')" aria-selected="false"
									data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2"
									role="tab">
									Бот
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
								<div class="flex flex-col gap-5">
									<div>
										<h6 class="text-gray-500 text-sm">Режим работы</h6>
										<p class="mt-1 text-black">
											Пн. – Пт.: с ---- до -----
										</p>
									</div>
									<div>
										<h6 class="text-gray-500 text-sm">Телефон</h6>
										<p class="mt-1 text-black">
											--------------------
										</p>
									</div>
									<div>
										<h6 class="text-gray-500 text-sm">E-mail</h6>
										<p class="mt-1 text-black ">
											--------------------
										</p>
									</div>

									<button type="button"
										class="py-3 px-4 inline-flex w-40 items-center gap-x-2 text-sm font-medium rounded-lg border border-teal-500 text-teal-500 hover:border-teal-400 hover:text-teal-400 focus:outline-hidden focus:border-teal-400 focus:text-teal-400 disabled:opacity-50 disabled:pointer-events-none">
										Свяжитесь с нами
									</button>

								</div>
							</div>
						</div>
					</div>
					<div id="vertical-tab-with-border-2" role="tabpanel"
						aria-labelledby="vertical-tab-with-border-item-2"
						v-show="activeTab === 'vertical-tab-with-border-2'">
						<h3 class="text-xl">Бот</h3>
						<p class="text-gray-500 my-2">

							Текст о боте 
						</p>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>