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
        $timeTour = TimeTour::orderByDesc("id")
            ->paginate(TimeTour::PER_PAGE);

        return [
            'time_tour' => $timeTour->map(function ($item) {
                return $item->getTimeTourResponse();
            }),
            'per_page' => $timeTour->perPage(),
            'total' => $timeTour->total(),
            'current_page' => $timeTour->currentPage(),
            'last_page' => $timeTour->lastPage(),
        ];
    }
}