<script setup>
import { ref } from 'vue'
import {
  Avatar as VarAvatar,
  Space as VarSpace,
  Icon as VarIcon,
  Input as VarInput,
  AvatarGroup as VarAvatarGroup,
} from '@varlet/ui'
import { watchDarkMode, watchLang, AppType } from '@varlet/cli/client'
import dark from '../../../theme/dark'
import { pack, use } from './locale'
import { useSync } from '../../utils/sync'
import '@varlet/ui/es/avatar/style/index'
import '@varlet/ui/es/space/style/index'
import '@varlet/ui/es/icon/style/index'
import '@varlet/ui/es/input/style/index'
import '@varlet/ui/es/avatar-group/style/index'

const text = ref('VARLET')

watchLang(use)
watchDarkMode(dark)
useSync()
</script>

<template>
  <app-type>{{ pack.avatarSize }}</app-type>
  <var-space align="center">
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="small" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="large" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="21vw" />
  </var-space>
  <app-type>{{ pack.avatarShape }}</app-type>
  <var-space>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" :round="false" />
  </var-space>

  <app-type>{{ pack.fitMode }}</app-type>
  <var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
      <span>cover</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="fill" />
      <span>fill</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="contain" />
      <span>contain</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="none" />
      <span>none</span>
    </var-space>
    <var-space direction="column" align="center">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" fit="scale-down" />
      <span>scale-down</span>
    </var-space>
  </var-space>

  <app-type>{{ pack.fontSize }}</app-type>
  <var-space direction="column">
    <var-space>
      <var-avatar>{{ text }}</var-avatar>
      <var-avatar :round="false">{{ text }}</var-avatar>
    </var-space>
    <var-input v-model="text" />
  </var-space>

  <app-type>{{ pack.backgroundColor }}</app-type>
  <var-space>
    <var-avatar color="#4a79f5">
      <var-icon name="fire" />
    </var-avatar>
    <var-avatar :round="false" color="#eb5a3f">
      <var-icon name="fire" />
    </var-avatar>
  </var-space>

  <app-type>{{ pack.avatarHorizontalGroup }}</app-type>
  <var-avatar-group>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar bordered>+2</var-avatar>
  </var-avatar-group>

  <app-type>{{ pack.avatarVerticalGroup }}</app-type>
  <var-avatar-group vertical>
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat2.jpg" bordered />
    <var-avatar src="https://varlet.gitee.io/varlet-ui/cat3.jpg" bordered />
    <var-avatar bordered>+2</var-avatar>
  </var-avatar-group>
</template>
