import { StyleProvider } from "@varlet/ui";
import { onUnmounted } from "vue";
import { flatObject } from "./shared";

export function useSync() {
  function handleMessage(event: MessageEvent) {
    if (event.data.action === 'editor-change') {
      const currentTheme = localStorage.getItem('VARLET_THEME') as 'lightTheme' | 'darkTheme'
      const patch = JSON.parse(localStorage.getItem(currentTheme)!)
      const styleVars = flatObject(patch)

      StyleProvider(styleVars)
    }
  }

  window.addEventListener('message', handleMessage)

  onUnmounted(() => {
    window.removeEventListener('message', handleMessage)
  })

  window.parent.postMessage({ action: 'editor-example-mounted', from: 'editor-mobile' })
}
