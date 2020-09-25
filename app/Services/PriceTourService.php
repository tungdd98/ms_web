<?php

namespace App\Services;

use App\Models\PriceTour;

class PriceTourService implements PriceTourServiceInterface
{
    /**
     * Get list user
     */
    public function listPriceTour($dataRequest)
    {
        $priceTour = PriceTour::orderBy("tour_id", 'desc');
        $priceTourPaginate = $priceTour->paginate(PriceTour::PER_PAGE);

        return [
            'price_tour' => $priceTourPaginate->map(function ($priceTour) {
                return $priceTour->getPriceTourResponse();
            }),
            'per_page' => $priceTourPaginate->perPage(),
            'total' => $priceTourPaginate->total(),
            'current_page' => $priceTourPaginate->currentPage(),
            'last_page' => $priceTourPaginate->lastPage(),
        ];
    }
}