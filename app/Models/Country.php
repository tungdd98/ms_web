<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table = 'countries';
    public $timestamps = false;

    const PER_PAGE = 10;

    /**
     * locations
     *
     * @return void
     */
    public function locations()
    {
        return $this->hasOne('App\Models\Location');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'is_nation',
    ];

    /**
     * Response detail country
     */
    public function getCountryResponse()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'is_nation' => $this->is_nation,
        ];
    }
}