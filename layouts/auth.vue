<template>
	<div class="grid lg:grid-cols-2 lg:items-center h-full">
		<div class="flex w-full items-center justify-center">
			<div class="flex w-full max-w-[425px] flex-col gap-4 p-4">
				<slot />
			</div>
		</div>

		<img
			class="h-full min-w-full object-cover hidden lg:block"
			src="/bg.jpg"
			alt="Background"
		/>
	</div>
</template>
