<template>
  <Nav/>

  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-left">Видео</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 text-left">

      <ul>
        <li>
          <a href="https://github.com/matrosov2019/yafrontend.git" class="font-medium text-indigo-600 "
             target="_blank">
            <BeakerIcon class="h-5 w-6 text-indigo-600 inline-flex"/>
            Скачать Frontend репозиторий
          </a>
        </li>
        <li>
          <a href="https://github.com/matrosov2019/yabackend.git" class="font-medium text-indigo-600" target="_blank">
            <BeakerIcon class="h-5 w-6 text-indigo-600 inline-flex"/>
            Скачать Backend репозиторий
          </a>
        </li>
      </ul>

    </div>
  </main>
</template>

<script setup lang="ts">
import Nav from "@/components/Nav.vue";
import {BeakerIcon} from "@heroicons/vue/24/outline"

</script>
