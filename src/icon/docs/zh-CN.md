# 图标

### 介绍

基于字体的图标库，也支持网络图片。
字体图标来自 [Material Design Icon](https://materialdesignicons.com/)

### 图标尺寸

```html
<template>
  <var-icon name="checkbox-marked-circle" />
  <var-icon name="checkbox-marked-circle" :size="26"/>
</template>
```

```vue
import Editor from '../example/Editor'
```


## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 图标名称 | _string_ | `-` |
| `size` | 尺寸 | _string \| number_ | `-` |
| `color` | 图标颜色, 只适用于字体图标 | _string_ | `-` |
| `namespace` | 图标的命名空间, 可扩展自定义图标库 |  _string_ | `var-icon` |
| `transition` | 过渡动画时间（ms） |  _string \| number_ | `0` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击图标时触发 | `event: Event` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--icon-size` | `20px` |
