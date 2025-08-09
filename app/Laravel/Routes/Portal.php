<?php

use Illuminate\Support\Facades\Route;
$namespace = "App\Laravel\Controllers\Portal";

Route::group(['prefix' => 'admin', 'as' => "portal.", 'namespace' => $namespace], function() {
    Route::group(['as' => "auth."], function() {
        Route::group(['middleware' => "portal.guest"], function(){
            Route::get('/login',  ['as' => "login", 'uses' => "AuthController@login"]);
            Route::post('/login',  ['uses' => "AuthController@authenticate"]);
        });

        Route::get('/logout', ['as' => "logout", 'uses' => "AuthController@logout"]);
    });

    Route::group(['middleware' => "portal.auth"], function(){
        Route::get('/',  ['as' => "index", 'uses' => "MainController@index"]);

        Route::group(['prefix' => "users", 'as' => "users."], function() {
            Route::get('/',  ['as' => "index", 'uses' => "UserController@index"]);
        });
    });
});