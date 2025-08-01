<?php

use Illuminate\Support\Facades\Route;
$namespace = "App\Laravel\Controllers\Portal";

Route::group(['prefix' => 'admin', 'as' => "portal.", 'namespace' => $namespace], function() {
    Route::get('/',  ['as' => "index", 'uses' => "MainController@index"]);

    Route::group(['as' => 'auth.'], function() {
        Route::get('/login',  ['as' => "index", 'uses' => "AuthController@index"]);
    });
});