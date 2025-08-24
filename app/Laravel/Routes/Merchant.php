<?php

use Illuminate\Support\Facades\Route;
$namespace = "App\Laravel\Controllers\Merchant";

Route::group(['prefix' => 'merchant', 'as' => "merchant.", 'namespace' => $namespace, 'middleware' => ["web"]], function() {
    Route::group(['as' => "auth."], function() {
        Route::get('/register',  ['as' => "register", 'uses' => "AuthController@register"]);
    });

    Route::get('/',  ['as' => "index", 'uses' => "MainController@index"]);
});