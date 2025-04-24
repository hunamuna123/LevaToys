<template>
	<NuxtLayout>
		<div class="-mt-4 lg:-mt-8 w-full h-full  min-h-[90vh] flex gap-6">
			<CatalogSkeletonFilters v-show="!filterisLoaded" class="max-lg:hidden" />

			<CatalogFilters v-show="filterisLoaded" :filterisLoaded="filterisLoaded" class="max-lg:hidden"
				@updateFilterLoaded="setFilterLoaded" @updateProducts="updateProducts" />

			<div class="w-full h-full flex flex-col">
				<div class="flex-none">
					<CatalogSkeletonSorting v-show="isProductsLoading" />
					<CatalogSorting v-show="!isProductsLoading" :onSort="updateSort" />
				</div>
				<div
					class="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<template v-if="isProductsLoading">
							<CatalogSkeletonCard v-for="n in 6" :key="n" />
						</template>
						<template v-else-if="products?.data?.length">
							<CatalogCard v-for="product in products.data" :key="product.id" :product="product" />
						</template>
						<CatalogEmpty v-else />
					</div>
				</div>
				<div class="flex-none mt-4">
					<CatalogSkeletonPagination v-if="isProductsLoading" />
					<CatalogPagination v-else :current-page="currentPage" :total-pages="totalPages" :has-prev="hasPrev"
						:has-next="hasNext" @page-change="handlePageChange" />
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { api } from "@/store/api.js";

const apiStore = api();
const url = computed(() => apiStore.url);
const route = useRoute();
const router = useRouter();

definePageMeta({
	layout: 'catalog',
})

const filterisLoaded = ref(false);
const products = ref([]);
const isProductsLoading = ref(true);

const currentPage = computed(() => {
	return products.value?.paginator?.page || 1;
});

const totalPages = computed(() => {
	return products.value?.paginator?.total || 1;
});

const hasPrev = computed(() => {
	return products.value?.paginator?.has_prev || false;
});

const hasNext = computed(() => {
	return products.value?.paginator?.has_next || false;
});

// Обработчик для обновления состояния загрузки фильтров
const setFilterLoaded = (loaded) => {
	filterisLoaded.value = loaded;
};

// Обработчик для обновления товаров
const updateProducts = (newProducts) => {
	products.value = newProducts;
	isProductsLoading.value = false;
};

const fetchProducts = async () => {
	isProductsLoading.value = true;
	try {
		const query = new URLSearchParams();
		// Копируем все существующие параметры
		Object.entries(route.query).forEach(([key, value]) => {
			if (Array.isArray(value)) {
				value.forEach(v => query.append(key, v));
			} else {
				query.append(key, value);
			}
		});

		// Если нет page, добавляем его
		if (!query.has('page')) {
			query.set('page', '1');
		}

		const response = await fetch(`${url.value}api/v1/product?${query.toString()}`);
		const data = await response.json();
		products.value = data;
	} catch (err) {
		console.error('Ошибка при загрузке продуктов:', err);
	} finally {
		isProductsLoading.value = false;
	}
};

const handlePageChange = (page) => {
	const query = { ...route.query, page: page.toString() };
	router.replace({ query });
};

// Следим за изменениями параметров страницы
watch(
	() => route.query,
	() => {
		fetchProducts();
	},
	{ deep: true }
);

onMounted(() => {
	// Если нет параметра page, добавляем его
	if (!route.query.page) {
		router.replace({ query: { ...route.query, page: '1' } });
	} else {
		fetchProducts();
	}
});

const handleFiltersLoading = (loading) => {
	isLoadingFilters.value = loading
}

const handleProductsUpdate = (products) => {
	products.value = products
}

const updateQueryParams = (newParams) => {
	const query = { ...route.query }
	
	Object.keys(newParams).forEach(key => {
		if (newParams[key]) {
			query[key] = newParams[key]
		} else {
			delete query[key]
		}
	})
	
	if (!query.page) {
		query.page = '1'
	}
	
	router.push({ query })
}

onMounted(() => {
	if (route.query.page) {
		currentPage.value = parseInt(route.query.page)
	}
})

watch(() => route.query, (newQuery) => {
	if (newQuery.page) {
		currentPage.value = parseInt(newQuery.page)
	} else {
		currentPage.value = 1
	}
}, { immediate: true })
</script>
