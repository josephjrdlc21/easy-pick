import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx', 'app/Laravel/Views/Portal/portal.jsx'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
});