<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\ApiResponse;
use App\Services\PriceTourServiceInterface;
use App\Models\PriceTour;
use Illuminate\Http\Request;

class PriceTourController extends ApiController
{
    protected $priceTourService;

    public function __construct(
        Request $request,
        ApiResponse $response,
        PriceTourServiceInterface $priceTourService
    ) {
        $this->priceTourService = $priceTourService;

        parent::__construct($request, $response);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $this->priceTourService->listPriceTour($request->all());

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
        $priceTour = [
            'original_price' => $dataRequest['original_price'],
            'price' => $dataRequest['price'],
            'customer_type_id' => $dataRequest['customer_type_id'],
            'tour_id' => $dataRequest['tour_id'],
        ];
        PriceTour::create($priceTour);

        return $this->response->withMessage("Add successful", $priceTour, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PriceTour  $priceTour
     * @return \Illuminate\Http\Response
     */
    public function show(PriceTour $priceTour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PriceTour  $priceTour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $tour_id, $customer_type_id)
    {
        $dataRequest = $request->all();
        $priceTour = PriceTour::where([
            ['tour_id', '=', $tour_id],
            ['customer_type_id', '=', $customer_type_id],
        ])->first();
        $priceTour->update($dataRequest);
        $priceTour->save();

        return $this->response->withMessage("Update successful", $priceTour);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PriceTour  $priceTour
     * @return \Illuminate\Http\Response
     */
    public function destroy($tour_id, $customer_type_id)
    {
        $priceTour = PriceTour::where([
            ['tour_id', '=', $tour_id],
            ['customer_type_id', '=', $customer_type_id],
        ])->first();
        $priceTour->delete();

        return $this->response->withMessage("Delete successful");
    }
}