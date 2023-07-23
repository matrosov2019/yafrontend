<template>
  <Nav/>

  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-left">Форма для связи</h1>
    </div>
  </header>

  <div class="px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
         aria-hidden="true">
      <div
          class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Обратная связь</h2>
      <p class="mt-2 text-sm leading-8 text-gray-600">Пожалуйста заполните все поля</p>
    </div>
    <form action="#" method="POST" @submit.prevent="send()" class="mx-auto mt-10 max-w-xl sm:mt-10">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-left">
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Ваше имя</label>
          <div class="mt-2.5">
            <input v-model="name" type="text" name="company" id="company" autocomplete="organization"
                   class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Почта</label>
          <div class="mt-2.5">
            <input v-model="email" type="email" name="email" id="email" autocomplete="email"
                   class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Сообщение</label>
          <div class="mt-2.5">
            <textarea v-model="message" name="message" id="message" rows="4"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

      </div>
      <div class="mt-10">
        <button type="submit"
                class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Отправить
        </button>
      </div>
    </form>
  </div>

</template>

<script setup lang="ts">
import {ref} from 'vue'
import Nav from "@/components/Nav.vue";

import {sendForm} from "@/services/contact";

const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");

const send = async () => {
  if (!name.value) return;
  if (!email.value) return;
  if (!message.value) return;
  const status = sendForm(name.value, email.value, message.value);
  if (!status) {
    alert('Ошибка обработки формы на сервере')
  } else {
    alert('Форма успешно отправлена!')
    name.value = "";
    email.value = "";
    message.value = "";
  }

};

</script>