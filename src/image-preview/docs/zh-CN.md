# 图片预览

### 介绍

图片放大预览，支持双击倍数放大，支持函数调用和组件调用两种方式。

## 函数调用

### 基本使用

```html
<script setup>
import { ImagePreview } from '@varlet/ui'

const preview = () => {
  ImagePreview('https://varlet-varletjs.vercel.app/cat.jpg')
}
</script>

<template>
  <var-button type="primary" block @click="preview">基本使用</var-button>
</template>
```


```vue
import Editor from '../example/Editor'
```


## API

### 属性

| 参数         | 说明   | 类型  | 默认值  |
| ------------ | ------------ | ------------------ | ------------ |
| `show`       | 是否显示     | _boolean_ | `false` |
| `images`     | 需要预览的图片 URL 数组 | _string[]_ | `[]` |
| `current`    | 图片预览起始的 URL | _string_ | `-` |
| `zoom`       | 双击放大倍数 | _string \| number_ | `2` |
| `closeable`  | 是否显示关闭按钮 | _boolean_ | `false` |
| `loop`       | 是否开启循环播放 | _boolean_ | `true` |
| `indicator`  | 是否显示分页 | _boolean_ | `true` |
| `lock-scroll` | 锁定滚动 | _boolean_ | `true` |
| `teleport`   | 弹出层挂载的位置 | _TeleportProps['to']_ | `-` |

### 事件

| 事件名 | 说明  | 回调参数 |
| ----- | ---- | ----- |
| `change` | 切换图片时的回调函数，回调参数为当前索引 | `index: number` 图片索引 |
| `open`   | 打开 image-preview 时触发 | `-`  |
| `opened` | 打开 image-preview 动画结束时触发 | `-` |
| `close`  | 关闭 image-preview 时触发 | `-` |
| `closed` | 关闭 image-preview 动画结束时触发 | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `indicator` | 分页指示器 | `index: number` 图片索引 <br> `length: number` 图片总数 |
| `close-icon` | 关闭按钮 | `-` |
| `extra` | 额外插槽 | `-` |

### ImagePreview Options

| 参数   | 说明  |  类型  | 默认值 |
| ------ | ----------- | ------ | -------- |
| `images`     | 需要预览的图片 URL 数组或者单个图片的 URL  | _string[] \| string_ | `[]` |
| `current`    | 图片预览起始的 URL | _string_ | `-` |
| `zoom`       | 双击放大倍数  | _string \| number_ | `2` |
| `closeable`  | 是否显示关闭按钮 | _boolean_ | `false` |
| `loop`       | 是否开启循环播放 | _boolean_ | `true` |
| `indicator`  | 是否显示分页 | _boolean_ | `true` |
| `lockScroll` | 锁定滚动 | _boolean_ | `true` |
| `onChange`   | 切换图片时的回调函数，回调参数为当前索引 | _(index: number) => void_  |  `-` |
| `onOpen`   | image-preview 开启时候的回调 |  _() => void_ | `-` |
| `onOpened` | image-preview 动画结束时候的回调 |   _() => void_ | `-` |
| `onClose`  | image-preview 时关闭时候的回调 |  _() => void_ |  `-` |
| `onClosed` | image-preview 关闭动画结束时候的回调 |  _() => void_ | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名                                           | 默认值   |
|-----------------------------------------------| -------- |
| `--image-preview-swipe-indicators-text-color` | `#ddd`  |
| `--image-preview-swipe-indicators-padding`    | `16px 0` |
| `--image-preview-zoom-container-background`   | `#000`  |
| `--image-preview-close-icon-top`              | `14px` |
| `--image-preview-close-icon-right`            | `14px` |
| `--image-preview-close-icon-size`             | `22px` |
| `--image-preview-close-icon-color`            | `#fff` |
| `--image-preview-extra-top`                   | `14px` |
| `--image-preview-extra-left`                  | `14px` |

