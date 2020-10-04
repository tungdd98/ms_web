<?php

namespace App\Services;

interface TourServiceInterface
{
    public function listTour(array $data);
    public function listTourHomePage(array $data);
    public function getAllTour();
}