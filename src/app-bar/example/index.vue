<script setup>
import { ref } from 'vue'
import {
  AppBar as VarAppBar,
  Icon as VarIcon,
  Snackbar,
  Menu as VarMenu,
  Button as VarButton,
  Cell as VarCell,
  Ripple as vRipple,
} from '@varlet/ui'
import '@varlet/ui/es/app-bar/style/index'
import '@varlet/ui/es/icon/style/index'
import '@varlet/ui/es/snackbar/style/index'
import '@varlet/ui/es/menu/style/index'
import '@varlet/ui/es/button/style/index'
import '@varlet/ui/es/cell/style/index'
import dark from '../../../theme/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode, AppType } from '@varlet/cli/client'
import { useSync } from '../../utils/sync'

const offsetY = ref(false)
const menuList = ref([])
const bgColor = ref('#fff')

const searchData = () => {
  Snackbar({
    content: pack.value.search,
    position: 'top',
  })
}

const goBack = () => {
  Snackbar({
    content: pack.value.goBack,
    position: 'top',
  })
}

const changeOffset = () => {
  menuList.value = [
    { label: pack.value.options1, value: 'menu1' },
    { label: pack.value.options2, value: 'menu2' },
  ]

  offsetY.value = true
}

watchLang((lang) => {
  use(lang)

  offsetY.value = false
})

watchDarkMode(dark, (theme) => {
  bgColor.value = theme === 'darkTheme' ? '#272727' : '#fff'
})
useSync()
</script>

<template>
  <app-type>{{ pack.basicAppBar }}</app-type>
  <var-app-bar :title="pack.title" />

  <app-type>{{ pack.customStyle }}</app-type>
  <var-app-bar :title="pack.title" title-position="center" color="#00c48f" />

  <app-type>{{ pack.addSlotsAtTitle }}</app-type>
  <var-app-bar>{{ pack.addTheTitleFromTheSlot }}</var-app-bar>

  <app-type>{{ pack.addLeftSlot }}</app-type>
  <var-app-bar :title="pack.title" title-position="center">
    <template #left>
      <var-button round text color="transparent" text-color="#ffffff" @click="goBack">
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ pack.addRightSlot }}</app-type>
  <var-app-bar :title="pack.title">
    <template #right>
      <var-button round text color="transparent" text-color="#ffffff" @click="searchData">
        <var-icon name="magnify" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <app-type>{{ pack.addLeftAndRightSlot }}</app-type>
  <var-app-bar :title="pack.title">
    <template #left>
      <var-button round text color="transparent" text-color="#ffffff" @click="goBack">
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu :offset-y="42" :offset-x="-20" v-model:show="offsetY">
        <var-button round text color="transparent" text-color="#ffffff" @click="changeOffset">
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <div class="var-app-var--example-menu-list" :style="{ background: bgColor }">
            <var-cell class="var-app-var--example-menu-cell" v-for="value in menuList" :key="value.value" v-ripple>
              {{ value.label }}
            </var-cell>
          </div>
        </template>
      </var-menu>
    </template>
  </var-app-bar>

  <div class="var-app-var--example-space"></div>
</template>

<style>
.var-app-var--example-menu-list .var-app-var--example-menu-cell {
  display: block;
  padding: 10px;
}

.var-app-var--example-space {
  height: 80px;
}
</style>
