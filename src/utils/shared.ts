import { saveAs } from 'file-saver'

export function flatObject(object: Record<string, any>) {
  return Object.entries(object).reduce((ret, [key, value]) => {
    ret = { ...ret, ...value }

    return ret
  }, {})
}

export async function downloadFile(theme: any) {
  const template = Object.keys(theme).reduce((template, key) => {
    template += `  '${key}': '${theme[key]}',\n`

    return template
  }, '')

  const { default: JSZip } = await import('jszip')
  const zip = new JSZip()
  zip.file('varlet-ute-theme.js', `export default {\n${template}}`)
  const blob = await zip.generateAsync({ type: 'blob' })
  saveAs(blob, 'varlet-ute-theme.zip')
}
