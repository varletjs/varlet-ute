<script setup>
import { Overlay as VarOverlay, Snackbar, Space as VarSpace, Button as VarButton } from '@varlet/ui'
import { AppType, watchLang, watchDarkMode } from '@varlet/cli/client'
import dark from '../../../theme/dark'
import { reactive, toRefs } from 'vue'
import { useSync } from '../../utils/sync'
import { pack, use } from './locale'
import '@varlet/ui/es/button/style/index'
import '@varlet/ui/es/space/style/index'
import '@varlet/ui/es/snackbar/style/index'
import '@varlet/ui/es/overlay/style/index'

const values = reactive({
  baseOverlay: false,
  contentOverlay: false,
  clickOverlay: false,
})

const { baseOverlay, contentOverlay, clickOverlay } = toRefs(values)

watchLang(use)
watchDarkMode(dark)
useSync()
</script>

<template>
  <app-type>{{ pack.overlayBase }}</app-type>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="baseOverlay = true">
      {{ pack.showOverlay }}
    </var-button>
  </var-space>

  <var-overlay v-model:show="baseOverlay" />

  <app-type>{{ pack.overlayContent }}</app-type>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="contentOverlay = true">
      {{ pack.overlayContent }}
    </var-button>
  </var-space>

  <var-overlay v-model:show="contentOverlay">
    <div class="popup-example-block" @click.stop>
      {{ pack.text }}
    </div>
  </var-overlay>

  <app-type>{{ pack.event }}</app-type>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="clickOverlay = true">
      {{ pack.clickOverlay }}
    </var-button>
  </var-space>

  <var-overlay v-model:show="clickOverlay" @click="() => Snackbar.success('click')" />
</template>

<style>
.popup-example-custom-overlay {
  background: rgba(0, 0, 0, 0.3) !important;
}
.popup-example-block {
  padding: 20px 24px;
  width: 250px;
  background: var(--button-default-color);
}
</style>
