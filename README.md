# ms_web

Laravel 7x + Vue

## Install

```
1. composer install
2. npm install
3. copy .env.example .env
4. php artisan key:generate

```

## Run app

```
1. php artisan serve
2. npm run watch
```

## Domain

```
1. admin
admin.localhost:8000
2. client
localhost:8000
```

## gitignore public folder

git rm --cached -r public

## Make controller

php artisan make:controller Api/AppController --resource --model=Models/App

## Make migration

php artisan make:migration create_app_table
