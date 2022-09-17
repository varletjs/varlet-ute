<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import { use } from './locale'
import ButtonTheme from '../theme/button'
import { Input as VarInput, BottomNavigation as VarBottomNavigation, BottomNavigationItem as VarBottomNavigationItem } from '@varlet/ui'
import '@varlet/ui/es/input/style/index'
import '@varlet/ui/es/bottom-navigation/style/index'
import '@varlet/ui/es/bottom-navigation-item/style/index'
import { reactive, watch, ref, computed } from 'vue'
import { DiffObj } from '../../utils/diff'
import setLocal from "../../utils/setLocal";

const obj = JSON.parse(JSON.stringify(ButtonTheme))
const _ButtonTheme = reactive(Object.assign(ButtonTheme, JSON.parse(localStorage.getItem('light-theme')).button))
const body = ref(null)
watch(_ButtonTheme, (newVal) => {
  window[0].postMessage('light', '*')
  setLocal('light', 'button', DiffObj(newVal, obj))
})

const width = computed(()=> {
  console.log(body?.value?.offsetWidth, 111)
  return body?.value?.offsetWidth - 48 +'px'
})

watchLang(use, 'pc')
</script>

<template>
  <div class="body" ref="body">
    <div v-for="(val, key, i) in _ButtonTheme" :key="i">
      <var-input
          class="label"
          :placeholder="key"
          v-model="_ButtonTheme[key]"
      >
        <template #append-icon>
          <input
              v-if="key.includes('color')"
              type="color"
              style="display: block; width: 20px; height: 20px"
              v-model="_ButtonTheme[key]"
          />
        </template>
      </var-input>
    </div>

    <var-bottom-navigation class="bottom-navigation-example" :style="{width: width}">
      <template #fab>
        <var-bottom-navigation-item label="导出" icon="heart" />
      </template>
      <var-bottom-navigation-item label="重制当前属性" icon="home"/>
      <var-bottom-navigation-item style="display: none"/>
      <var-bottom-navigation-item label="重制所有属性" icon="home"/>
    </var-bottom-navigation>
  </div>
</template>

<style>
.body {
  padding: 24px;
  position: relative;
  margin-bottom: 47px;
}

.bottom-navigation-example {
  position: fixed;
  bottom: 0;
  padding: 10px 0;
  border-top: 1px solid #eaeaea;
}

.label {
  color: #646566;
  margin-top: 24px;
}
</style>
