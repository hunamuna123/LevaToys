<template>
	<div class="relative">
		<input
			:type="isPasswordVisible ? 'text' : type"
			:id="id"
			:name="name"
			:placeholder="placeholder"
			v-model="inputValue"
			:class="[ 
				errorBoolen ? 'border-red-600' : 'border-b-gray-300',  
				'peer py-4 px-0 block w-full bg-transparent border-t-transparent border-b-2 focus:outline-none text-sm placeholder:text-transparent  focus:border-b-black focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2', 
				' [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2 transition-colors duration-200'
			]"
			@input="emitValue"
			:required="required"
		/>

		<label
			:for="id"
			class="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
		>
			{{ label }}
		</label>
		<button
			v-if="type === 'password'"
			type="button"
			@click="togglePasswordVisibility"
			class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-black transition-colors duration-200"
		>
			<svg
				class="shrink-0 size-3.5"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path
					class="hs-password-active:hidden"
					d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
				></path>
				<path
					class="hs-password-active:hidden"
					d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
				></path>
				<path
					class="hs-password-active:hidden"
					d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
				></path>
				<line
					class="hs-password-active:hidden"
					x1="2"
					x2="22"
					y1="2"
					y2="22"
				></line>
				<path
					class="hidden hs-password-active:block"
					d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
				></path>
				<circle
					class="hidden hs-password-active:block"
					cx="12"
					cy="12"
					r="3"
				></circle>
			</svg>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: 'text',
		},
		modelValue: {
			type: String,
			default: '',
		},
		required: {
			type: Boolean,
			default: false,
		},
		errorBoolen: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			inputValue: this.modelValue,
			isPasswordVisible: false, // Для управления видимостью пароля
		}
	},

	watch: {
		modelValue(newValue) {
			this.inputValue = newValue
		},
	},

	methods: {
		emitValue() {
			this.$emit('update:modelValue', this.inputValue)
		},
		togglePasswordVisibility() {
			this.isPasswordVisible = !this.isPasswordVisible; // Переключение видимости пароля
		},
	},
}
</script>

