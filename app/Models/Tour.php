<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    protected $table = 'tours';

    const PER_PAGE = 5;
    const LIMIT = 10;

    /**
     * locationsDeparture - điểm đi
     *
     * @return void
     */
    public function locationDeparture()
    {
        return $this->belongsTo('App\Models\Location', 'departure_location_id', 'id');
    }

    /**
     * locationDestination
     *
     * @return void
     */
    public function locationDestination()
    {
        return $this->belongsTo('App\Models\Location', 'destination_location_id', 'id');
    }

    /**
     * timeTour
     *
     * @return void
     */
    public function timeTour()
    {
        return $this->belongsTo('App\Models\TimeTour', 'time_id', 'id');
    }

    /**
     * vehicleTour
     *
     * @return void
     */
    public function vehicleTour()
    {
        return $this->belongsTo('App\Models\VehicleTour', 'vehicle_id', 'id');
    }

    /**
     * priceTour
     *
     * @return void
     */
    public function priceTour()
    {
        return $this->hasMany('App\Models\PriceTour', 'tour_id', 'id');
    }

    /**
     * departureDay
     *
     * @return void
     */
    public function departureDay()
    {
        return $this->hasMany('App\Models\DepartureDay', 'tour_id', 'id');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'thumbnail',
        'description',
        'content',
        'departure_location_id',
        'destination_location_id',
        'time_id',
        'vehicle_id',
        'place',
        'schedule',
        'albums',
    ];

    /**
     * Response detail tour
     */
    public function getTourResponse()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'thumbnail' => $this->thumbnail,
            'description' => $this->description,
            'content' => $this->content,
            'departure_location_id' => $this->departure_location_id,
            'destination_location_id' => $this->destination_location_id,
            'time_id' => $this->time_id,
            'vehicle_id' => $this->vehicle_id,
            'place' => $this->place,
            'schedule' => $this->schedule,
            'albums' => $this->albums,
            'departure_location_name' => $this->locationDeparture->title ?? null,
            'destination_location_name' => $this->locationDestination->title ?? null,
            'time_name' => $this->timeTour->title ?? null,
            'vehicle_name' => $this->vehicleTour->title ?? null,
            'price_tour' => $this->priceTour,
            'departure_day' => $this->departureDay
        ];
    }
}