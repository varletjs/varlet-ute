// lib
import _zhCN from '@varlet/ui/es/locale/zh-CN'
import _enCN from '@varlet/ui/es/locale/en-US'
// mobile example doc
import zhCN from './zh-CN'
import enUS from './en-US'
import { Locale } from '@varlet/ui'

const { useLocale, use: _use, add: _add } = Locale
const { add, use: exampleUse, pack, packs, merge } = useLocale<any>()

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
