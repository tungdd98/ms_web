<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TimeTour extends Model
{
    protected $table = 'time_tour';
    public $timestamps = false;

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
     * Response detail time tour
     */
    public function getTimeTourResponse()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
        ];
    }
}