<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('register', 'AuthController@register');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::group(['middleware' => 'jwt.auth', 'namespace' => 'Api'], function () {
        // User
        Route::get('users', 'UserController@index');
        Route::post('users', 'UserController@store');
        Route::delete('users/{id}', 'UserController@destroy');
        Route::post('users/{id}', 'UserController@update');

        // Country
        Route::get('countries', 'CountryController@index');
        Route::post('countries', 'CountryController@store');
        Route::delete('countries/{id}', 'CountryController@destroy');
        Route::post('countries/{id}', 'CountryController@update');

        // Time tour
        Route::get('time_tour', 'TimeTourController@index');
        Route::post('time_tour', 'TimeTourController@store');
        Route::delete('time_tour/{id}', 'TimeTourController@destroy');
        Route::post('time_tour/{id}', 'TimeTourController@update');

        // Vehicle tour
        Route::get('vehicle_tour', 'VehicleTourController@index');
        Route::post('vehicle_tour', 'VehicleTourController@store');
        Route::delete('vehicle_tour/{id}', 'VehicleTourController@destroy');
        Route::post('vehicle_tour/{id}', 'VehicleTourController@update');

        // Customer type
        Route::get('customer_type', 'CustomerTypeController@index');
        Route::post('customer_type', 'CustomerTypeController@store');
        Route::delete('customer_type/{id}', 'CustomerTypeController@destroy');
        Route::post('customer_type/{id}', 'CustomerTypeController@update');

        // Location
        Route::get('locations', 'LocationController@index');
        Route::post('locations', 'LocationController@store');
        Route::delete('locations/{id}', 'LocationController@destroy');
        Route::post('locations/{id}', 'LocationController@update');

        // Tour
        Route::get('tours', 'TourController@index');
        Route::post('tours', 'TourController@store');
        Route::delete('tours/{id}', 'TourController@destroy');
        Route::post('tours/{id}', 'TourController@update');

        // Departure day
        Route::get('departure_day', 'DepartureDayController@index');
        Route::post('departure_day', 'DepartureDayController@store');
        Route::delete('departure_day/{id}', 'DepartureDayController@destroy');
        Route::post('departure_day/{id}', 'DepartureDayController@update');

        // Price tour
        Route::get('price_tour', 'PriceTourController@index');
        Route::post('price_tour', 'PriceTourController@store');
        Route::delete('price_tour/{tour_id}/{customer_type_id}', 'PriceTourController@destroy');
        Route::post('price_tour/{tour_id}/{customer_type_id}', 'PriceTourController@update');
    });
});