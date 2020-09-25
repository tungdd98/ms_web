<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\ApiResponse;
use App\Services\DepartureDayServiceInterface;
use App\Models\DepartureDay;
use Illuminate\Http\Request;

class DepartureDayController extends ApiController
{
    protected $departureDayService;

    public function __construct(
        Request $request,
        ApiResponse $response,
        DepartureDayServiceInterface $departureDayService
    ) {
        $this->departureDayService = $departureDayService;

        parent::__construct($request, $response);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $this->departureDayService->listDepartureDay($request->all());

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
        $departureDay = [
            'tour_id' => $dataRequest['tour_id'],
            'start_day' => $dataRequest['start_day'],
            'start_time' => $dataRequest['start_time'],
        ];
        DepartureDay::create($departureDay);

        return $this->response->withMessage("Add successful", $departureDay, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DepartureDay  $departureDay
     * @return \Illuminate\Http\Response
     */
    public function show(DepartureDay $departureDay)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DepartureDay  $departureDay
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $dataRequest = $request->all();
        $departureDay = DepartureDay::findOrFail($id);
        $departureDay->update($dataRequest);
        $departureDay->save();

        return $this->response->withMessage("Update successful", $departureDay);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DepartureDay  $departureDay
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $departureDay = DepartureDay::findOrFail($id);
        $departureDay->delete();

        return $this->response->withMessage("Delete successful");
    }
}