<?php

namespace App\Services;

use App\Models\VehicleTour;

class VehicleTourService implements VehicleTourServiceInterface
{
    /**
     * listVehicleTour
     *
     * @param  mixed $dataRequest
     * @return void
     */
    public function listVehicleTour($dataRequest)
    {
        $vehicleTour = VehicleTour::orderByDesc("id")
            ->paginate(VehicleTour::PER_PAGE);

        return [
            'vehicle_tour' => $vehicleTour->map(function ($item) {
                return $item->getVehicleTourResponse();
            }),
            'per_page' => $vehicleTour->perPage(),
            'total' => $vehicleTour->total(),
            'current_page' => $vehicleTour->currentPage(),
            'last_page' => $vehicleTour->lastPage(),
        ];
    }
}