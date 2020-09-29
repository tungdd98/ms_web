<?php

namespace App\Services;

use App\Models\CustomerType;

class CustomerTypeService implements CustomerTypeServiceInterface
{
    /**
     * listCustomerType
     *
     * @param  mixed $dataRequest
     * @return void
     */
    public function listCustomerType($dataRequest)
    {
        $customerType = CustomerType::orderByDesc("id")
            ->paginate(CustomerType::PER_PAGE);

        return [
            'customer_type' => $customerType->map(function ($item) {
                return $item->getCustomerTypeResponse();
            }),
            'per_page' => $customerType->perPage(),
            'total' => $customerType->total(),
            'current_page' => $customerType->currentPage(),
            'last_page' => $customerType->lastPage(),
        ];
    }
}