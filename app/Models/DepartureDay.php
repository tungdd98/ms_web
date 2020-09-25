<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DepartureDay extends Model
{
    protected $table = 'departure_day';
    public $timestamps = false;

    const PER_PAGE = 10;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'start_day',
        'start_time',
        'tour_id',
    ];

    /**
     * tours
     *
     * @return void
     */
    public function tours()
    {
        return $this->belongsTo('App\Models\Tour', 'tour_id', 'id');
    }

    /**
     * Response detail departure day
     */
    public function getDepartureDayResponse()
    {
        $tourName = !empty($this->tour_id) ? $this->tours->where('id', $this->tour_id)->first()->title : null;
        return [
            'id' => $this->id,
            'start_day' => $this->start_day,
            'start_time' => $this->start_time,
            'tour_id' => $this->tour_id,
            'tour_name' => $tourName
        ];
    }
}