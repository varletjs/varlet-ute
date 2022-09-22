<script setup>
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { use } from './locale'
import dark from "../../theme/dark/index";
import {ButtonTheme} from '../../theme/light/index'
import Content from '../../component/content/index'

watchLang(use, 'pc')
watchDarkMode(dark)
</script>

<template>
  <Content :theme="ButtonTheme" component-name="button" />
</template>

<style>

</style>
