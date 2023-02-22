<script setup>
import { PullRefresh as VarPullRefresh, Cell as VarCell } from '@varlet/ui'
import dark from '../../../theme/dark'
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { watchDarkMode } from '@varlet/cli/client'
import { useSync } from '../../utils/sync'
import '@varlet/ui/es/pull-refresh/style/index'
import '@varlet/ui/es/cell/style/index'

const data1 = Array(10).fill('List Item')
const data2 = Array(10).fill('This is new List Item')

const isRefresh = ref(false)
const data = ref(data1)

const refresh = () => {
  setTimeout(() => {
    data.value = data.value[0] === 'List Item' ? data2 : data1
    isRefresh.value = false
  }, 2000)
}

const prevent = (event) => {
  event.preventDefault()
}

onMounted(() => {
  document.body.addEventListener('touchmove', prevent, { passive: false })
})

onBeforeUnmount(() => {
  document.body.removeEventListener('touchmove', prevent)
})

watchDarkMode(dark)
useSync()
</script>

<template>
  <var-pull-refresh @refresh="refresh" v-model="isRefresh" success-duration="2000">
    <var-cell v-for="(item, index) in data" :key="index" border>{{ item + ' ' + (index + 1) }}</var-cell>
  </var-pull-refresh>
</template>

<style lang="less" scoped>
.var-pull-refresh {
  margin-top: 18px;
}

.pull-refresh__example {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    min-height: 40px;
    line-height: 40px;
    padding: 0 16px;
    border-bottom: 1px solid #ccc;

    &:first-child {
      border-top: 1px solid #ccc;
    }
  }
}
</style>
