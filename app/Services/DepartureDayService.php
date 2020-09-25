<?php

namespace App\Services;

use App\Models\DepartureDay;

class DepartureDayService implements DepartureDayServiceInterface
{
    /**
     * Get list departure day
     */
    public function listDepartureDay($dataRequest)
    {
        $departureDay = DepartureDay::orderBy("tour_id", 'desc');
        $departureDayPaginate = $departureDay->paginate(DepartureDay::PER_PAGE);

        return [
            'departure_day' => $departureDayPaginate->map(function ($country) {
                return $country->getDepartureDayResponse();
            }),
            'per_page' => $departureDayPaginate->perPage(),
            'total' => $departureDayPaginate->total(),
            'current_page' => $departureDayPaginate->currentPage(),
            'last_page' => $departureDayPaginate->lastPage(),
        ];
    }
}