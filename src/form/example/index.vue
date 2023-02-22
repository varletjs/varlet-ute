<script setup>
import {
  Button as VarButton,
  Space as VarSpace,
  Form as VarForm,
  Input as VarInput,
  Select as VarSelect,
  Option as VarOption,
  Checkbox as VarCheckbox,
  CheckboxGroup as VarCheckboxGroup,
  Radio as VarRadio,
  RadioGroup as VarRadioGroup,
  Switch as VarSwitch,
  Slider as VarSlider,
  Uploader as VarUploader,
  Counter as VarCounter,
  Rate as VarRate,
} from '@varlet/ui'
import { reactive, ref } from 'vue'
import { watchLang, AppType } from '@varlet/cli/client'
import { use, pack } from './locale'
import { useSync } from '../../utils/sync'
import '@varlet/ui/es/button/style/index'
import '@varlet/ui/es/space/style/index'
import '@varlet/ui/es/form/style/index'
import '@varlet/ui/es/input/style/index'
import '@varlet/ui/es/select/style/index'
import '@varlet/ui/es/option/style/index'
import '@varlet/ui/es/checkbox/style/index'
import '@varlet/ui/es/checkbox-group/style/index'
import '@varlet/ui/es/radio/style/index'
import '@varlet/ui/es/radio-group/style/index'
import '@varlet/ui/es/switch/style/index'
import '@varlet/ui/es/slider/style/index'
import '@varlet/ui/es/uploader/style/index'
import '@varlet/ui/es/counter/style/index'
import '@varlet/ui/es/rate/style/index'

const formData = reactive({
  username: '',
  password: '',
  department: '',
  gender: undefined,
  license: false,
  range: 0,
  count: 0,
  group: [],
  score: 0,
  like: [],
  files: [],
})

const form = ref(null)
const disabled = ref(false)
const readonly = ref(false)

watchLang((lang) => {
  use(lang)
  form.value?.reset()
})
useSync()
</script>

<template>
  <app-type>{{ pack.example }}</app-type>

  <var-form ref="form" :disabled="disabled" :readonly="readonly">
    <var-space direction="column" :size="['4vw', 0]">
      <var-input
        :placeholder="pack.username"
        :rules="[(v) => !!v || pack.usernameMessage]"
        v-model="formData.username"
      />
      <var-input
        type="password"
        :placeholder="pack.password"
        :rules="[(v) => !!v || pack.passwordMessage]"
        v-model="formData.password"
      />
      <var-select
        :placeholder="pack.department"
        :rules="[(v) => !!v || pack.departmentMessage]"
        v-model="formData.department"
      >
        <var-option :label="`${pack.eat}${pack.departmentUnit}`" />
        <var-option :label="`${pack.sleep}${pack.departmentUnit}`" />
        <var-option :label="`${pack.play}${pack.departmentUnit}`" />
      </var-select>
      <var-select
        multiple
        :placeholder="pack.group"
        :rules="[(v) => v.length >= 1 || pack.groupMessage]"
        v-model="formData.group"
      >
        <var-option :label="`${pack.eat}${pack.groupUnit}`" />
        <var-option :label="`${pack.sleep}${pack.groupUnit}`" />
        <var-option :label="`${pack.play}${pack.groupUnit}`" />
      </var-select>
      <var-radio-group :rules="[(v) => !!v || pack.genderMessage]" v-model="formData.gender">
        <var-radio :checked-value="1">{{ pack.male }}</var-radio>
        <var-radio :checked-value="2">{{ pack.female }}</var-radio>
      </var-radio-group>
      <var-checkbox-group :rules="[(v) => v.length > 0 || pack.likeMessage]" v-model="formData.like">
        <var-checkbox :checked-value="1">{{ pack.eat }}</var-checkbox>
        <var-checkbox :checked-value="2">{{ pack.sleep }}</var-checkbox>
        <var-checkbox :checked-value="3">{{ pack.play }}</var-checkbox>
      </var-checkbox-group>
      <var-rate :rules="[(v) => v >= 3 || pack.rateMessage]" v-model="formData.score" />
      <var-switch :rules="[(v) => !!v || pack.licenseMessage]" v-model="formData.license" />
      <var-counter :rules="[(v) => v > 10 || pack.countMessage]" v-model="formData.count" />
      <var-slider :rules="[(v) => v > 10 || pack.rangeMessage]" v-model="formData.range" />
      <var-uploader :rules="[(v) => v.length >= 1 || pack.filesMessage]" v-model="formData.files" />
    </var-space>
  </var-form>

  <app-type>{{ pack.controller }}</app-type>

  <var-space direction="column" :size="['4vw', 0]">
    <var-button block type="danger" @click="form.reset()">{{ pack.reset }}</var-button>
    <var-button block type="warning" @click="form.resetValidation()">{{ pack.resetValidation }}</var-button>
    <var-button block type="success" @click="form.validate()">{{ pack.validate }}</var-button>
    <var-button block type="info" @click="disabled = !disabled">{{ pack.disabled }}</var-button>
    <var-button block type="primary" @click="readonly = !readonly">{{ pack.readonly }}</var-button>
  </var-space>

  <div class="space"></div>
</template>

<style scoped lang="less">
.space {
  height: 40px;
}
</style>
