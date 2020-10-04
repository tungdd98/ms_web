<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ApiResponse;
use App\Http\Controllers\Api\ApiController;
use App\Services\LocationServiceInterface;
use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends ApiController
{
    protected $locationService;
    protected $folder = "upload/locations";

    public function __construct(
        Request $request,
        ApiResponse $response,
        LocationServiceInterface $locationService
    ) {
        $this->locationService = $locationService;

        parent::__construct($request, $response);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $this->locationService->listLocation($request->all());

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
        $location = [
            'title' => $dataRequest['title'],
            'description' => $dataRequest['description'],
            'is_start' => $dataRequest['is_start'],
            'thumbnail' => $dataRequest['thumbnail'],
            'country_id' => $dataRequest['country_id'],
        ];
        Location::create($location);

        return $this->response->withMessage("Add successful", $location, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function show(Location $location)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $dataRequest = $request->all();
        $location = Location::findOrFail($id);
        if ($request->hasFile('thumbnail')) {
            // Update thumbnail
            $thumbnail = time() . $dataRequest['thumbnail']->getClientOriginalName();
            $dataRequest['thumbnail']->move("images/{$this->folder}", $thumbnail);
            $dataRequest['thumbnail'] = $thumbnail;
            // Remove old thumbnail
            if (!empty($location->thumbnail)) {
                $thumbnailRemove = public_path() . "/images/{$this->folder}/" . $location->thumbnail;
                if (file_exists($thumbnailRemove)) {
                    unlink($thumbnailRemove);
                }
            }
        }
        $location->update($dataRequest);
        $location->save();

        return $this->response->withMessage("Update successful", $location);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $location = Location::findOrFail($id);
        if (!empty($location->thumbnail)) {
            $imagePath = public_path() . "/images/{$this->folder}/" . $location->thumbnail;
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }
        $location->delete();

        return $this->response->withMessage("Delete successful");
    }

    /**
     * getLocationsHomePage
     *
     * @param  mixed $request
     * @return void
     */
    public function getLocationsHomePage(Request $request)
    {
        $data = $this->locationService->listLocationHomePage($request->all());

        return $this->response->withData($data);
    }

    /**
     * getAll
     *
     * @return void
     */
    public function getAll()
    {
        $data = $this->locationService->getAllLocation();

        return $this->response->withData($data);
    }
}