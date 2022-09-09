<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'
import ButtonTheme from '../theme/button'
import { Input as varInput } from '@varlet/ui'
import '@varlet/ui/es/input/style/index'
import { reactive, watch } from 'vue'

const _ButtonTheme = reactive(ButtonTheme)
watch(_ButtonTheme,
  (newVal, oldVal) => {
    console.log(newVal);
  },
  {
    immediate: true
  }
)

const handleChange = (e) => {
  console.log(_ButtonTheme, 1111)
}

watchLang(use, 'pc')
</script>

<template>
  <div class="body">
    <div v-for="(val,key,i) in _ButtonTheme" :key="i">
      <div v-if="key.includes('color')" style="margin-bottom: 24px">
        <label class="text">{{key}}</label>
        <input type="color" :value="_ButtonTheme[key]" style="display: block; width: 100%;margin-top: 8px;">
      </div>
      <var-input class="label" v-else :placeholder="key" clearable v-model="_ButtonTheme[key]"
        :onchange="handleChange" />
    </div>
  </div>

</template>

<style>
.body {
  padding: 24px;
}

.text {
  color: #888888;
  font-size: 12px;
}

.label {
  color: #646566;
  margin-top: 24px;
}
</style>
