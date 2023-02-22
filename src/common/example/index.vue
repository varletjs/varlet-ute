<script setup lang="ts">
import { pack, use } from './locale'
import { Button as VarButton, Space as VarSpace, Cell as VarCell, Icon as VarIcon } from '@varlet/ui'
import { watchLang, AppType } from '@varlet/cli/client'
import { useSync } from '../../utils/sync'
import '@varlet/ui/es/space/style/index'
import '@varlet/ui/es/button/style/index'
import '@varlet/ui/es/cell/style/index'

watchLang(use)
useSync()
</script>

<template>
  <app-type>{{ pack.themeColorButton }}</app-type>
  <var-space :size="['2.666vw', '2.666vw']">
    <var-button disabled>{{ pack.disabledStatus }}</var-button>
    <var-button type="primary">{{ pack.primaryButton }}</var-button>
    <var-button type="info">{{ pack.infoButton }}</var-button>
    <var-button type="success">{{ pack.successButton }}</var-button>
    <var-button type="warning">{{ pack.warningButton }}</var-button>
    <var-button type="danger">{{ pack.dangerButton }}</var-button>
  </var-space>

  <app-type>{{ pack.basicUsage }}</app-type>
  <var-cell> {{ pack.content }} </var-cell>
  <var-cell> {{ pack.content }} </var-cell>

  <app-type>{{ pack.iconSize }}</app-type>
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" />
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" :size="26" />

  <app-type>{{ pack.iconColor }}</app-type>
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" color="#2979ff" />
  <var-icon class="icon-example__animation-icon" name="checkbox-marked-circle" color="#2979ff" :size="26" />
</template>
