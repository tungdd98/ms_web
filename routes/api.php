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

// Admin
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('register', 'AuthController@register');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::group(['middleware' => 'jwt.auth', 'namespace' => 'Api'], function () {
        // User
        Route::get('get-list-user', 'UserController@index');
        Route::post('create-user', 'UserController@store');
        Route::delete('delete-user/{id}', 'UserController@destroy');
        Route::post('update-user/{id}', 'UserController@update');

        // Country
        Route::get('get-list-country', 'CountryController@index');
        Route::get('get-all-country', 'CountryController@getAll');
        Route::post('create-country', 'CountryController@store');
        Route::delete('delete-country/{id}', 'CountryController@destroy');
        Route::post('update-country/{id}', 'CountryController@update');

        // Time tour
        Route::get('get-list-time-tour', 'TimeTourController@index');
        Route::get('get-all-time-tour', 'TimeTourController@getAll');
        Route::post('create-time-tour', 'TimeTourController@store');
        Route::delete('delete-time-tour/{id}', 'TimeTourController@destroy');
        Route::post('update-time-tour/{id}', 'TimeTourController@update');

        // Vehicle tour
        Route::get('get-list-vehicle-tour', 'VehicleTourController@index');
        Route::get('get-all-vehicle-tour', 'VehicleTourController@getAll');
        Route::post('create-vehicle-tour', 'VehicleTourController@store');
        Route::delete('delete-vehicle-tour/{id}', 'VehicleTourController@destroy');
        Route::post('update-vehicle-tour/{id}', 'VehicleTourController@update');

        // Customer type
        Route::get('get-list-customer-type', 'CustomerTypeController@index');
        Route::get('get-all-customer-type', 'CustomerTypeController@getAll');
        Route::post('create-customer-type', 'CustomerTypeController@store');
        Route::delete('delete-customer-type/{id}', 'CustomerTypeController@destroy');
        Route::post('update-customer-type/{id}', 'CustomerTypeController@update');

        // Location
        Route::get('get-list-location', 'LocationController@index');
        Route::get('get-all-location', 'LocationController@getAll');
        Route::post('create-location', 'LocationController@store');
        Route::delete('delete-location/{id}', 'LocationController@destroy');
        Route::post('update-location/{id}', 'LocationController@update');

        // Tour
        Route::get('get-list-tour', 'TourController@index');
        Route::get('get-all-tour', 'TourController@getAll');
        Route::post('create-tour', 'TourController@store');
        Route::delete('delete-tour/{id}', 'TourController@destroy');
        Route::post('update-tour/{id}', 'TourController@update');

        // Departure day
        Route::get('get-list-departure-day', 'DepartureDayController@index');
        Route::post('create-departure-day', 'DepartureDayController@store');
        Route::delete('delete-departure-day/{id}', 'DepartureDayController@destroy');
        Route::post('update-departure-day/{id}', 'DepartureDayController@update');

        // Price tour
        Route::get('get-list-price-tour', 'PriceTourController@index');
        Route::post('create-price-tour', 'PriceTourController@store');
        Route::delete('delete-price-tour/{tour_id}/{customer_type_id}', 'PriceTourController@destroy');
        Route::post('update-price-tour/{tour_id}/{customer_type_id}', 'PriceTourController@update');
    });
});

// Client
Route::group(['namespace' => 'Api'], function () {
    Route::get('get-tours-home-page', 'TourController@getToursHomePage');
    Route::get('get-locations-home-page', 'LocationController@getLocationsHomePage');
    Route::get('get-all-country-nav', 'CountryController@getCountryNav');
});