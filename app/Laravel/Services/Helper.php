<?php

namespace App\Laravel\Services;

use Illuminate\Support\Str;

class Helper{
    public static function create_filename($extension){
        return Str::lower(hash('xxh64', Str::random(10)) . "." . $extension);
    }

    public static function nice_display($string){
        return Str::title(str_replace("_", " ", $string));
    }
}