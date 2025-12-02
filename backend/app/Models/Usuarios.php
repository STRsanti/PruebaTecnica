<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuarios extends Model
{
    protected $table = 'Usuarios';

    public function departamento(){
        return $this->belongsTo(Departamento::class, 'Id_Departamento','id');
    }
}
