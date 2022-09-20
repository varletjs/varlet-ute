<script setup>
import { Cell as VarCell, Icon as VarIcon, StyleProvider } from '@varlet/ui'
import { pack, use } from './locale/index'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import '@varlet/ui/es/icon/style/index'
import '@varlet/ui/es/cell/style/index'
import {watchLang} from "@varlet/cli/site/utils";
import {reactive} from "vue";

const VarStyleProvider = StyleProvider.Component

const _ButtonTheme = reactive({value: JSON.parse(localStorage.getItem(`light-theme`))?.cell || {} })
window.addEventListener('message', res => {
  _ButtonTheme.value = JSON.parse(localStorage.getItem(`${res.data}-theme`)).cell
})

watchLang(use)
</script>

<template>
  <var-style-provider :style-vars="_ButtonTheme.value">
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-cell> {{ pack.content }} </var-cell>
  <var-cell> {{ pack.content }} </var-cell>

  <app-type>{{ pack.showIcon }}</app-type>
  <var-cell icon="fire" :title="pack.content">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>
  <var-cell icon="fire" :title="pack.content">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>

  <app-type>{{ pack.showDesc }}</app-type>
  <var-cell icon="fire" :title="pack.content" :description="pack.description">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>
  <var-cell :title="pack.content" :description="pack.description" />

  <app-type>{{ pack.showBorder }}</app-type>
  <var-cell border> {{ pack.content }} </var-cell>
  <var-cell border> {{ pack.content }} </var-cell>
  </var-style-provider>
</template>

<style scoped>

</style>
