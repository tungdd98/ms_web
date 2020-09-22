<?php

namespace App\Services;

use App\Models\Country;

class CountryService implements CountryServiceInterface
{
    /**
     * Get list user
     */
    public function listCountry($dataRequest)
    {
        $countries = Country::orderBy("id", 'desc');
        $countriesPaginate = $countries->paginate(Country::PER_PAGE);

        return [
            'countries' => $countriesPaginate->map(function ($country) {
                return $country->getCountryResponse();
            }),
            'per_page' => $countriesPaginate->perPage(),
            'total' => $countriesPaginate->total(),
            'current_page' => $countriesPaginate->currentPage(),
            'last_page' => $countriesPaginate->lastPage(),
        ];
    }
}