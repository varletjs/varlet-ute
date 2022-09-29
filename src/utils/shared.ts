export function flatObject(object: Record<string, any>) {
  return Object.entries(object).reduce((ret, [key, value]) => {
    ret = { ...ret, ...value }

    return ret
  }, {})
}
