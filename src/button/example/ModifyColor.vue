<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'
import ButtonTheme from '../theme/button'
import { Input as varInput } from '@varlet/ui'
import '@varlet/ui/es/input/style/index'
import { reactive } from 'vue'

const _ButtonTheme = reactive(ButtonTheme)

watchLang(use, 'pc')
</script>

<template>
  <div v-for="(val,key,i) in _ButtonTheme" :key="i">
    <label>{{key}}</label>
    <input v-if="key.includes('color')" type="color" :value="_ButtonTheme[key]" style="display: block;">
    <var-input v-else  :hint="false" :line="false" placeholder="请输入文本" clearable v-model="_ButtonTheme[key]" />
  </div>
</template>
