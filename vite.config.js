import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: 'src/index.html',
        },
    },
    base: '/aboutme/',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
