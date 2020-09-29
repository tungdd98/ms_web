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
        $departureDay = DepartureDay::with('tour')
            ->orderByDesc('id')
            ->paginate(DepartureDay::PER_PAGE);

        return [
            'departure_day' => $departureDay->map(function ($departure) {
                return $departure->getDepartureDayResponse();
            }),
            'per_page' => $departureDay->perPage(),
            'total' => $departureDay->total(),
            'current_page' => $departureDay->currentPage(),
            'last_page' => $departureDay->lastPage(),
        ];
    }
}