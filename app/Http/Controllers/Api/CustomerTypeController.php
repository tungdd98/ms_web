<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\ApiResponse;
use App\Services\CustomerTypeServiceInterface;
use App\Models\CustomerType;
use Illuminate\Http\Request;

class CustomerTypeController extends ApiController
{
    protected $customerTypeService;

    public function __construct(
        Request $request,
        ApiResponse $response,
        CustomerTypeServiceInterface $customerTypeService
    ) {
        $this->customerTypeService = $customerTypeService;

        parent::__construct($request, $response);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $this->customerTypeService->listCustomerType($request->all());

        return $this->response->withData($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dataRequest = $request->all();
        $customerType = [
            'title' => $dataRequest['title'],
        ];
        CustomerType::create($customerType);

        return $this->response->withMessage("Add successful", $customerType, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CustomerType  $customerType
     * @return \Illuminate\Http\Response
     */
    public function show(CustomerType $customerType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CustomerType  $customerType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $dataRequest = $request->all();
        $customerType = CustomerType::findOrFail($id);
        $customerType->update($dataRequest);
        $customerType->save();

        return $this->response->withMessage("Update successful", $customerType);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CustomerType  $customerType
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customerType = CustomerType::findOrFail($id);
        $customerType->delete();

        return $this->response->withMessage("Delete successful");
    }
}