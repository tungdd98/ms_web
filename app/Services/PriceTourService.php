<?php

namespace App\Services;

use App\Models\PriceTour;

class PriceTourService implements PriceTourServiceInterface
{
    /**
     * Get list price tour
     */
    public function listPriceTour($dataRequest)
    {
        $priceTour = PriceTour::with('tour', 'customerType')
            ->orderByDesc('tour_id')
            ->paginate(PriceTour::PER_PAGE);

        return [
            'price_tour' => $priceTour->map(function ($price) {
                return $price->getPriceTourResponse();
            }),
            'per_page' => $priceTour->perPage(),
            'total' => $priceTour->total(),
            'current_page' => $priceTour->currentPage(),
            'last_page' => $priceTour->lastPage(),
        ];
    }
}