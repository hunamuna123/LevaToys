<script setup>
definePageMeta({
	layout: 'auth',
})
</script>

<template>
	<NuxtLayout>
		<div class="text-start">
			<NuxtLink to="/"
				class="text-neutral-600 font-bold decoration-2 hover:underline focus:outline-none focus:underline text-sm">
				На главную
			</NuxtLink>
			<h1 class="text-4xl font-bold text-teal-500 my-2 mb-3">
				Добро пожаловать
			</h1>
			<h6 class="text-gray-500">
				Войдите в свою учетную запись, чтобы продолжить
			</h6>
		</div>
		<form @submit.prevent="sendData">
			<div class="grid gap-y-4">
				<Input v-model="email" type="text" name="email" id="hs-floating-underline-input-email"
					placeholder="you@email.com" autocomplete="email" label="Адрес электронной почты или логин" required
					:errorBoolen="errorBoolen" />
				<Input type="password" name="password" v-model="password" id="hs-floating-underline-input-password"
					placeholder="********" autocomplete="current-password" label="Пароль" minlength="8" required
					:errorBoolen="errorBoolen" />
				<p v-if="errorBoolen" class="text-red-600 text-sm">
					{{ error }}
				</p>
				<button type="submit"
					class="mt-2 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border-transparent bg-teal-500 text-white hover:bg-teal-700 focus:outline-none focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200">
					Войти
				</button>
				<p class="text-center text-sm text-gray-600">
					Нужно создать учетную запись?
					<NuxtLink to="/auth/register"
						class="text-teal-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium">
						Зарегистрироваться
					</NuxtLink>
				</p>
			</div>
		</form>
	</NuxtLayout>
</template>


<script>
import axios from 'axios'
import { mapState } from 'pinia'
import { api } from '@/store/api.js'

export default {
	data() {
		return {
			email: '',
			password: '',
			errorBoolen: false,
			error: '',
		}
	},

	computed: {
		...mapState(api, ['url']),
	},

	methods: {
		async sendData() {
			try {
				const response = await axios.post(
					`${this.url}api/v1/sign-in/email-password/`,
					{
						email: this.email,
						password: this.password,
					},
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				if (response.data.data.token) {
					const authToken = useCookie('authtoken')
					authToken.value = response.data.data.token
					this.$router.push('/')
				}
			} catch (error) {
				this.errorBoolen = true
				this.error =
					error.response?.data?.errors?.[0]?.message
					|| error.response?.data?.description
					|| 'Ошибка при отправке данных'
			}

		}

	},
}
</script>
