<script setup>
import { ref } from 'vue'
import { AppType, watchDarkMode, watchLang } from '@varlet/cli/client'
import { Loading as VarLoading, Space as VarSpace, Button as VarButton, Card as VarCard } from '@varlet/ui'
import { pack, use } from './locale'
import dark from '../../../theme/dark'
import { useSync } from '../../utils/sync'
import '@varlet/ui/es/loading/style/index'
import '@varlet/ui/es/space/style/index'
import '@varlet/ui/es/button/style/index'
import '@varlet/ui/es/card/style/index'

const loading = ref(false)

watchLang(use)
watchDarkMode(dark)
useSync()
</script>

<template>
  <div class="loading-demo">
    <div class="loading-demo__type">
      <app-type>{{ pack.type }}</app-type>
      <var-space align="center" justify="space-between">
        <var-loading type="circle" />
        <var-loading type="cube" />
        <var-loading type="wave" />
        <var-loading type="rect" />
        <var-loading type="disappear" />
      </var-space>
    </div>

    <div class="loading-demo__type">
      <app-type>{{ pack.color }}</app-type>
      <var-space align="center" justify="space-between">
        <var-loading type="circle" color="#00afef" />
        <var-loading type="cube" color="#00c48f" />
        <var-loading type="wave" color="#ff9f00" />
        <var-loading type="rect" color="#f44336" />
        <var-loading type="disappear" color="#aaa" />
      </var-space>
    </div>
    <div class="loading-demo__size">
      <app-type>{{ pack.size }}</app-type>
      <var-space align="center" justify="space-between">
        <var-loading type="circle" size="small" />
        <var-loading type="cube" size="small" />
        <var-loading type="wave" size="small" />
        <var-loading type="rect" size="small" />
        <var-loading type="disappear" size="small" />
      </var-space>
    </div>

    <div>
      <app-type>{{ pack.wrap }}</app-type>
      <var-button @click="loading = !loading" style="margin-bottom: 8px">
        {{ loading ? pack.close : pack.open }}
      </var-button>
      <var-loading description="loading...." type="circle" :loading="loading">
        <var-card :title="pack.cardTitle" :description="pack.cardDesc" />
      </var-loading>
    </div>
  </div>
</template>

<style>
.loading-demo .var-space {
  padding: 8px 0;
}
</style>
