<script setup>
import { Cell as VarCell, BackTop as VarBackTop } from '@varlet/ui'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import '@varlet/ui/es/back-top/style/index'
import '@varlet/ui/es/cell/style/index'
import { useSync } from '../../utils/sync'

const lists = [...Array(100).keys()]

useSync()
</script>

<template>
  <div>
    <var-cell v-for="list in lists" :key="list">Scroll to bottom {{ list }}</var-cell>
    <var-back-top :duration="300" />
  </div>
</template>
