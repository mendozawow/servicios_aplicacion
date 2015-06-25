<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVhostsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('apachevhosts', function(Blueprint $table)
		{
			$table->integer('id')->unsigned();
                        $table->string('serverName',128);
                        $table->string('documentroot',255);
                        $table->integer('user_id')->unsigned();
			$table->timestamps();
                        
                        $table->foreign('user_id')->
                                references('id')->
                                on('users');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('vhosts');
	}

}
