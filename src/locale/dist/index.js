'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
exports.__esModule = true
exports._LocaleComponent =
  exports.useLocale =
  exports.merge =
  exports.use =
  exports.add =
  exports.pack =
  exports.packs =
    void 0
var vue_1 = require('vue')
var zh_CN_1 = require('./zh-CN')
function useLocale() {
  var packs = {}
  var pack = vue_1.ref({})
  var add = function (lang, pack) {
    pack.lang = lang
    packs[lang] = pack
  }
  var use = function (lang) {
    if (!packs[lang]) {
      console.warn('The ' + lang + ' does not exist. You can mount a language package using the add method')
      return {}
    }
    pack.value = packs[lang]
  }
  var merge = function (lang, pack) {
    if (!packs[lang]) {
      console.warn('The ' + lang + ' does not exist. You can mount a language package using the add method')
      return
    }
    packs[lang] = __assign(__assign({}, packs[lang]), pack)
    use(lang)
  }
  return {
    packs: packs,
    pack: pack,
    add: add,
    use: use,
    merge: merge,
  }
}
exports.useLocale = useLocale
var _a = useLocale(),
  packs = _a.packs,
  pack = _a.pack,
  add = _a.add,
  use = _a.use,
  merge = _a.merge
exports.packs = packs
exports.pack = pack
exports.add = add
exports.use = use
exports.merge = merge
add('zh-CN', zh_CN_1['default'])
use('zh-CN')
exports._LocaleComponent = { packs: packs, pack: pack, add: add, use: use, merge: merge, useLocale: useLocale }
exports['default'] = {
  packs: packs,
  pack: pack,
  add: add,
  use: use,
  merge: merge,
  useLocale: useLocale,
}
