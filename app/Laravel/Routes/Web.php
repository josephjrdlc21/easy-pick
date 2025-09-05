<?php

use Illuminate\Support\Facades\Route;
$namespace = "App\Laravel\Controllers\Web";

Route::group(['as' => "web.", 'namespace' => $namespace, 'middleware' => ["web"]], function() {
    Route::get('/home', ['as' => "home", 'uses' => "MainController@home", 'middleware' => "web.guest"]);

    Route::group(['as' => "auth."], function() {
        Route::group(['middleware' => "web.guest"], function(){
            Route::get('/login', ['as' => "login", 'uses' => "AuthController@login"]);
            Route::post('/login', ['uses' => "AuthController@authenticate"]);
            Route::get('/register', ['as' => "register", 'uses' => "AuthController@register"]);
            Route::post('/register', ['as' => "store", 'uses' => "AuthController@store"]);
        });
        
        Route::get('/logout', ['as' => "logout", 'uses' => "AuthController@logout"]);
    });

    Route::group(['middleware' => "web.auth"], function(){
        Route::get('/', ['as' => "index", 'uses' => "MainController@index"]);
    });
});