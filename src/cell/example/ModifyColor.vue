<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import {use} from "./locale";
import { CellTheme } from '../../theme/light/index'
import Content from '../../component/content/index'

watchLang(use, 'pc')
</script>

<template>
  <Content :theme="CellTheme" component-name="cell" />
</template>

<style>

</style>
