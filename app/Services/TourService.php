<?php

namespace App\Services;

use App\Models\Tour;

class TourService implements TourServiceInterface
{
    /**
     * Get list tour
     */
    public function listTour($dataRequest)
    {
        $tours = Tour::orderBy("created_at", 'desc');
        $toursPaginate = $tours->paginate(Tour::PER_PAGE);

        return [
            'tours' => $toursPaginate->map(function ($tour) {
                return $tour->getTourResponse();
            }),
            'per_page' => $toursPaginate->perPage(),
            'total' => $toursPaginate->total(),
            'current_page' => $toursPaginate->currentPage(),
            'last_page' => $toursPaginate->lastPage(),
        ];
    }
}