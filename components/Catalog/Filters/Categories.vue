<template>
	<div class="space-y-3">
		<div>
			<h3 class="font-medium">Категории</h3>
			<p class="text-xs text-gray-700">Выберите категории товара</p>
		</div>
		<div class="flex flex-wrap gap-2">
			<button
				v-for="category in categories"
				:key="category.id"
				type="button"
				class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium transition-colors duration-200"
				:class="{
					'bg-teal-500 text-white': selectedCategories.includes(category.id),
					'bg-gray-100 text-black': !selectedCategories.includes(category.id),
				}"
				@click="toggleCategory(category.id)"
			>
				{{ category.name }}
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

defineProps({
	categories: {
		type: Array,
		default: () => [],
	},
});

let router = useRouter();
let route = useRoute();

let selectedCategories = ref(
	Array.isArray(route.query.category_id)
		? route.query.category_id.map(Number)
		: route.query.category_id
		? [Number(route.query.category_id)]
		: []
);

function toggleCategory(categoryId) {
	if (selectedCategories.value.includes(categoryId)) {
		selectedCategories.value = selectedCategories.value.filter((id) => id !== categoryId);
	} else {
		selectedCategories.value.push(categoryId);
	}
	updateQuery();
}

function updateQuery() {
	let query = {
		...route.query,
		category_id: selectedCategories.value.map(String), // Параметр category_id
	};
	router.replace({ query });
}

watch(
	() => route.query.category_id,
	(newValue) => {
		selectedCategories.value = Array.isArray(newValue)
			? newValue.map(Number)
			: newValue
			? [Number(newValue)]
			: [];
	}
);
</script>
