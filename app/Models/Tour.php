<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    protected $table = 'tours';

    const PER_PAGE = 10;

    /**
     * locationsDeparture - điểm đi
     *
     * @return void
     */
    public function locationsDeparture()
    {
        return $this->belongsTo('App\Models\Location', 'departure_location_id', 'id');
    }

    /**
     * locationsDestination - điểm đến
     *
     * @return void
     */
    public function locationsDestination()
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
        'albums'
    ];

    /**
     * Response detail tour
     */
    public function getTourResponse()
    {
        $departureLocationName = !empty($this->departure_location_id) ? $this->locationsDeparture->where('id', $this->departure_location_id)->first()->title : null;
        $destinationLocationName = !empty($this->destination_location_id) ? $this->locationsDeparture->where('id', $this->destination_location_id)->first()->title : null;
        $timeTourName = !empty($this->time_id) ? $this->timeTour->where('id', $this->time_id)->first()->title : null;
        $vehicleTourName = !empty($this->vehicle_id) ? $this->vehicleTour->where('id', $this->vehicle_id)->first()->title : null;
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
            'departure_location_name' => $departureLocationName,
            'destination_location_name' => $destinationLocationName,
            'time_name' => $timeTourName,
            'vehicle_name' => $vehicleTourName,
        ];
    }
}