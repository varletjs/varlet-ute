<script setup>
import { ref } from 'vue'
import { Table as VarTable, Pagination as VarPagination } from '@varlet/ui'
import { pack, use } from './locale/index'
import { AppType, watchLang } from '@varlet/cli/client'
import '@varlet/ui/es/table/style/index'
import '@varlet/ui/es/pagination/style/index'
import { useSync } from '../../utils/sync'

const gen = (current, size) => {
  return Array.from({ length: size }).map((_, index) => {
    const id = (current - 1) * size + index + 1

    return {
      name: `Name ${id}`,
      math: id,
      english: id,
    }
  })
}

const list = ref(gen(1, 10))

const get = (current, size) => {
  list.value = gen(current, size)
}

watchLang(use)
useSync()
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-table>
    <thead>
      <tr>
        <th>{{ pack.name }}</th>
        <th>{{ pack.math }}</th>
        <th>{{ pack.english }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ pack.jerry }}</td>
        <td>124</td>
        <td>38</td>
      </tr>
      <tr>
        <td>{{ pack.tom }}</td>
        <td>100</td>
        <td>135</td>
      </tr>
    </tbody>
  </var-table>

  <app-type>{{ pack.slot }}</app-type>
  <var-table>
    <thead>
      <tr>
        <th>{{ pack.name }}</th>
        <th>{{ pack.math }}</th>
        <th>{{ pack.english }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="l in list" :key="l.name">
        <td>{{ l.name }}</td>
        <td>{{ l.math }}</td>
        <td>{{ l.english }}</td>
      </tr>
    </tbody>

    <template #footer>
      <div class="footer">
        <var-pagination :current="1" :total="100" :size-option="[5, 10]" @change="get" />
      </div>
    </template>
  </var-table>
</template>

<style lang="less" scoped>
.footer {
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
  align-items: center;
  height: 48px;
}
</style>
