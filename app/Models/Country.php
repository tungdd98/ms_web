<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table = 'countries';
    public $timestamps = false;

    const PER_PAGE = 5;

    /**
     * locations
     *
     * @return void
     */
    public function location()
    {
        return $this->hasMany('App\Models\Location');
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

    /**
     * getCountryNavResponse
     *
     * @return void
     */
    public function getCountryNavResponse()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'is_nation' => $this->is_nation,
            'locations' => $this->location
        ];
    }
}