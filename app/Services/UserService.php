<?php

namespace App\Services;

use App\Models\User;

class UserService implements UserServiceInterface
{
    /**
     * Get list user
     */
    public function listUser($dataRequest)
    {
        $users = User::orderBy("created_at", 'desc');
        $usersPaginate = $users->paginate(User::PER_PAGE);

        return [
            'users' => $usersPaginate->map(function ($user) {
                return $user->getUserResponse();
            }),
            'per_page' => $usersPaginate->perPage(),
            'total' => $usersPaginate->total(),
            'current_page' => $usersPaginate->currentPage(),
            'last_page' => $usersPaginate->lastPage(),
        ];
    }
}