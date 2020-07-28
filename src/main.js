import App from './App.svelte'
import './styles/_custom.scss'

const app = new App({
  target: document.body,
  hydrate: true,
})

window.app = app

export default app
