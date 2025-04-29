<template>
  <div class="min-h-screen flex flex-col max-w-[90rem] mx-auto">
    <main class="flex-1 ">
      <HeaderNavbar />
      <div class="mt-4 px-6 bg-white rounded-lg w-full sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold mb-1">Профиль</h2>
        <p class="text-sm text-gray-500 mb-6">Настройте свой профиль как вам удобно</p>
        <form class="space-y-6" @submit.prevent="updateProfile">
          <div class="grid grid-cols-3 gap-4">
            <div v-if="loading">
              <SkeletonLoader />
            </div>
            <div v-else>
              <label class="block text-sm font-medium text-black">ФИО</label>
              <input type="text" v-model="profile.name" placeholder="Фамилия"
                class="mt-1 w-full border rounded-md px-3 border-teal-200 py-2 focus:outline-none focus:border-teal-300" />
            </div>
            <div v-if="loading">
              <SkeletonLoader />
            </div>
            <div v-else>
              <label class="block text-sm font-medium text-black invisible">span</label>
              <input type="text" v-model="profile.surname" placeholder="Имя"
                class="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none border-teal-200 focus:border-teal-300" />
            </div>
            <div v-if="loading">
              <SkeletonLoader />
            </div>
            <div v-else>
              <label class="block text-sm font-medium text-black invisible">span</label>
              <input type="text" v-model="profile.patronymic" placeholder="Отчество"
                class="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none border-teal-200 focus:border-teal-300" />
            </div>
          </div>

          <div v-if="loading">
            <SkeletonLoader />
          </div>
          <div v-else>
            <label class="block text-sm font-medium text-black">Электронная почта</label>
            <input type="email" v-model="profile.email" placeholder="work@levatoys.ru"
              class="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none border-teal-200 focus:border-teal-300" />
          </div>

          <div v-if="loading">
            <SkeletonLoader />
          </div>
          <div v-else>
            <label class="block text-sm font-medium text-black">Пароль</label>
            <input type="password" v-model="profile.password" placeholder="******"
              class="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none border-teal-200 focus:border-teal-300" />
          </div>

          <div v-if="loading">
            <SkeletonLoader />
          </div>
          <div v-else>
            <label class="block text-sm font-medium text-black">ИНН</label>
            <input type="text" v-model="profile.inn" placeholder="Введите свой ИНН"
              class="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none border-teal-200 focus:border-teal-300" />
          </div>

          <div v-if="loading">
            <SkeletonLoader />
          </div>
          <div v-else>
            <label class="block text-sm font-medium text-black">Имя компании</label>
            <input type="text" v-model="profile.name_company" placeholder="Введите название своей компании"
              class="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none border-teal-200 focus:border-teal-300" />
          </div>

          <div class="flex justify-end gap-4">
            <button type="submit" class="px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import { api as useApiStore } from "@/store/api";
import axios from "axios";
import { useCookie } from "#app";

export default {
  data() {
    return {
      profile: {
        name: '',
        surname: '',
        patronymic: '',
        password: '',
        email: '',
        inn: '',
        name_company: ''
      },
      loading: true,
    };
  },
  mounted() {
    this.fetchProfile();
  },
  setup() {
    let api = useApiStore();
    return { api };
  },
  methods: {
    async fetchProfile() {
      try {
        let accessToken = useCookie("access_token").value;
        let response = await axios.get(`${this.api.url}api/v1/user/me/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        this.profile = response.data.data;
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        this.loading = false;
      }
    },

    async updateProfile() {
      try {
        let accessToken = useCookie("access_token").value;
        let response = await axios.put(`${this.api.url}api/v1/users/me/`,
          this.profile, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log('Profile updated:', response.data);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  }
}
</script>