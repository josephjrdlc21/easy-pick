<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('merchants_attachments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('merchant_id')->nullable()->index();
            $table->string('source')->nullable();
            $table->string('filename')->nullable();
            $table->string('path')->nullable();
            $table->string('directory')->nullable();
            $table->string('file_type')->nullable();
            $table->string('document_type')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('merchants_attachments');
    }
};
