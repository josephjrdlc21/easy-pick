<?php

use Illuminate\Support\Facades\Route;
$namespace = "App\Laravel\Controllers\Portal";

Route::group(['prefix' => 'admin', 'as' => "portal.", 'namespace' => $namespace], function() {
    Route::group(['as' => "auth."], function() {
        Route::group(['middleware' => "portal.guest"], function(){
            Route::get('/login',  ['as' => "index", 'uses' => "AuthController@index"]);
        });
    });

    Route::get('/',  ['as' => "index", 'uses' => "MainController@index"]);

    Route::group(['prefix' => "users", 'as' => "users."], function() {
        Route::get('/',  ['as' => "index", 'uses' => "UserController@index"]);
    });
});