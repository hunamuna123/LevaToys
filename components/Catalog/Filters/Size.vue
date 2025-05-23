<template>
	<div class="space-y-3">
		<div>
			<h3 class="font-medium">Размеры</h3>
			<p class="text-xs text-gray-700">Выберите желаемый размер товара</p>
		</div>
		<div class="flex flex-wrap gap-2">
			<button
				v-for="size in sizes"
				:key="size.id"
				type="button"
				class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium transition-colors duration-200"
				:class="{
					'bg-orange-500 text-white': selectedSizes.includes(size.id),
					'bg-gray-100 text-black': !selectedSizes.includes(size.id),
				}"
				@click="toggleSize(size.id)"
			>
				{{ size.name }}
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

defineProps({
	sizes: {
		type: Array,
		default: () => [],
	},
});

const router = useRouter();
const route = useRoute();


const selectedSizes = ref(
	Array.isArray(route.query.size_id)
		? route.query.size_id.map(Number)
		: route.query.size_id
		? [Number(route.query.size_id)]
		: []
);


function toggleSize(sizeId) {
	if (selectedSizes.value.includes(sizeId)) {
		selectedSizes.value = selectedSizes.value.filter((id) => id !== sizeId);
	} else {
		selectedSizes.value.push(sizeId);
	}
	updateQuery();
}


function updateQuery() {
	const query = {
		...route.query,
		size_id: selectedSizes.value.map(String),
	};
	router.replace({ query });
}


watch(
	() => route.query.size_id,
	(newValue) => {
		selectedSizes.value = Array.isArray(newValue)
			? newValue.map(Number)
			: newValue
			? [Number(newValue)]
			: [];
	}
);
</script>
