<?php

use Illuminate\Support\Facades\Route;
$namespace = "App\Laravel\Controllers\Merchant";

Route::group(['prefix' => 'merchant', 'as' => "merchant.", 'namespace' => $namespace, 'middleware' => ["web"]], function() {
    Route::group(['as' => "auth."], function() {
        Route::group(['middleware' => "merchant.guest"], function(){
            Route::get('/register',  ['as' => "register", 'uses' => "AuthController@register"]);
            Route::post('/register',  ['uses' => "AuthController@store"]);
            Route::get('/login',  ['as' => "login", 'uses' => "AuthController@login"]);
            Route::post('/login',  ['uses' => "AuthController@authenticate"]);
        });

        Route::get('/logout', ['as' => "logout", 'uses' => "AuthController@logout"]);
    });

    Route::group(['middleware' => "merchant.auth"], function(){
        Route::get('/',  ['as' => "index", 'uses' => "MainController@index"]);

        Route::group(['prefix' => "products", 'as' => "products."], function() {
            Route::get('/',  ['as' => "index", 'uses' => "ProductController@index"]);
            Route::get('/create',  ['as' => "create", 'uses' => "ProductController@create"]);
            Route::post('/create',  ['uses' => "ProductController@store"]);
            Route::get('/edit/{id?}',  ['as' => "edit", 'uses' => "ProductController@edit"]);
            Route::post('/edit/{id?}',  ['uses' => "ProductController@update"]);
            Route::get('/show/{id?}',  ['as' => "show", 'uses' => "ProductController@show"]);
            Route::any('/delete/{id?}',  ['as' => "delete", 'uses' => "ProductController@destroy"]);
        });
    });
});