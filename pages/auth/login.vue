<template>
    <div class="grid lg:grid-cols-2 lg:items-center h-full">
        <div class="flex w-full items-center justify-center">
            <div class="flex w-full max-w-[425px] flex-col gap-4 p-4">
                <div class="text-start">
                    <NuxtLink to="/" class="text-neutral-600 font-bold decoration-2 hover:underline text-sm">
                        На главную
                    </NuxtLink>
                    <h1 class="text-4xl font-bold text-orange-500 my-2 mb-3">
                        Добро пожаловать
                    </h1>
                    <h6 class="text-gray-500">Введите номер телефона, чтобы войти</h6>
                </div>

                <form @submit.prevent="sendData" class="mt-6">
                    <div class="grid gap-y-4">
                        <div>
                            <label for="phone-input" class="block text-sm font-medium text-gray-700 mb-1">
                                Номер телефона
                            </label>
                            <input id="phone-input" v-model="phone" type="tel" placeholder="+7 (___) ___-__-__"
                                class="w-full px-4 py-2 border rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500"
                                required />
                        </div>

                        <div>
                            <label for="password-input" class="block text-sm font-medium text-gray-700 mb-1">
                                Пароль
                            </label>
                            <input id="password-input" v-model="password" type="password"
                                class="w-full px-4 py-2 border rounded-lg text-sm focus:ring-orange-500 focus:border-orange-500"
                                required />
                        </div>

                        <p v-if="errorBoolen" class="text-red-600 text-sm">{{ error }}</p>

                        <button type="submit"
                            class="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-orange-500 text-white hover:bg-orange-700 transition-colors duration-200">
                            Войти
                        </button>
                        <p class="text-center text-sm text-gray-600">
                            Нужно создать учетную запись?
                            <NuxtLink to="/auth/register"
                                class="text-orange-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium">
                                Зарегистрироваться
                            </NuxtLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>

        <img class="h-full min-w-full object-cover hidden lg:block" src="/bg.jpg" alt="Background" />
    </div>
</template>

<script>
import axios from "axios";
import IMask from "imask";
import { useCookie } from "#app";
import { api as useApiStore } from "@/store/api";

export default {
    middleware: 'auth',
    data() {
        return {
            phone: "",
            password: "",
            error: "",
            errorBoolen: false,
        };
    },
    mounted() {
        this.initPhoneMask();
    },
    setup() {
        let api = useApiStore();
        return { api };
    },
    methods: {
        initPhoneMask() {
            const phoneInput = document.getElementById("phone-input");
            if (phoneInput) {
                const mask = IMask(phoneInput, {
                    mask: "+{7} (000) 000-00-00",
                    lazy: false,
                    prepare: (str) => str.replace(/\D/g, ''),
                });
                
      
                mask.on('accept', () => {
                    this.phone = mask.value;
                });
            }
        },
        async sendData() {
            let cleaned = this.phone.replace(/\D/g, "");
            if (cleaned.length !== 11) {
                this.error = "Введите корректный номер телефона";
                this.errorBoolen = true;
                return;
            }

            try {
                let res = await axios.post(`${this.api.url}api/v1/sign-in/tel-password/`, {
                    password: this.password,
                    tel: cleaned,
                });

                let accessToken = useCookie("access_token", {
                    maxAge: 60 * 60 * 24 * 7,
                });
                let refreshToken = useCookie("refresh_token", {
                    maxAge: 60 * 60 * 24 * 7,
                });

                accessToken.value = res.data.data.access_token;
                refreshToken.value = res.data.data.refresh_token;

                this.$router.push("/");
            } catch (error) {
                this.errorBoolen = true;
                this.error = error.response?.data?.description || "Ошибка авторизации";
            }
        },
    },
};
</script>