<template>
	<div class="space-y-3">
		<div>
			<h3 class="font-medium">Цена</h3>
			<p class="text-xs text-gray-700">Выберите цену для желаемого товара</p>
		</div>
		<div class="flex items-center gap-2">
			<div class="relative">
				<input
					v-model="priceFrom"
					type="number"
					class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-xl text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
				/>
				<div
					class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none text-gray-400"
				>
					От
				</div>
			</div>
			<hr class="w-3" />
			<div class="relative">
				<input
					v-model="priceTo"
					type="number"
					class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-xl text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
				/>
				<div
					class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none text-gray-400"
				>
					До
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      priceFrom: null,
      priceTo: null,
    };
  },
  watch: {
    priceFrom() {
      this.updateQuery();
    },
    priceTo() {
      this.updateQuery();
    },
  },
  methods: {
    updateQuery() {
      this.$router.push({
        query: {
          ...this.$route.query,
          price_from: this.priceFrom || undefined,
          price_to: this.priceTo || undefined,
        },
      });
    },
  },
};
</script>
