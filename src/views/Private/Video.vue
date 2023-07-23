<template>
  <Nav/>

  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-left">Видео</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 text-center">

      <iframe style="margin: 0 auto" width="320" height="320" src="https://www.youtube.com/embed/RzTDxlKABRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  </main>
</template>

<script setup lang="ts">
import Nav from "@/components/Nav.vue";
import {BeakerIcon} from "@heroicons/vue/24/outline"

</script>
