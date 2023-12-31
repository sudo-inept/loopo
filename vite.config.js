const { resolve } = require('path')

const { defineConfig } = require('vite')


module.exports = defineConfig({

    build: {

        rollupOptions: {

            input: {

                index: resolve(__dirname, 'index.html'),

                plans: resolve(__dirname, 'plans.html'),

            }

        },
        outDir: 'docs'

    }

})