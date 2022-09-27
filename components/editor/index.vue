<script lang='ts' setup>
import { computed, defineProps, onUnmounted, Ref, ref, watch } from 'vue'
import { watchTheme } from '@varlet/cli/site/utils'
import {
  Input as VarInput,
  StyleProvider
} from '@varlet/ui'
import '@varlet/ui/es/input/style/index'
import '@varlet/ui/es/bottom-navigation/style/index'
import '@varlet/ui/es/bottom-navigation-item/style/index'
import presetLightTheme from '../../src/theme/light'
import presetDarkTheme from '../../src/theme/dark'
import { flatObject } from '../../src/utils/shared'

const props = defineProps({
  componentName: {
    type: String,
    required: true
  }
})

type Theme = 'lightTheme' | 'darkTheme'

const currentTheme: Ref<Theme> = ref(localStorage.getItem('VARLET_THEME') as Theme ?? 'lightTheme')
const model = ref(getModel())

function getPatch(): any {
  const patch = JSON.parse(localStorage.getItem(currentTheme.value)!)

  if (!patch && currentTheme.value === 'darkTheme') {
    localStorage.setItem(currentTheme.value, JSON.stringify(presetDarkTheme))
    return getPatch()
  }

  const componentPatch = (patch ?? {})[props.componentName] ?? {}

  return { patch: patch ?? {}, componentPatch }
}

function getModel() {
  const { componentPatch } = getPatch()
  const presetComponentTheme = (presetLightTheme as Record<string, any>)[props.componentName]

  return { ...presetComponentTheme, ...componentPatch }
}

function setStorage() {
  const presetComponentTheme = (presetLightTheme as Record<string, any>)[props.componentName]
  const componentPatch = Object.entries(presetComponentTheme).reduce((patch, [key, value]) => {
    const newValue = model.value[key]

    if (newValue !== value) {
      patch[key] = newValue
    }

    return patch
  }, {} as Record<string, any>)

  const { patch } = getPatch()

  if (Object.keys(componentPatch).length === 0) {
    Reflect.deleteProperty(componentPatch, props.componentName)
  } else {
    patch[props.componentName] = componentPatch
  }

  localStorage.setItem(currentTheme.value, JSON.stringify(patch))

  window[0]?.postMessage({ action: 'editor-change', from: 'editor' }, '*')
}

function handleMessage(event: MessageEvent) {
  if (event.data.action === 'editor-example-mounted' && event.data.from === 'editor-mobile') {
    setStorage()
  }
}

watch(() => model.value, setStorage, { deep: true })

watchTheme((theme) => {
  currentTheme.value = theme

  getPatch()
  model.value = getModel()
  StyleProvider(theme === 'lightTheme' ? null : flatObject(presetDarkTheme))
})

window.addEventListener('message', handleMessage)
onUnmounted(() => {
  window.addEventListener('message', handleMessage)
})

const editorItems = computed(() => Object.keys(model.value))

</script>

<template>
  <div class='editor' ref='body'>
    <div v-for='key in editorItems' :key='key'>
      <var-input
        class='editor__input'
        :placeholder='key'
        v-model='model[key]'
      >
      </var-input>
    </div>
  </div>
</template>

<style lang='less' scoped>
.editor {
  padding: 24px;
  position: relative;
  margin-bottom: 55px;

  &__input {
    color: #646566;
    margin-top: 24px;
  }
}

.bottom-navigation-example {
  position: fixed;
  bottom: 0;
  left: 240px;
  padding: 16px 0;
  border-top: 1px solid #eaeaea;
}
</style>
