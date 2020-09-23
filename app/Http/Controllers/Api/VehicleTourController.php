<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\ApiResponse;
use App\Services\VehicleTourServiceInterface;
use App\Models\VehicleTour;
use Illuminate\Http\Request;

class VehicleTourController extends ApiController
{
    protected $vehicleTourService;

    public function __construct(
        Request $request,
        ApiResponse $response,
        VehicleTourServiceInterface $vehicleTourService
    ) {
        $this->vehicleTourService = $vehicleTourService;

        parent::__construct($request, $response);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $this->vehicleTourService->listVehicleTour($request->all());

        return $this->response->withData($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        $vehicleTour = [
            'title' => $dataRequest['title'],
        ];
        VehicleTour::create($vehicleTour);

        return $this->response->withMessage("Add successful", $vehicleTour, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VehicleTour  $vehicleTour
     * @return \Illuminate\Http\Response
     */
    public function show(VehicleTour $vehicleTour)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VehicleTour  $vehicleTour
     * @return \Illuminate\Http\Response
     */
    public function edit(VehicleTour $vehicleTour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\VehicleTour  $vehicleTour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $dataRequest = $request->all();
        $vehicleTour = VehicleTour::findOrFail($id);
        $vehicleTour->update($dataRequest);
        $vehicleTour->save();

        return $this->response->withMessage("Update successful", $vehicleTour);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VehicleTour  $vehicleTour
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $vehicleTour = VehicleTour::findOrFail($id);
        $vehicleTour->delete();

        return $this->response->withMessage("Delete successful");
    }
}