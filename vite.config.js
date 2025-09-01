import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'app/Laravel/Resources/js/portal/portal.jsx', 
                'app/Laravel/Resources/js/merchant/merchant.jsx',
                'app/Laravel/Resources/js/web/app.jsx'
            ],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@web': path.resolve(__dirname, 'app/Laravel/Resources/js/web'),
            '@portal': path.resolve(__dirname, 'app/Laravel/Resources/js/portal'),
            '@merchant': path.resolve(__dirname, 'app/Laravel/Resources/js/merchant'),
            '@ziggy': path.resolve(__dirname, 'vendor/tightenco/ziggy/src/js'),
        },
    },
});