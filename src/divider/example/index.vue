<script setup>
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { Divider as VarDivider, Icon as VarIcon } from '@varlet/ui'
import dark from '../../../theme/dark'
import { pack, use } from './locale'
import { useSync } from '../../utils/sync'
import '@varlet/ui/es/divider/style/index'
import '@varlet/ui/es/icon/style/index'

watchLang(use)
watchDarkMode(dark)
useSync()
</script>
<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-divider />

  <app-type>{{ pack.dashed }}</app-type>
  <var-divider dashed />

  <app-type>{{ pack.inset }}</app-type>
  <var-divider inset />
  <var-divider :inset="36" margin="36px 0" />
  <var-divider inset="-36px" />

  <app-type>{{ pack.vertical }}</app-type>
  <div class="divider-example-vertical-container">
    <span>{{ pack.text }}</span>
    <var-divider vertical />
    <span>{{ pack.text }}</span>
    <var-divider vertical />
    <span>{{ pack.text }}</span>
  </div>

  <app-type>{{ pack.withDesc }}</app-type>
  <var-divider :description="pack.withDescText" />

  <app-type>{{ pack.custom }}</app-type>
  <var-divider>
    <var-icon name="heart-outline" style="margin: 0 16px; color: rgb(41, 121, 255)" />
  </var-divider>
</template>

<style lang="less" scoped>
.divider-example-vertical-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;

  span {
    font-size: 14px;
    color: #888;
  }
}
</style>
