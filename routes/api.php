<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Models\User;
use App\Models\Student;
use Illuminate\Support\Facades\Hash;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('students', 'App\Http\Controllers\StudentController');
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::post('/login',[UserController::class, 'login']);
