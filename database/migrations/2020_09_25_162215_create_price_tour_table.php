<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePriceTourTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('price_tour', function (Blueprint $table) {
            $table->double('original_price')->default(0);
            $table->double('price')->default(0);
            $table->bigInteger('customer_type_id')->unsigned()->nullable();
            $table->foreign('customer_type_id')->references('id')->on('customer_type');
            $table->bigInteger('tour_id')->unsigned()->nullable();
            $table->foreign('tour_id')->references('id')->on('tours');
            $table->primary(['customer_type_id', 'tour_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('price_tour');
    }
}