<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Sanctum\HasApiTokens;

class UserController extends Controller
{
    use HasApiTokens, HasFactory, Notifiable;
    public function index()
    {
        $user = auth()->user();
        return response()->json([
            'user' => $user,
        ]);
    }
    public function store(Request $request)
    {
        $valitade = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ],201);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json([
            'user' => $user,
            'message' => 'User created successfully',	
        ], 201);
    }

}
