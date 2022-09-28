# Icon

### Intro

Font based icon library, also support web images.
Font icons are from [Material Design Icon](https://materialdesignicons.com/).

### Icon Size

```html
<template>
  <var-icon name="checkbox-marked-circle" />
  <var-icon name="checkbox-marked-circle" :size="26"/>
</template>
```


```vue
import ModifyColor from '../example/ModifyColor'
```

## API

### Props

| Prop         | Description                                    | Type               | Default    |
| ------------ | ---------------------------------------------- | ------------------ | ---------- |
| `name`       | icon name                                      | _string_           | `-`        |
| `size`       | icon size                                      | _string \| number_ | `-`        |
| `color`      | icon color, Only applies to font icons         | _string_           | `-`        |
| `namespace`  | Icon namespace, extensible custom icon library | _string_           | `var-icon` |
| `transition` | Transition animation time(ms)                  | _string \| number_ | `0`        |

### Events

| Event   | Description                          | Arguments      |
| ------- | ------------------------------------ | -------------- |
| `click` | Triggered when you click on the icon | `event: Event` |

### Style Variables

Here are the CSS variables used by the component, Styles can be customized using [StyleProvider](#/en-US/style-provider)

| Variable      | Default |
| ------------- | ------- |
| `--icon-size` | `20px`  |
