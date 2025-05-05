<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Sanctum\HasApiTokens;
use App\Models\User;

class UserController extends Controller
{
    use HasApiTokens;
    public function index()
    {
        return response()->json([
            'users' => User::all(),
        ]);
    }
    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $validate['password'] = Hash::make($validate['password']);

        $user = User::create($validate);
        dd($request->all());

        return response()->json($user, 201);
    }

}
