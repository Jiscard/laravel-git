<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

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
        
       

        return response()->json($user, 201);
    }
    
    public function login(Request $request)
    {
        $validate = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8',
        ]);

        if(Auth::attempt($validate)){
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'user' => $user,
                'token' => $token,
            ]);
        }    
        return response()->json([
            'message' => 'Invalid credentials',
        ], 401);
    }

}
