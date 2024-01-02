import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
    plugins: [pluginReact()],
    tools: {
        postcss: (config, { addPlugins }) => {
            addPlugins([
                // plug in unocss
                require('@unocss/postcss')
            ])
        }
    },
    output: {
        distPath: {
            root: '../../dist/apps/client'
        }
    }
})
