<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;

// Serve Angular's index.html for all frontend routes
Route::get('/{any}', function () {
    $path = public_path('index.html'); // Load Angular's index.html

    if (!File::exists($path)) {
        abort(404);
    }

    return Response::file($path);
})->where('any', '^(?!api).*$'); // Exclude API routes

