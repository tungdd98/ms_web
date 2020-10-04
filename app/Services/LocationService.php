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

    /**
     * listLocationHomePage
     *
     * @param  mixed $dataRequest
     * @return void
     */
    public function listLocationHomePage($dataRequest)
    {
        $locations = Location::with('country')->orderByDesc('id');
        if (isset($dataRequest['type'])) {
            $type = $dataRequest['type'];
            switch ($type) {
                case "0":
                    $locations->whereHas('country', function ($query) {
                        $query->where('is_nation', 0);
                    });
                    break;
                case "1":
                    $locations->whereHas('country', function ($query) {
                        $query->where('is_nation', 1);
                    });
                    break;
            }
        }
        $locationsList = $locations->get();

        return [
            'locations' => $locationsList->map(function ($location) {
                return $location->getLocationResponse();
            }),
        ];
    }

    /**
     * getAllLocation
     *
     * @return void
     */
    public function getAllLocation()
    {
        $locations = Location::orderByDesc('id')->get();

        return [
            'locations' => $locations->map(function ($location) {
                return $location->getLocationResponse();
            }),
        ];
    }
}