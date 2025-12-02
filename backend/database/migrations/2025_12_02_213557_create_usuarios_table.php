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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre_Completo');
            $table->string('Correo')->unique();
            $table->unsignedBigInteger('Id_Departamento');
            $table->string('Telefono');
            $table->timestamps();
            $table->boolean('Estado')->default(1);

            $table->foreign('Id_Departamento')->references('id')->on('Departamentos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
