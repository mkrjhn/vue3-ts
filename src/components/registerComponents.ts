import type { App } from 'vue'

const modules = import.meta.globEager('./*.vue')

export default (app: App) => {
  Object.entries(modules).forEach(([path, definition]) => {
    const name = path.split('/').pop()?.replace(/\.\w+$/, '')
    if (!name) return
    app.component(name, definition.default)
  })
}
