<?php

namespace App\Services;

use App\Models\TimeTour;

class TimeTourService implements TimeTourServiceInterface
{
    /**
     * Get list time tour
     */
    public function listTimeTour($dataRequest)
    {
        $timeTour = TimeTour::orderBy("id", 'desc');
        $timeTourPaginate = $timeTour->paginate(TimeTour::PER_PAGE);

        return [
            'time_tour' => $timeTourPaginate->map(function ($item) {
                return $item->getTimeTourResponse();
            }),
            'per_page' => $timeTourPaginate->perPage(),
            'total' => $timeTourPaginate->total(),
            'current_page' => $timeTourPaginate->currentPage(),
            'last_page' => $timeTourPaginate->lastPage(),
        ];
    }
}