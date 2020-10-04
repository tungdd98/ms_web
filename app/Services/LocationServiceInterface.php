<?php

namespace App\Services;

interface LocationServiceInterface
{
    public function listLocation(array $data);
    public function listLocationHomePage(array $data);
    public function getAllLocation();
}