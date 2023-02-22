<script setup>
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { Steps as VarSteps, Step as VarStep, Button as VarButton } from '@varlet/ui'
import dark from '../../../theme/dark'
import { ref } from 'vue'
import { use, pack } from './locale'
import { useSync } from '../../utils/sync'
import '@varlet/ui/es/steps/style/index'
import '@varlet/ui/es/step/style/index'
import '@varlet/ui/es/button/style/index'

const active = ref(0)

const next = () => {
  active.value = (active.value + 1) % 4
}

watchLang(use)
watchDarkMode(dark)
useSync()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-steps :active="active">
    <var-step>{{ pack.first }}</var-step>
    <var-step>{{ pack.second }}</var-step>
    <var-step>{{ pack.third }}</var-step>
    <var-step>{{ pack.fourth }}</var-step>
  </var-steps>

  <app-type>{{ pack.customStyle }}</app-type>
  <var-steps :active="active" active-color="#f44336" inactive-color="#e99eb4">
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.first }}</var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.second }}</var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.third }}</var-step>
    <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ pack.fourth }}</var-step>
  </var-steps>

  <app-type>{{ pack.vertical }}</app-type>
  <var-steps direction="vertical" :active="active">
    <var-step>{{ pack.first }}</var-step>
    <var-step>{{ pack.second }}</var-step>
    <var-step>{{ pack.third }}</var-step>
    <var-step>{{ pack.fourth }}</var-step>
  </var-steps>

  <var-button type="primary" block @click="next" style="margin-top: 20px">{{ pack.next }}</var-button>
</template>
