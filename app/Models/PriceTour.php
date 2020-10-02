<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class PriceTour extends Model
{
    protected $table = 'price_tour';
    protected $primaryKey = ['tour_id', 'customer_type_id'];
    public $incrementing = false;
    public $timestamps = false;

    const PER_PAGE = 5;

    /**
     * tours
     *
     * @return void
     */
    public function tour()
    {
        return $this->belongsTo('App\Models\Tour', 'tour_id', 'id');
    }

    /**
     * customer_type
     *
     * @return void
     */
    public function customerType()
    {
        return $this->belongsTo('App\Models\CustomerType', 'customer_type_id', 'id');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'original_price',
        'price',
        'customer_type_id',
        'tour_id'
    ];

    /**
     * Response detail price tour
     */
    public function getPriceTourResponse()
    {
        return [
            'original_price' => $this->original_price,
            'price' => $this->price,
            'customer_type_id' => $this->customer_type_id,
            'tour_id' => $this->tour_id,
            'tour_name' => $this->tour->title ?? null,
            'customer_name' => $this->customerType->title ?? null
        ];
    }

    /**
     * Set the keys for a save update query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function setKeysForSaveQuery(Builder $query)
    {
        $keys = $this->getKeyName();
        if (!is_array($keys)) {
            return parent::setKeysForSaveQuery($query);
        }

        foreach ($keys as $keyName) {
            $query->where($keyName, '=', $this->getKeyForSaveQuery($keyName));
        }

        return $query;
    }

    /**
     * Get the primary key value for a save query.
     *
     * @param mixed $keyName
     * @return mixed
     */
    protected function getKeyForSaveQuery($keyName = null)
    {
        if (is_null($keyName)) {
            $keyName = $this->getKeyName();
        }

        if (isset($this->original[$keyName])) {
            return $this->original[$keyName];
        }

        return $this->getAttribute($keyName);
    }
}