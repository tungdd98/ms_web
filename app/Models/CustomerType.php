<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerType extends Model
{
    protected $table = 'customer_type';
    public $timestamps = false;

    const PER_PAGE = 5;

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
    public function getCustomerTypeResponse()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
        ];
    }
}