<?php

namespace App\Services;

use App\Models\Location;

class LocationService implements LocationServiceInterface
{
    /**
     * Get list user
     */
    public function listLocation($dataRequest)
    {
        $locations = Location::orderBy("id", 'desc');
        $locationsPaginate = $locations->paginate(Location::PER_PAGE);

        return [
            'locations' => $locationsPaginate->map(function ($country) {
                return $country->getLocationResponse();
            }),
            'per_page' => $locationsPaginate->perPage(),
            'total' => $locationsPaginate->total(),
            'current_page' => $locationsPaginate->currentPage(),
            'last_page' => $locationsPaginate->lastPage(),
        ];
    }
}