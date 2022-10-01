<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import { use } from './locale'
import Editor from '../../../components/editor/index.vue'

watchLang(use, 'pc')
</script>

<template>
  <editor component-name="ripple" />
</template>
