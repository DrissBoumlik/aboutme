import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src', // Set 'src' as the root folder
    build: {
        outDir: '../dist', // Output files to a 'dist' folder
        rollupOptions: {
            input: 'src/index.html', // Entry point
        },
    },
    base: './', // Use relative paths
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'), // Alias for cleaner imports
        },
    },
});
