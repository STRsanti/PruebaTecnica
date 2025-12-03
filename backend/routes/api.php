<?php

use Illuminate\Support\Facades\Route;
use App\Models\Usuarios;

Route::get('/test', function () {
    return ['message' => 'API funcionando'];
});

Route::get('/usuarios', function(){
    return Usuarios::with('departamento')->get();
});