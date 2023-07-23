<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <!--
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
          -->
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
             class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <!--<router-link to="/foo">Перейти к Foo</router-link>-->
          <router-link to="/login" class="a-custom">
            <IconPlay class="i-play"/>
            Войти
          </router-link>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"/>
        <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <!--
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
            </a>
            -->
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                   class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                    item.name
                  }}</a>
              </div>
              <div class="py-6">
                <router-link to="/login" class="a-custom">
                  <IconPlay class="i-play"/>
                  Войти
                </router-link>
                <!--
                <a href="#"
                   class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Войти</a>
                   -->
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
           aria-hidden="true">
        <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
      </div>
      <div class="mx-auto max-w-2xl py-10 sm:py-10 lg:py-10">
        <div class="text-center">
          <h1 class="h1-gradient" data-v-1ba72d52="">
            FrontEnd ❤️
          </h1>
          <p class="mt-6 text-lg leading-5 text-green-500">
            Меня зовут Дмитрий и я занимаюсь FrontEnd - разработкой уже более 8 лет.
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600 text-justify antialiased">
            Быть FrontEnd разработчиком - это круто! Эта профессия предлагает множество возможностей и привлекательные
            перспективы. Вот несколько причин, почему быть FrontEnd разработчиком круто:
            <br/><br/>
            1. <b>Творчество:</b> FrontEnd разработчики имеют возможность воплотить свои идеи в жизнь. Они создают
            интерактивные и привлекательные веб-страницы, придумывая новые дизайнерские концепции, анимации и эффекты.
            Это искусство создания пользовательского интерфейса и разработки пользовательского опыта.
            <br/><br/>
            2. <b>Непрерывный рост:</b> В мире FrontEnd разработки всегда есть новые технологии, инструменты и
            фреймворки, которые постоянно меняются и развиваются. Это означает, что FrontEnd разработчик всегда будет
            иметь возможность изучать и применять новейшие технологии, что поможет ему оставаться востребованным на
            рынке труда.
            <br/><br/>
            3. <b>Гибкость работы:</b> FrontEnd разработчики могут работать удаленно или фрилансить, что позволяет им
            иметь гибкий график работы и трудиться из любой точки мира. Это дает свободу выбора и возможность
            балансировать работу и личную жизнь.
            <br/><br/>
            4. <b>Востребованность:</b> Веб-разработка – это одна из самых востребованных сфер в современном мире.
            FrontEnd разработчики всегда востребованы и не испытывают проблем с поиском работы. Более того, сфера
            FrontEnd разработки постоянно растет, поэтому предложений работы становится только больше.
            <br/><br/>
            <span class="italic">В заключение, быть FrontEnd разработчиком - это круто, так как это профессия, которая сочетает в себе творчество, непрерывный рост, гибкость работы и востребованность на рынке труда. Если вы хотите быть частью эволюции веб-технологий, создавать красивые и интерактивные веб-страницы, то FrontEnd разработка - идеальный выбор для вас. Так что не стесняйтесь, вперед исследовать мир FrontEnd разработки!</span>
          </p>


          <!--
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div>
          -->

        </div>
      </div>
      <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
        <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import IconPlay from "@/components/icons/Play.vue";
import {Dialog, DialogPanel} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'

/*
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
 */

const mobileMenuOpen = ref(false)
</script>

<style lang="scss" scoped>
.i-play {
  width: 17px;
  display: inline-block;
  vertical-align: middle;
}

.a-custom:hover {
  background-color: var(--vt-c-green-light);
  transition-duration: .2s;
}

.a-custom {
  font-size: 16px;
  display: inline-block;
  border-radius: 8px;
  transition: background-color .5s, color .5s;
  position: relative;
  font-weight: 600;
  background-color: var(--vt-c-green);
  color: #fff;
  margin-right: 18px;
  padding: 4px 8px;
}

.h1-gradient {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0 auto;

}
</style>