<?php

namespace App\Services;

use App\Models\Country;

class CountryService implements CountryServiceInterface
{
    /**
     * Get list country
     */
    public function listCountry($dataRequest)
    {
        $countries = Country::orderByDesc('id')
            ->paginate(Country::PER_PAGE);

        return [
            'countries' => $countries->map(function ($country) {
                return $country->getCountryResponse();
            }),
            'per_page' => $countries->perPage(),
            'total' => $countries->total(),
            'current_page' => $countries->currentPage(),
            'last_page' => $countries->lastPage(),
        ];
    }

    /**
     * getAllCountry
     *
     * @return void
     */
    public function getAllCountry()
    {
        $countries = Country::orderByDesc('id')->get();

        return [
            'countries' => $countries->map(function ($country) {
                return $country->getCountryResponse();
            })
        ];
    }
}