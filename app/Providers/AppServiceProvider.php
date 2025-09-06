<?php

namespace App\Providers;

use App\Laravel\Services\CustomValidator;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        /**
         * Secure the assets when https.
         */
        if(env('SECURE_ASSET',FALSE) == TRUE){
            $this->app['request']->server->set('HTTPS','on');
        }

        /**
         * Custom validation configuration.
         */
        Validator::resolver(function($translator, $data, $rules, $messages)
        {
            return new CustomValidator($translator, $data, $rules, $messages);
        });

        /**
         * Custom views configuration.
         */
        $this->loadViewsFrom(app_path('Laravel/Resources/views'), 'custom');
        app('view')->getFinder()->setPaths([app_path('Laravel/Resources/views')]);

        /**
         * Inertia global sharing of data configuration.
         */
        Inertia::share([
            'auth' => function () {
                return [
                    'portal' => auth('portal')->user(),
                    'merchant' => auth('merchant')->user(),
                    'web' => auth('web')->user(),
                ];
            },
            'flash' => function () {
                return [
                    'status' => session()->get('notification-status'),
                    'message' => session()->get('notification-msg'),
                ];
            },
        ]);
    }
}