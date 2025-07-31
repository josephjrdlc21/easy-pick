<?php

use Illuminate\Support\Facades\Route;
$namespace = "App\Laravel\Controllers\Web";

Route::group(['as' => "web.", 'namespace' => $namespace], function() {
    Route::get('/', 'MainController@index')->name('home');
});