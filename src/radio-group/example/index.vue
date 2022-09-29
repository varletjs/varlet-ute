<script setup>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { Radio as VarRadio, Icon as VarIcon, RadioGroup as VarRadioGroup } from '@varlet/ui'
import '@varlet/ui/es/radio/style/index'
import '@varlet/ui/es/icon/style/index'
import '@varlet/ui/es/radio-group/style/index'
import dark from '../../../theme/dark'
import { reactive, toRefs } from 'vue'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { useSync } from '../../utils/sync'

const values = reactive({
  value: false,
  value2: 0,
  value3: false,
  value4: false,
  value5: false,
  value6: 0,
  value7: false,
  value8: 0,
})
const { value, value2, value3, value4, value5, value6, value7, value8 } = toRefs(values)

watchLang(use)
watchDarkMode(dark)
useSync()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-radio v-model="value">{{ pack.currentValue }} {{ value }}</var-radio>

  <app-type>{{ pack.setState }}</app-type>
  <var-radio :unchecked-value="0" :checked-value="1" v-model="value2"> {{ pack.currentValue }} {{ value2 }} </var-radio>

  <app-type>{{ pack.setStyle }}</app-type>
  <var-radio unchecked-color="#e99eb4" checked-color="#f44336" v-model="value3">
    <template #unchecked-icon>
      <var-icon name="heart-half-full" size="24px" />
    </template>
    <template #checked-icon>
      <var-icon name="heart" size="24px" />
    </template>
    <template #default> {{ pack.currentValue }} {{ value3 }} </template>
  </var-radio>

  <app-type>{{ pack.disabled }}</app-type>
  <var-radio disabled v-model="value4">{{ pack.currentValue }} {{ value4 }}</var-radio>

  <app-type>{{ pack.readonly }}</app-type>
  <var-radio readonly v-model="value5">{{ pack.currentValue }} {{ value5 }}</var-radio>

  <app-type>{{ pack.radioGroup }}</app-type>
  <var-radio-group v-model="value6">
    <var-radio :checked-value="0">{{ pack.eat }}</var-radio>
    <var-radio :checked-value="1">{{ pack.sleep }}</var-radio>
  </var-radio-group>
  <div class="relation">{{ pack.currentValue }} {{ value6 }}</div>

  <app-type>{{ pack.radioValidate }}</app-type>
  <var-radio v-model="value7" :rules="[(v) => v || pack.radioValidateMessage]">
    {{ pack.currentValue }} {{ value7 }}
  </var-radio>

  <app-type>{{ pack.radioGroupValidate }}</app-type>
  <var-radio-group v-model="value8" :rules="[(v) => v === 0 || pack.radioGroupValidateMessage]">
    <var-radio :checked-value="0">{{ pack.eat }}</var-radio>
    <var-radio :checked-value="1">{{ pack.sleep }}</var-radio>
  </var-radio-group>
  <div class="relation">{{ pack.currentValue }} {{ value8 }}</div>

  <div class="space"></div>
</template>

<style scoped lang="less">
.relation {
  margin-top: 10px;
}

.button {
  margin-right: 10px;
}

.space {
  height: 40px;
}
</style>
