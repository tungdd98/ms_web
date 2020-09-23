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
        $vehicleTour = VehicleTour::orderBy("id", 'desc');
        $vehicleTourTourPaginate = $vehicleTour->paginate(VehicleTour::PER_PAGE);

        return [
            'vehicle_tour' => $vehicleTourTourPaginate->map(function ($item) {
                return $item->getVehicleTourResponse();
            }),
            'per_page' => $vehicleTourTourPaginate->perPage(),
            'total' => $vehicleTourTourPaginate->total(),
            'current_page' => $vehicleTourTourPaginate->currentPage(),
            'last_page' => $vehicleTourTourPaginate->lastPage(),
        ];
    }
}