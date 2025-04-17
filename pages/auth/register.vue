<script setup>
definePageMeta({
	layout: 'auth',

})
</script>

<template>
	<NuxtLayout>
		<div class="text-start">
			<NuxtLink
				to="/"
				class="text-neutral-600 font-bold decoration-2 hover:underline focus:outline-none focus:underline text-sm"
			>
				На главную
			</NuxtLink>
			<h1 class="text-4xl font-bold text-gray-800 my-2 mb-3">Регистрация</h1>
			<h6 class="text-gray-500">
				Зарегистрируйте новую учетную запись, чтобы продолжить
			</h6>
		</div>
		<form @submit.prevent="sendData">
			<div class="grid gap-y-4">
				<Input
					type="text"
					name="login"
					id="login"
					autocomplete="off"
					placeholder="login"
					v-model="login"
					label="Логин"
					:errorBoolen="errorBoolean"
					required
				/>
				<Input
					type="email"
					name="email"
					id="email"
					autocomplete="email"
					v-model="email"
					placeholder="you@email.com"
					label="Адрес электронной почты"
					:errorBoolen="errorBoolean"
					required
				/>
				<Input
					type="password"
					name="password"
					id="password"
					placeholder="********"
					autocomplete="off"
					v-model="password"
					label="Пароль"
					:errorBoolen="errorBoolean"
					required
				/>
				<Input
					type="password"
					name="confirmPassword"
					id="confirm-password"
					placeholder="********"
					autocomplete="off"
					label="Подтвердить пароль"
					v-model="confirmPassword"
					:errorBoolen="errorBoolean"
					required
				/>
				<p v-if="errorBoolean" class="text-red-600 text-sm">
					{{ error }}
				</p>
				<button
					type="submit"
                    class="mt-2 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border-transparent bg-teal-500 text-white hover:bg-teal-700 focus:outline-none focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200"
                    >
					Зарегистрироваться
				</button>
				<p class="text-center text-sm text-gray-600">
					У вас уже есть аккаунт?
					<NuxtLink
						to="/auth/login"
                        class="text-teal-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
						>
						Войти
					</NuxtLink>
				</p>
			</div>
		</form>
	</NuxtLayout>
</template>
