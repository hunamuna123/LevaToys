<template>
	<div class="space-y-3">
		<div>
			<h3 class="font-medium">Бренды</h3>
			<p class="text-xs text-gray-700">Выберите желаемый бренд товара</p>
		</div>
		<div class="flex flex-wrap gap-2">
			<button
				v-for="brand in brands"
				:key="brand.id"
				type="button"
				class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium transition-colors duration-200"
				:class="{
					'bg-teal-500 text-white': selectedBrands.includes(brand.id),
					'bg-gray-100 text-gray-800': !selectedBrands.includes(brand.id),
				}"
				@click="toggleBrand(brand.id)"
			>
				{{ brand.name }}
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";


defineProps({
	brands: {
		type: Array,
		default: () => [],
	},
});


let router = useRouter();
let route = useRoute();


let selectedBrands = ref(
	Array.isArray(route.query.brand_id)
		? route.query.brand_id.map(Number)
		: route.query.brand_id
		? [Number(route.query.brand_id)]
		: []
);

function toggleBrand(brandId) {
	if (selectedBrands.value.includes(brandId)) {
		selectedBrands.value = selectedBrands.value.filter((id) => id !== brandId);
	} else {
		selectedBrands.value.push(brandId);
	}
	updateQuery();
}
function updateQuery() {
	let query = {
		...route.query,
		brand_id: selectedBrands.value.map(String),
	};
	router.replace({ query });
}

watch(
	() => route.query.brand_id,
	(newValue) => {
		selectedBrands.value = Array.isArray(newValue)
			? newValue.map(Number)
			: newValue
			? [Number(newValue)]
			: [];
	}
);
</script>
