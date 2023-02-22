<script setup>
import { Breadcrumbs as VarBreadcrumbs, Breadcrumb as VarBreadcrumb, Icon as VarIcon, Snackbar } from '@varlet/ui'
import '@varlet/ui/es/breadcrumbs/style/index'
import '@varlet/ui/es/breadcrumb/style/index'
import '@varlet/ui/es/icon/style/index'
import '@varlet/ui/es/snackbar/style/index'
import dark from '../../../theme/dark'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import { pack, use } from './locale'
import { useSync } from '../../utils/sync'

watchDarkMode(dark)
watchLang(use)
useSync()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb>{{ pack.level1 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level2 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ pack.separator }}</app-type>
  <var-breadcrumbs separator="\">
    <var-breadcrumb>{{ pack.level1 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level2 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ pack.childSeparator }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb>{{ pack.level1 }}</var-breadcrumb>
    <var-breadcrumb separator="~">{{ pack.level2 }}</var-breadcrumb>
    <var-breadcrumb>{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ pack.separatorSlot }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb>
      <template #separator>
        <var-icon name="menu-right" style="margin: 1px 4px 0" />
      </template>
      {{ pack.level1 }}
    </var-breadcrumb>
    <var-breadcrumb>
      <template #separator>
        <var-icon name="menu-right" style="margin: 1px 4px 0" />
      </template>
      {{ pack.level2 }}
    </var-breadcrumb>
    <var-breadcrumb>{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>

  <app-type>{{ pack.events }}</app-type>
  <var-breadcrumbs>
    <var-breadcrumb @click="Snackbar(pack.level1)">{{ pack.level1 }}</var-breadcrumb>
    <var-breadcrumb @click="Snackbar(pack.level2)">{{ pack.level2 }}</var-breadcrumb>
    <var-breadcrumb @click="Snackbar(pack.level3)">{{ pack.level3 }}</var-breadcrumb>
  </var-breadcrumbs>
</template>
