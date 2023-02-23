<script setup>
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { Paper as VarPaper, Cell as VarCell } from '@varlet/ui'
import dark from '../../../theme/dark'
import { use, pack } from './locale'
import { useSync } from '../../utils/sync'
import '@varlet/ui/es/paper/style/index'
import '@varlet/ui/es/cell/style/index'

watchLang(use)
watchDarkMode(dark)
useSync()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-paper :elevation="2" width="25vw" height="25vw" />

  <app-type>{{ pack.ripple }}</app-type>
  <var-paper :elevation="2" ripple width="25vw" height="25vw" />

  <app-type>{{ pack.round }}</app-type>
  <var-paper :elevation="2" width="25vw" height="25vw" round />

  <app-type>{{ pack.radius }}</app-type>
  <var-paper :elevation="2" :radius="8" width="25vw" height="25vw" />

  <app-type>{{ pack.slot }}</app-type>
  <var-paper :elevation="2">
    <var-cell>{{ pack.paper }}</var-cell>
    <var-cell>{{ pack.paper }}</var-cell>
    <var-cell>{{ pack.paper }}</var-cell>
  </var-paper>
</template>
