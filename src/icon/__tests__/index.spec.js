import Icon from '../index'
import { createApp } from 'vue'

test('test Icon use', () => {
  const app = createApp({}).use(Icon)
  expect(app.component(Icon.name)).toBeTruthy()
})
