<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'
import ButtonTheme from '../theme/button'
import { Input as varInput } from '@varlet/ui'
import '@varlet/ui/es/input/style/index'
import { reactive, watch } from 'vue'
import { DiffObj, Debounce } from '../../utils/diff'

const obj = JSON.parse(JSON.stringify(ButtonTheme))
const _ButtonTheme = reactive(ButtonTheme)
watch(_ButtonTheme,
  (newVal) => {
    console.log(DiffObj(newVal, obj));
  }
)

const handleChange = (e, key) => {
  Debounce(()=> {
    _ButtonTheme[key] = e.target.value
  }, 2000)()
}

watchLang(use, 'pc')
</script>

<template>
  <div class="body">
    <div v-for="(val,key,i) in _ButtonTheme" :key="i">
      <div v-if="key.includes('color')" style="margin-bottom: 24px">
        <label class="text">{{key}}</label>
        <input type="color" :value="_ButtonTheme[key]" style="display: block; width: 100%; margin-top: 8px;" @input="handleChange($event, key)">
      </div>
      <var-input class="label" v-else :placeholder="key" clearable v-model="_ButtonTheme[key]" />
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
