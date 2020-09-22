<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiResponse;
use App\Http\Controllers\Api\ApiController;
use App\Services\UserServiceInterface;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends ApiController
{
    protected $userService;
    protected $folder = "upload/users";

    public function __construct(
        Request $request,
        ApiResponse $response,
        UserServiceInterface $userService
    ) {
        $this->userService = $userService;

        parent::__construct($request, $response);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $this->userService->listUser($request->all());

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
        if ($request->hasFile('avatar')) {
            $avatar = time() . $dataRequest['avatar']->getClientOriginalName();
            $dataRequest['avatar']->move("images/{$this->folder}", $avatar);
            $dataRequest['avatar'] = $avatar;
        }
        $user = [
            'name' => $dataRequest['name'],
            'email' => $dataRequest['email'],
            'phone' => $dataRequest['phone'],
            'nation' => $dataRequest['nation'],
            'address' => $dataRequest['address'],
            'avatar' => $dataRequest['avatar'],
            'permission' => $dataRequest['permission'],
            'password' => Hash::make($dataRequest['password'])
        ];

        return $this->response->withData(User::create($user), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $dataRequest = $request->all();
        $user = User::findOrFail($id);
        if ($request->hasFile('avatar')) {
            // Update avatar
            $avatar = time() . $dataRequest['avatar']->getClientOriginalName();
            $dataRequest['avatar']->move("images/{$this->folder}", $avatar);
            $dataRequest['avatar'] = $avatar;
            // Remove old avatar
            $avatarRemove = public_path() . "/images/{$this->folder}/" . $user->avatar;
            if (file_exists($avatarRemove)) {
                unlink($avatarRemove);
            }
        }
        $user->update($dataRequest);

        return $this->response->withData($user->save(), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        if (isset($user->avatar)) {
            $imagePath = public_path() . "/images/{$this->folder}/" . $user->avatar;
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }

        $user->delete();
    }
}