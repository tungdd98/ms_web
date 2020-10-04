<?php

namespace App\Services;

interface CountryServiceInterface
{
    public function listCountry(array $data);
    public function getAllCountry();
}