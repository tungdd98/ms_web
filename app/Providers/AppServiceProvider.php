<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(
            \App\Services\UserServiceInterface::class,
            \App\Services\UserService::class
        );

        $this->app->singleton(
            \App\Services\CountryServiceInterface::class,
            \App\Services\CountryService::class
        );

        $this->app->singleton(
            \App\Services\TimeTourServiceInterface::class,
            \App\Services\TimeTourService::class
        );

        $this->app->singleton(
            \App\Services\VehicleTourServiceInterface::class,
            \App\Services\VehicleTourService::class
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}