/*
 * @Author: wzhaofei wangzf@wellnkiot.com
 * @Date: 2022-09-28 16:50:06
 * @LastEditors: wzhaofei wangzf@wellnkiot.com
 * @LastEditTime: 2022-09-28 17:00:07
 * @FilePath: \varlet-ute\src\list\example\locale\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// lib
import _zhCN from '@varlet/ui/es/locale/zh-CN'
import _enCN from '@varlet/ui/es/locale/en-US'
// mobile example doc
import zhCN from './zh-CN'
import enUS from './en-US'
import { Locale } from '@varlet/ui'

const { useLocale, use: _use, add: _add } = Locale

const { add, use: exampleUse, pack, packs, merge } = useLocale()

const use = (lang: string) => {
  _use(lang)
  exampleUse(lang)
}

export { add, pack, packs, merge, use }

// lib
_add('zh-CN', _zhCN)
_add('en-US', _enCN)
// mobile example doc
add('zh-CN', zhCN as any)
add('en-US', enUS as any)
