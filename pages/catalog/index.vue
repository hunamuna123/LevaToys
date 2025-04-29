<template>
	<NuxtLayout>
		<div class="-mt-4 lg:-mt-8 w-full min-h-[90vh] flex gap-6">
			<CatalogSkeletonFilters v-show="!filterisLoaded" class="max-lg:hidden" />

			<CatalogFilters v-show="filterisLoaded" :filterisLoaded="filterisLoaded" class="max-lg:hidden"
				@updateFilterLoaded="setFilterLoaded" @updateProducts="updateProducts" />

			<div class="flex flex-col w-full h-full min-h-[90vh]">
				<div class="flex-none">
					<CatalogSkeletonSorting v-show="isProductsLoading" />
					<CatalogSorting v-if="!isProductsLoading" :onSort="updateSort" />
				</div>

				<div class="flex-none mb-2 mt-2 md:order-1">
					<CatalogSkeletonPagination v-if="isProductsLoading" />
					<CatalogPagination v-else :current-page="currentPage" :total-pages="totalPages" :has-prev="hasPrev"
						:has-next="hasNext" @page-change="handlePageChange" />
				</div>

				<div class="flex-1 overflow-y-auto px-1 pt-4">
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
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { api } from "@/store/api.js";
import { isAuthenticated, getAuthHeaders } from '@/utils/auth';

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

const setFilterLoaded = (loaded) => {
	filterisLoaded.value = loaded;
};
const updateProducts = (newProducts) => {
	products.value = newProducts;
	isProductsLoading.value = false;
};

const updateSort = (sortOption) => {
	const query = { ...route.query, sort: sortOption };
	router.push({ query });
	fetchProducts();
};

const loadingIndicator = useLoadingIndicator()
const fetchProducts = async () => {
	isProductsLoading.value = true;
	
	try {
		const query = new URLSearchParams();
		Object.entries(route.query).forEach(([key, value]) => {
			if (Array.isArray(value)) {
				value.forEach(v => query.append(key, v));
			} else {
				query.append(key, value);
			}
		});
		if (!query.has('page')) {
			query.set('page', '1');
		}

		const endpoint = isAuthenticated() ? 'api/v1/auth/product/auth/' : 'api/v1/product/';
		const response = await fetch(`${url.value}${endpoint}?${query.toString()}`, {
			headers: {
				...getAuthHeaders(),
				'accept': 'application/json',
			},
		});
	
		loadingIndicator.start() // Запуск индикатора
		const data = await response.json();
		products.value = data;
	} catch (err) {
		console.error('Ошибка при загрузке продуктов:', err);
	} finally {
		loadingIndicator.finish() // Остановка индикатора
		isProductsLoading.value = false;
	}
};

const handlePageChange = (page) => {
	const query = { ...route.query, page: page.toString() };
	router.replace({ query });
};
watch(
	() => route.query,
	() => {
		fetchProducts();
	},
	{ deep: true }
);

onMounted(() => {
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