<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ApiResponse;
use App\Http\Controllers\Api\ApiController;
use App\Services\TourServiceInterface;
use App\Models\Tour;
use Illuminate\Http\Request;

class TourController extends ApiController
{
    protected $tourService;
    protected $folder = "upload/tours";

    public function __construct(
        Request $request,
        ApiResponse $response,
        TourServiceInterface $tourService
    ) {
        $this->tourService = $tourService;

        parent::__construct($request, $response);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $this->tourService->listTour($request->all());

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
        if ($request->hasFile('thumbnail')) {
            $thumbnail = time() . $dataRequest['thumbnail']->getClientOriginalName();
            $dataRequest['thumbnail']->move("images/{$this->folder}", $thumbnail);
            $dataRequest['thumbnail'] = $thumbnail;
        }
        $tour = [
            'title' => $dataRequest['title'],
            'description' => $dataRequest['description'],
            'content' => $dataRequest['content'],
            'thumbnail' => $dataRequest['thumbnail'],
            'departure_location_id' => $dataRequest['departure_location_id'],
            'destination_location_id' => $dataRequest['destination_location_id'],
            'time_id' => $dataRequest['time_id'],
            'vehicle_id' => $dataRequest['vehicle_id'],
            'place' => $dataRequest['place'],
            'schedule' => $dataRequest['schedule'],
            'albums' => $dataRequest['albums'],
        ];
        Tour::create($tour);

        return $this->response->withMessage("Add successful", $tour, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function show(Tour $tour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $dataRequest = $request->all();
        $tour = Tour::findOrFail($id);
        if ($request->hasFile('thumbnail')) {
            // Update thumbnail
            $thumbnail = time() . $dataRequest['thumbnail']->getClientOriginalName();
            $dataRequest['thumbnail']->move("images/{$this->folder}", $thumbnail);
            $dataRequest['thumbnail'] = $thumbnail;
            // Remove old avatar
            if (!empty($tour->thumbnail)) {
                $thumbnailRemove = public_path() . "/images/{$this->folder}/" . $tour->thumbnail;
                if (file_exists($thumbnailRemove)) {
                    unlink($thumbnailRemove);
                }
            }
        }
        $tour->update($dataRequest);
        $tour->save();

        return $this->response->withMessage("Update successful", $tour);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tour = Tour::findOrFail($id);
        if (!empty($tour->thumbnail)) {
            $imagePath = public_path() . "/images/{$this->folder}/" . $tour->thumbnail;
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }
        $tour->delete();

        return $this->response->withMessage("Delete successful");
    }
}