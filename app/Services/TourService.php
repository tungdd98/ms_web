<?php

namespace App\Services;

use App\Models\Tour;
use Carbon\Carbon;

class TourService implements TourServiceInterface
{
    /**
     * Get list tour
     */
    public function listTour($dataRequest)
    {
        $tours = Tour::with('locationDeparture', 'locationDestination', 'timeTour', 'vehicleTour', 'priceTour', 'departureDay')
            ->orderByDesc('created_at')
            ->paginate(Tour::PER_PAGE);

        return [
            'tours' => $tours->map(function ($tour) {
                return $tour->getTourResponse();
            }),
            'per_page' => $tours->perPage(),
            'total' => $tours->total(),
            'current_page' => $tours->currentPage(),
            'last_page' => $tours->lastPage(),
        ];
    }

    /**
     * getAllTour
     *
     * @return void
     */
    public function getAllTour()
    {
        $tours = Tour::orderByDesc('created_at')->get();

        return [
            'tours' => $tours->map(function ($tour) {
                return $tour->getTourResponse();
            }),
        ];
    }

    /**
     * Get list tour home page
     *
     * @param  mixed $dataRequest
     * @return void
     */
    public function listTourHomePage($dataRequest)
    {
        $tours = Tour::with('locationDeparture', 'locationDestination', 'timeTour', 'vehicleTour', 'priceTour', 'departureDay')
            ->select('tours.*');

        $tours->whereHas('departureDay', function ($query) {
            $query->where('start_day', '>=', Carbon::now());
        });

        if (isset($dataRequest['type'])) {
            $tours->join('locations', 'tours.destination_location_id', '=', 'locations.id')
                ->join('countries', 'locations.country_id', '=', 'countries.id')
                ->select('tours.*', 'countries.is_nation', 'locations.country_id')
                ->where('countries.is_nation', $dataRequest['type']);
        }

        if (isset($dataRequest['sale']) && $dataRequest['sale'] == 1) {
            $tours->whereHas('priceTour', function ($query) {
                $query->whereColumn('price', '<', 'original_price')
                    ->where('original_price', '<>', 0);
            });
        }

        $toursLimit = $tours->orderByDesc('created_at')->limit(Tour::LIMIT)->get();

        return [
            'tours' => $toursLimit->map(function ($tour) {
                return $tour->getTourResponse();
            }),
        ];
    }
}