<?php

use App\Http\Controllers\UsuariosController;
use App\Http\Controllers\DepartamentoController;

//tabla usuario
Route::get('/usuarios', [UsuariosController::class, 'index']);
Route::post('/usuarios', [UsuariosController::class, 'store']);
Route::delete('/usuarios/{id}',[UsuariosController::class, 'destroy']);
Route::put('/usuarios/{id}',[UsuariosController::class, 'update']);

//tabla departamento
Route::get('/departamentos', [DepartamentoController::class, 'index']);
