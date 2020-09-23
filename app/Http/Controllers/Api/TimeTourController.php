<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\ApiResponse;
use App\Services\TimeTourServiceInterface;
use App\Models\TimeTour;
use Illuminate\Http\Request;

class TimeTourController extends ApiController
{
    protected $timeTourService;

    public function __construct(
        Request $request,
        ApiResponse $response,
        TimeTourServiceInterface $timeTourService
    ) {
        $this->timeTourService = $timeTourService;

        parent::__construct($request, $response);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $this->timeTourService->listTimeTour($request->all());

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
        $timeTour = [
            'title' => $dataRequest['title'],
        ];
        TimeTour::create($timeTour);

        return $this->response->withMessage("Add successful", $timeTour, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TimeTour  $timeTour
     * @return \Illuminate\Http\Response
     */
    public function show(TimeTour $timeTour)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TimeTour  $timeTour
     * @return \Illuminate\Http\Response
     */
    public function edit(TimeTour $timeTour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TimeTour  $timeTour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $dataRequest = $request->all();
        $timeTour = TimeTour::findOrFail($id);
        $timeTour->update($dataRequest);
        $timeTour->save();

        return $this->response->withMessage("Update successful", $timeTour);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TimeTour  $timeTour
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $timeTour = TimeTour::findOrFail($id);
        $timeTour->delete();

        return $this->response->withMessage("Delete successful");
    }
}