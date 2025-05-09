<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('students', 'App\Http\Controllers\StudentController');
Route::apiResource('users', 'App\Http\Controllers\Api\UserController');
