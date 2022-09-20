<script setup>
import {props} from "./props";
import {computed, reactive, ref, watch, defineProps} from "vue";
import setLocal from "../../utils/setLocal";
import {DiffObj} from "../../utils/diff";
import { Input as VarInput, BottomNavigation as VarBottomNavigation, BottomNavigationItem as VarBottomNavigationItem } from '@varlet/ui'
import '@varlet/ui/es/input/style/index'
import '@varlet/ui/es/bottom-navigation/style/index'
import '@varlet/ui/es/bottom-navigation-item/style/index'

const prop = defineProps(props)
const obj = JSON.parse(JSON.stringify(prop.theme))
const _ButtonTheme = reactive(Object.assign(prop.theme, JSON.parse(localStorage.getItem('light-theme'))?.[prop.componentName]))
const body = ref(null)

watch(_ButtonTheme, (newVal) => {
  window[0].postMessage('light', '*')
  setLocal('light', prop.componentName, DiffObj(newVal, obj))
})

const width = computed(()=> {
  return body?.value?.offsetWidth + 48 +'px'
})

const clearCurrent = () => {
  try {
    const themeColor = JSON.parse(localStorage.getItem('light-theme'))
    delete themeColor.button
    localStorage.setItem('light-theme', JSON.stringify(themeColor))
    Object.keys(obj).forEach((key)=> {
      _ButtonTheme[key] = obj[key]
    })
  }catch (err) {
    console.log(err)
  }
}

const clearTheme = () => {
  localStorage.setItem('light-theme', '{}')
  Object.keys(obj).forEach((key)=> {
    _ButtonTheme[key] = obj[key]
  })
}

const exportTheme = () => {
  const theme = JSON.parse(localStorage.getItem('light-theme'))
  Object.values(theme).map(item => {
    console.log(item, 111)
  })
}

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

    <var-bottom-navigation
        class="bottom-navigation-example"
        :style="{width: width}"
    >
      <template #fab>
        <var-bottom-navigation-item label="导出" icon="heart" @click="exportTheme" />
      </template>
      <var-bottom-navigation-item label="重制当前属性" icon="home" @click="clearCurrent"/>
      <var-bottom-navigation-item style="display: none"/>
      <var-bottom-navigation-item label="重制所有属性" icon="home" @click="clearTheme"/>
    </var-bottom-navigation>
  </div>
</template>

<style scoped>
.body {
  padding: 24px;
  position: relative;
  margin-bottom: 55px;
}

.bottom-navigation-example {
  position: fixed;
  bottom: 0;
  left: 240px;
  padding: 16px 0;
  border-top: 1px solid #eaeaea;
}

.label {
  color: #646566;
  margin-top: 24px;
}
</style>
