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
        $customerType = CustomerType::orderBy("id", 'desc');
        $customerTypePaginate = $customerType->paginate(CustomerType::PER_PAGE);

        return [
            'customer_type' => $customerTypePaginate->map(function ($item) {
                return $item->getCustomerTypeResponse();
            }),
            'per_page' => $customerTypePaginate->perPage(),
            'total' => $customerTypePaginate->total(),
            'current_page' => $customerTypePaginate->currentPage(),
            'last_page' => $customerTypePaginate->lastPage(),
        ];
    }
}