declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '@vitejs/plugin-vue' {
    import { Plugin } from 'vite'
    const plugin: Plugin
    export default plugin
}