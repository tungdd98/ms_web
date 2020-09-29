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
        $users = User::orderByDesc("created_at")
            ->paginate(User::PER_PAGE);

        return [
            'users' => $users->map(function ($user) {
                return $user->getUserResponse();
            }),
            'per_page' => $users->perPage(),
            'total' => $users->total(),
            'current_page' => $users->currentPage(),
            'last_page' => $users->lastPage(),
        ];
    }
}