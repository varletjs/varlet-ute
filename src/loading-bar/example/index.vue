<script setup>
import { LoadingBar, Button as VarButton, Space as VarSpace } from '@varlet/ui'
import '@varlet/ui/es/loading-bar/style/index'
import '@varlet/ui/es/button/style/index'
import '@varlet/ui/es/space/style/index'
import dark from '../../../theme/dark'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { ref } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { useSync } from '../../utils/sync'

const hasCustomStyle = ref(false)

const setStyle = () => {
  LoadingBar.mergeConfig({
    errorColor: hasCustomStyle.value ? undefined : '#ff8800',
    color: hasCustomStyle.value ? undefined : '#10afef',
    height: hasCustomStyle.value ? undefined : '5px',
  })

  hasCustomStyle.value = !hasCustomStyle.value
}

watchDarkMode(dark)
watchLang(use)
useSync()
LoadingBar.mergeConfig({
  top: '14.5vw',
})
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-space direction="column" :size="['3vw', '4vw']">
    <var-button type="primary" block @click="LoadingBar.start()">{{ pack.start }}</var-button>
    <var-button type="primary" block @click="LoadingBar.finish()">{{ pack.finish }}</var-button>
    <var-button type="primary" block @click="LoadingBar.error()">{{ pack.error }}</var-button>
    <var-button type="primary" block @click="setStyle">{{ hasCustomStyle ? pack.clear : pack.custom }}</var-button>
  </var-space>
</template>
