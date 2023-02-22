<script setup>
import { reactive, toRefs } from 'vue'
import { Switch as VarSwitch, Space as VarSpace } from '@varlet/ui'
import { pack, use } from './locale/index'
import { AppType, watchLang } from '@varlet/cli/client'
import { useSync } from '../../utils/sync'
import '@varlet/ui/es/space/style/index'
import '@varlet/ui/es/switch/style/index'

const values = reactive({
  value: true,
  value1: true,
  value2: true,
  value3: true,
  value4: true,
})

const { value, value1, value2, value3, value4 } = toRefs(values)

watchLang(use)
useSync()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-space :size="['3vw', '9vw']">
    <var-switch v-model="value" />
  </var-space>
  <app-type>{{ pack.notAvailable }}</app-type>
  <var-space :size="['3vw', '9vw']">
    <var-switch v-model="value1" disabled />
    <var-switch v-model="value1" readonly />
  </var-space>
  <app-type>{{ pack.customColor }}</app-type>
  <var-space :size="['3vw', '9vw']">
    <var-switch v-model="value2" :ripple="false" />
    <var-switch v-model="value2" color="#ff9f00" close-color="#f5cb90" />
  </var-space>
  <app-type>{{ pack.size }}</app-type>
  <var-space :size="['3vw', '11vw']" align="center">
    <var-switch v-model="value3" size="4.266vw" />
    <var-switch v-model="value3" />
    <var-switch v-model="value3" size="6.4vw" />
  </var-space>
  <app-type>{{ pack.loading }}</app-type>
  <var-space :size="['3vw', '9vw']" align="center">
    <var-switch :model-value="true" loading />
    <var-switch :model-value="true" size="6.4vw" loading loading-color="#ff9f00" />
  </var-space>
  <app-type>{{ pack.validateValue }}</app-type>
  <var-space :size="['3vw', '9vw']">
    <var-switch v-model="value4" :rules="[(v) => v === true || pack.state]" />
  </var-space>
</template>
