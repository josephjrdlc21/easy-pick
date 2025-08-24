import '../bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../css/tailwind.css";

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

createInertiaApp({
    title: title => `${title}`,
    resolve: name => {
        const pages = import.meta.glob('/app/Laravel/Resources/js/merchant/**/*.jsx', { eager: true })
        return pages[`/app/Laravel/Resources/js/merchant/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <App {...props} />
        );
    },
    progress: {
        color: '#fff',
    }
})