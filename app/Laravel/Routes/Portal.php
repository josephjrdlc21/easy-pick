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
            Route::get('/create',  ['as' => "create", 'uses' => "UserController@create"]);
            Route::post('/create',  ['uses' => "UserController@store"]);
            Route::get('/edit/{id?}',  ['as' => "edit", 'uses' => "UserController@edit"]);
            Route::post('/edit/{id?}',  ['uses' => "UserController@update"]);
            Route::get('/edit-status/{id?}',  ['as' => "update_status", 'uses' => "UserController@update_status"]);
            Route::get('/edit-password/{id?}',  ['as' => "update_password", 'uses' => "UserController@update_password"]);
            Route::get('/show/{id?}',  ['as' => "show", 'uses' => "UserController@show"]);
            Route::any('/delete/{id?}',  ['as' => "delete", 'uses' => "UserController@destroy"]);
        });

        Route::group(['prefix' => "coupons", 'as' => "coupons."], function() {
            Route::get('/',  ['as' => "index", 'uses' => "CouponController@index"]);
            Route::get('/create',  ['as' => "create", 'uses' => "CouponController@create"]);
            Route::post('/create',  ['uses' => "CouponController@store"]);
            Route::get('/edit/{id?}',  ['as' => "edit", 'uses' => "CouponController@edit"]);
            Route::post('/edit/{id?}',  ['uses' => "CouponController@update"]);
            Route::any('/delete/{id?}',  ['as' => "delete", 'uses' => "CouponController@destroy"]);
        });

        Route::group(['prefix' => "categories", 'as' => "categories."], function() {
            Route::get('/',  ['as' => "index", 'uses' => "CategoryController@index"]);
        });
    });
});