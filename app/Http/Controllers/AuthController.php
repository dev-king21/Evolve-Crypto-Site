<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Validator;
use Log;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $v = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        if ($v->fails()) {
            return response()->json([
                'error' => $v->errors()
            ], 400);
        }

        $credentials = request(['email', 'password']);
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token =  $user->createToken('Personal Access Token')->accessToken;
       
            return response()
                ->json([
                    'logged_in_user' => $user,
                    'accessToken' => $token,
                ], 200);
        } else {
            return response()->json(['error' => 'invalid-credentials'], 422);
        }
    }

    public function logout(Request $request)
    {
        Log::info(Auth::user()["email"]."; ".Auth::user()["password"]);
        Auth::user()->token()->revoke();
        return response()->json([
            'message' => 'successful-logout'
        ]);
    }

    public function register(Request $request) {
        $v = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',            
            'uid' => 'required',
            'email' => 'required|string|email',
            'password' => 'required|string',
            'country' => 'required',
        ]);
        if ($v->fails()) {
            return response()->json([
                'error' => $v->errors()
            ], 400);
        }

        $cnt = User::where(["email" => $request->post("email")])->count();
        if ($cnt != 0) {
            return response()->json([
                'error' => 'already-exist-user'
            ], 400);
        }

        $user = new User;
        $user->first_name = $request->post('first_name');
        $user->last_name = $request->post('last_name');
        $user->uid = $request->post('uid');
        $user->country = $request->post('country');
        $user->email = $request->post('email');
        $user->password = bcrypt($request->post('password'));
        $user->save();
        Log::info($request->post('password'));

        if (Auth::attempt(request(['email', 'password']))) {
            $user = Auth::user();
            $token =  $user->createToken('Personal Access Token')->accessToken;
       
            return response()
                ->json([
                    'logged_in_user' => $user,
                    'accessToken' => $token,
                ], 200);
        } else {
            return response()
                ->json([
                    'error' => 'unauthorized'
                ], 401);
        }        
    }
}