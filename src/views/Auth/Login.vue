<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <!--
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
           alt="Your Company"/>
           -->
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Вход</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6 text-left" action="#" method="POST" @submit.prevent="sendForm()">

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Почта <span class="text-red-500">*</span></label>
          <div class="mt-2">
            <input id="email" v-model="email" name="email" type="email" placeholder="Почта" autocomplete="email"
                   required=""
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль <span
              class="text-red-500">*</span></label>
          <div class="mt-2">
            <input id="password" v-model="password" placeholder="Пароль" name="password" type="password"
                   autocomplete="current-password" required=""
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <button type="submit"
                  :disabled="requestProcess"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Войти
          </button>
        </div>
      </form>

      <p class="mt-10 text-left text-sm text-gray-500">
        Если у вас ещё нет аккаунта?
        <router-link to="/register" class="text-indigo-600 hover:text-indigo-500">Регистрация</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {login} from "@/services/auth";

const email = ref<string>("");
const password = ref<string>("");

const requestProcess = ref<boolean>(false);

const sendForm = async (): void => {
  if (!email.value) return;
  if (!password.value) return;

  requestProcess.value = true;
  const result = await login(email.value, password.value);
  requestProcess.value = false;

  console.log('send form');
};

</script>