<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Usuarios extends Model
{
    use HasFactory;

    protected $table = 'usuarios';
    //modelo
    protected $fillable = [
        'Nombre_Completo',
        'Correo',
        'Id_Departamento',
        'Telefono',
        'Estado'
    ];

    //Relacion con la tabla departamentos
    public function departamento(){
        return $this->belongsTo(Departamento::class, 'Id_Departamento','id');
    }
}
