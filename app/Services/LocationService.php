<?php

namespace App\Services;

use App\Models\Location;

class LocationService implements LocationServiceInterface
{
    /**
     * Get list location
     */
    public function listLocation($dataRequest)
    {
        $locations = Location::with('country')
            ->orderByDesc('id')
            ->paginate(Location::PER_PAGE);

        return [
            'locations' => $locations->map(function ($location) {
                return $location->getLocationResponse();
            }),
            'per_page' => $locations->perPage(),
            'total' => $locations->total(),
            'current_page' => $locations->currentPage(),
            'last_page' => $locations->lastPage(),
        ];
    }
}