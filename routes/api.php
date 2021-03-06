<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/setting/country-build', 'SettingController@buildCountryList');
Route::get('/countries', 'SettingController@getCountryList');
Route::get('/setting/remove', 'SettingController@removeAll');

Route::post('/auth/login', 'AuthController@login');  
Route::post('/auth/register', 'AuthController@register');
Route::post('/auth/register/:referral', 'AuthController@register');


Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/auth/logout', 'AuthController@logout');
    Route::get('/team/members', 'AccountController@getTeamMembers');

});

Route::webhooks('/access/api/notification/payment/evolve-indicator', 'alfacoins');
