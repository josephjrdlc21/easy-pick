<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        @viteReactRefresh
        @vite('resources/css/app.css')
        @routes
        @vite('app/Laravel/Views/Portal/portal.jsx')
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>