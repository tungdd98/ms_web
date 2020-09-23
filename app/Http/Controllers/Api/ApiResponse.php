<?php

namespace App\Http\Controllers\Api;

use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Contracts\Validation\Validator;

class ApiResponse
{

    /**
     * HTTP Status code
     *
     * @var int
     */
    protected $statusCode = 200;

    protected $headers = [];

    /**
     */
    public function __construct()
    {
    }

    /**
     * Getter for statusCode
     *
     * @return int
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * Setter for status code
     *
     * @param int $statusCode
     * @return Class
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;
        return $this;
    }

    /**
     * Setter for status code
     *
     * @param int $statusCode
     * @return Class
     */
    public function setHeaders($headers)
    {
        $this->headers = $headers;
        return $this;
    }

    /**
     * Respond data with format is json
     *
     * @param array $arr
     * @param array $headers
     * @return ResponseFactory
     */
    public function respond($code, $data = null, $errors = null, $message = null, array $headers = array())
    {
        $contentMeta = [
            'errors' => $errors,
            'data' => $data,
            'message' => $message
        ];

        if (!empty($this->headers)) {
            $headers = array_merge($this->headers, $headers);
        }
        return response()->json($contentMeta, $code, $headers);
    }

    /**
     * Response for data success
     *
     * @param array $data
     * @return ResponseFactory
     */
    public function withData($data = '', $code = 200)
    {
        return $this->respond($code, $data);
    }

    /**
     * Response for message
     *
     * @param array $data
     * @return ResponseFactory
     */
    public function withMessage($message, $data = '', $code = 200)
    {
        return $this->respond($code, $data, null, $message);
    }

    /**
     * Response for data
     *
     * @param string $message
     * @return ResponseFactory
     */
    public function withCreated($message = 'Created successfully.')
    {
        return $this->setStatusCode(201)->respond(200, null, null, $message, '');
    }

    /**
     * Generates a response with a 403 HTTP header and a given message.
     *
     * @param string $message
     * @return mixed
     */
    public function errorForbidden($message = 'Forbidden')
    {
        return $this->withMessage($message, '', 403);
    }

    /**
     * Generates a response with a 500 HTTP header and a given message.
     *
     * @param string $message
     * @return mixed
     */
    public function errorInternalError($message = 'Internal Error')
    {
        return $this->withMessage($message, '', 500);
    }

    /**
     * Generates a response with a 404 HTTP header and a given message.
     *
     * @param string $message
     * @return mixed
     */
    public function errorNotFound($message = 'Resource Not Found')
    {
        return $this->withMessage($message, '', 404);
    }

    /**
     * Generates a response with a 200 HTTP header and a given message.
     *
     * @param string $message
     * @return mixed
     */
    public function errorExpiredToken($message = 'Expired Token')
    {
        return $this->withMessage($message, '', 200);
    }

    /**
     * Generates a response with a 401 HTTP header and a given message.
     *
     * @param string $message
     * @return mixed
     */
    public function errorUnauthorized($message = 'Unauthorized')
    {
        return $this->withMessage($message, '', 401);
    }

    /**
     * Generates a response with a 503 HTTP header and a given message.
     *
     * @param string $message
     * @return mixed
     */
    public function errorModeMaintainance($message = 'Mode maintainance')
    {
        return $this->withMessage($message, '', 503);
    }

    /**
     * Generates a response with a 400 HTTP header and a given message.
     *
     * @param string $message
     * @return mixed
     */
    public function errorWrongArgs($message = 'Wrong Arguments')
    {
        return $this->withMessage($message, '', 400);
    }

    /**
     * Generates a Response with a 400 HTTP header and a given message from validator
     *
     * @param Validator $validator
     * @return ResponseFactory
     */
    public function errorWrongArgsValidator(Validator $validator)
    {
        return $this->respond(400, null, $validator->errors());
    }
}