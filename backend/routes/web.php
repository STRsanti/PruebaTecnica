<?php
use App\Models\Usuarios;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/usuarios',function(){
    return response()->json(Usuarios::all());
});
