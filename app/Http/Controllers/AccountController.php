<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function getTeamMembers(Request $request) {
        $me = $request->user();
        return response()->json([
            "members" => $me->members,
            "owner" => $me
        ]);
    }
}
