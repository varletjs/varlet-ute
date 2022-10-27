<script lang="ts" setup>
import { computed, defineProps, onMounted, onUnmounted, Ref, ref, watch } from 'vue'
import { watchLang, watchTheme } from '@varlet/cli/site/utils'
import {
  Input as VarInput,
  StyleProvider,
  Button as VarButton,
  Icon as VarIcon,
  ActionSheet,
  Dialog,
  Snackbar,
} from '@varlet/ui'
import '@varlet/ui/es/input/style/index'
import '@varlet/ui/es/bottom-navigation/style/index'
import '@varlet/ui/es/bottom-navigation-item/style/index'
import '@varlet/ui/es/button/style/index'
import '@varlet/ui/es/action-sheet/style/index'
import '@varlet/ui/es/dialog/style/index'
import '@varlet/ui/es/snackbar/style/index'
import presetLightTheme from '../../theme/light'
import presetDarkTheme from '../../theme/dark'
import { pack, use } from './locale'
import { flatObject, downloadFile } from '../../src/utils/shared'

const props = defineProps({
  componentName: {
    type: String,
    required: true,
  },
})

type Theme = 'lightTheme' | 'darkTheme'

const currentTheme: Ref<Theme> = ref((localStorage.getItem('VARLET_THEME') as Theme) ?? 'lightTheme')
const model = ref(getModel())
const originalTheme = ref()

function getPatch(): any {
  const patch = JSON.parse(localStorage.getItem(currentTheme.value)!)

  if (!patch && currentTheme.value === 'darkTheme') {
    localStorage.setItem(currentTheme.value, JSON.stringify(presetDarkTheme))
    return getPatch()
  }

  const componentPatch = (patch ?? {})[props.componentName] ?? {}

  return { patch: patch ?? {}, componentPatch }
}

function getOriginalTheme() {
  return currentTheme.value === 'darkTheme' ? { ...presetLightTheme, ...presetDarkTheme } : presetLightTheme
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
    Reflect.deleteProperty(patch, props.componentName)
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

watchLang(use, 'pc')

watchTheme((theme) => {
  currentTheme.value = theme

  getPatch()
  model.value = getModel()
  originalTheme.value = getOriginalTheme()
  StyleProvider(theme === 'lightTheme' ? null : flatObject(presetDarkTheme))
})

onMounted(() => {
  Object.keys(model.value).forEach((key, index) => {
    if (model.value[key] !== originalTheme.value[props.componentName][key]) {
      editorItems.value[index].inputVisible.value = true
    }
  })
})

window.addEventListener('message', handleMessage)
onUnmounted(() => {
  window.addEventListener('message', handleMessage)
})

const editorItems = computed(() => {
  return Object.keys(model.value).map((key) => {
    return {
      key,
      inputVisible: ref(false),
    }
  })
})

const clear = () => {
  const { patch } = getPatch()
  if (currentTheme.value === 'lightTheme') {
    Reflect.deleteProperty(patch, props.componentName)
  } else {
    patch[props.componentName] = presetDarkTheme[props.componentName]
  }
  localStorage.setItem(currentTheme.value, JSON.stringify(patch))
  model.value = getModel()
  Snackbar.success(pack.value.clearPropsSuccess)
}

const clearAll = () => {
  localStorage.setItem(currentTheme.value, currentTheme.value === 'lightTheme' ? '{}' : JSON.stringify(presetDarkTheme))
  model.value = getModel()
  Snackbar.success(pack.value.clearAllSuccess)
}

const exportPatch = () => {
  const { patch } = getPatch()
  downloadFile(flatObject(patch))
    .then(() => {
      Snackbar.success(pack.value.exportsSuccess)
    })
    .catch((err) => {
      Snackbar.error(err)
    })
}

const handleClick = async () => {
  const action = await ActionSheet({
    actions: [
      {
        name: pack.value.clearProps,
        icon: 'delete',
        color: '#00c48f',
        iconSize: '25',
        className: '',
        disabled: false,
      },
      {
        name: pack.value.clearAll,
        icon: 'trash-can',
        color: '#ff9800',
        iconSize: '25',
        className: '',
        disabled: false,
      },
      {
        name: pack.value.exports,
        icon: 'upload',
        color: '#00afef',
        iconSize: '25',
        className: '',
        disabled: false,
      },
    ],
  })

  action !== 'close' && (await Dialog(`${pack.value.isHave}${action.name}?`)) === 'confirm'
    ? action.name === pack.value.clearProps
      ? clear()
      : action.name === pack.value.clearAll
      ? clearAll()
      : action.name === pack.value.exports
      ? exportPatch()
      : ''
    : ''
}

const handleRefresh = (model: any, key: { key: string; inputVisible: any }) => {
  model[key.key] = originalTheme.value[props.componentName][key.key]
  handleInput(model, key)
}

const handleInput = (model: any, key: { key: string; inputVisible: any }) => {
  key.inputVisible.value = model[key.key] !== originalTheme.value[props.componentName][key.key]
}
</script>

<template>
  <div class="editor" ref="body">
    <div v-for="key in editorItems" :key="key">
      <var-input class="editor__input" :placeholder="key.key" v-model="model[key.key]" @input="handleInput(model, key)">
        <template v-if="key.inputVisible.value" #append-icon>
          <var-icon name="refresh" @click="handleRefresh(model, key)" />
        </template>
      </var-input>
    </div>

    <var-button class="editor__suspend editor--375" type="primary" round @click="handleClick">
      <var-icon name="cog" :size="26" />
    </var-button>
  </div>
</template>

<style lang="less" scoped>
.editor {
  position: relative;
  margin-bottom: 55px;

  &__input {
    color: #646566;
    margin-top: 24px;
  }

  &__suspend {
    position: fixed;
    z-index: 10;
    padding: 18px;
    bottom: 61px;
    right: 400px;
  }

  @media screen and (min-width: 1600px) {
    &--375 {
      right: 450px;
    }
  }
}
</style>
