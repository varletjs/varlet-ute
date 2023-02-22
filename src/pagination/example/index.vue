<script setup>
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { Pagination as VarPagination } from '@varlet/ui'
import dark from '../../../theme/dark'
import { use, pack } from './locale'
import { useSync } from '../../utils/sync'
import '@varlet/ui/es/pagination/style/index'

watchLang(use)
watchDarkMode(dark)
useSync()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" />
  </div>
  <app-type>{{ pack.hideSize }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" :show-size-changer="false" />
  </div>
  <app-type>{{ pack.showTotal }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" :show-total="(total) => `${pack.total} ${total} ${pack.item}`" />
  </div>
  <app-type>{{ pack.disabled }}</app-type>
  <div class="transformer">
    <var-pagination :current="3" :total="120" disabled />
  </div>
</template>

<style lang="less" scoped>
.transformer {
  transform: translateX(-10px);
}
</style>
