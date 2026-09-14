import DefaultTheme from 'vitepress/theme'
import './style.css'
import WorkstreamBoard from './components/WorkstreamBoard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('WorkstreamBoard', WorkstreamBoard)
  }
}
