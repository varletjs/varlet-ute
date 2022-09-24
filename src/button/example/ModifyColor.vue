<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import { use } from './locale'
import {ButtonTheme} from '../../theme/light/index'
import Content from '../../component/content/index'

watchLang(use, 'pc')
</script>

<template>
  <Content :theme="ButtonTheme" component-name="button" />
</template>

<style>

</style>
