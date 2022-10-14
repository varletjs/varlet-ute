import { saveAs } from 'file-saver'

export function flatObject(object: Record<string, any>) {
  return Object.entries(object).reduce((ret, [key, value]) => {
    ret = { ...ret, ...value }

    return ret
  }, {})
}

export async function downloadFile(theme: any) {
  let objStr = ''
  Object.keys(theme).forEach((item) => {
    objStr += `  ${item}: '${theme[item]}',\n`
  })
  const themeStr = `const theme = {\n${objStr}}\nexport default theme`
  const { default: JSZip } = await import('jszip')
  const zip = new JSZip()
  zip.file('varlet-ute-theme.js', themeStr)
  const blob = await zip.generateAsync({ type: 'blob' })
  saveAs(blob, 'varlet-ute-theme.zip')
}
