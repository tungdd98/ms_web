<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $table = 'locations';
    public $timestamps = false;

    const PER_PAGE = 10;

    /**
     * tours
     *
     * @return void
     */
    public function tours()
    {
        return $this->hasOne('App\Models\Tour');
    }

    /**
     * countries 1 - 1
     *
     * @return void
     */
    public function countries()
    {
        return $this->belongsTo('App\Models\Country', 'country_id', 'id');
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
        'is_start',
        'country_id'
    ];

    /**
     * Response detail location
     */
    public function getLocationResponse()
    {
        $countryName = !empty($this->country_id) ? $this->countries->where('id', $this->country_id)->first()->title : null;
        return [
            'id' => $this->id,
            'title' => $this->title,
            'thumbnail' => $this->thumbnail,
            'description' => $this->description,
            'is_start' => $this->is_start,
            'country_id' => $this->country_id,
            'country_name' => $countryName
        ];
    }
}