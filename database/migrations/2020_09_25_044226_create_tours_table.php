<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('thumbnail')->nullable();
            $table->text('description')->nullable();
            $table->text('content')->nullable();
            $table->bigInteger('departure_location_id')->unsigned()->nullable();
            $table->foreign('departure_location_id')->references('id')->on('locations')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('destination_location_id')->unsigned()->nullable();
            $table->foreign('destination_location_id')->references('id')->on('locations')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('time_id')->unsigned()->nullable();
            $table->foreign('time_id')->references('id')->on('time_tour')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('vehicle_id')->unsigned()->nullable();
            $table->foreign('vehicle_id')->references('id')->on('vehicle_tour')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('place')->default(0);
            $table->text('schedule')->nullable();
            $table->text('albums')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tours');
    }
}