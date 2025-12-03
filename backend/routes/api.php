<?php

use App\Http\Controllers\UsuariosController;
use App\Http\Controllers\DepartamentoController;

Route::get('/usuarios', [UsuariosController::class, 'index']);
Route::post('/usuarios', [UsuariosController::class, 'store']);

Route::get('/departamentos', [DepartamentoController::class, 'index']);