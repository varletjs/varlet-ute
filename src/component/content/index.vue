<script setup>
import { props } from "./props";
import { computed, defineProps, reactive, ref, watch } from "vue";
import setLocal from "../../utils/setLocal";
import { DiffObj } from "../../utils/diff";
import { watchDarkMode } from "@varlet/cli/site/utils";
import {
  BottomNavigation as VarBottomNavigation,
  BottomNavigationItem as VarBottomNavigationItem,
  Input as VarInput
} from "@varlet/ui";
import "@varlet/ui/es/input/style/index";
import "@varlet/ui/es/bottom-navigation/style/index";
import "@varlet/ui/es/bottom-navigation-item/style/index";
import dark from "../../theme/dark/index";

const prop = defineProps(props)
const obj = JSON.parse(JSON.stringify(prop.theme))
const body = ref(null)

const theme = () => {
  return { theme: localStorage.getItem("VARLET_THEME"),  themeData: JSON.parse(localStorage.getItem(localStorage.getItem("VARLET_THEME"))) }
}

const _ButtonTheme = reactive({
  theme: Object.assign(prop.theme, theme().themeData?.[prop.componentName])
})

watchDarkMode(dark, (themes)=> {
  // _ButtonTheme.theme = {...prop.theme, ...theme().themeData?.[prop.componentName]}
  if (!localStorage.getItem(themes)) {
    themes === 'darkTheme' ? localStorage.setItem(themes, JSON.stringify(dark)): ''
  }
})

watch(_ButtonTheme.theme, (newVal) => {
  window[0].postMessage(prop.componentName, '*')
  setLocal(theme().theme, prop.componentName, DiffObj(newVal, obj))
})

const width = computed(()=> {
  return body?.value?.offsetWidth + 48 +'px'
})

const clearCurrent = () => {
  try {
    delete theme().themeData[prop.componentName]
    localStorage.setItem(theme().theme, JSON.stringify(theme().themeData))
    Object.keys(obj).forEach((key)=> {
      _ButtonTheme.theme[key] = obj[key]
    })
  }catch (err) {
    console.log(err)
  }
}

const clearTheme = () => {
  localStorage.setItem(theme().theme, '{}')
  Object.keys(obj).forEach((key)=> {
    _ButtonTheme.theme[key] = obj[key]
  })
}

const exportTheme = () => {
  const exportObj = {}
  Object.values(theme().themeData).map(item => item).map(items=> Object.assign(exportObj, items))
  console.log(exportObj, 111);
}


</script>

<template>
  <div class="body" ref="body">
    <div v-for="(val, key) in _ButtonTheme.theme" :key="key">
      <var-input
          class="label"
          :placeholder="key"
          v-model="_ButtonTheme.theme[key]"
      >
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
