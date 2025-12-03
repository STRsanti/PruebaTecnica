<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Departamento extends Model
{
    use HasFactory;

    protected $table = 'departamentos';
    //modelo
    protected $fillable = [
        'nombre'
    ];
    //Relacion con la tabla usuarios
    public function usuarios(){
        return $this->hasMany(Usuarios::class, 'Id_Departamento', 'id');
    }


}
