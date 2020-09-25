<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VehicleTour extends Model
{
    protected $table = 'vehicle_tour';
    public $timestamps = false;

    /**
     * tours
     *
     * @return void
     */
    public function tours()
    {
        return $this->hasOne('App\Models\Tour');
    }

    const PER_PAGE = 10;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
    ];

    /**
     * Response detail vehicle tour
     */
    public function getVehicleTourResponse()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
        ];
    }
}