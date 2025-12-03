<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Usuarios::with('departamento')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $user = Usuarios::create([
            'Nombre_Completo' => $request->Nombre_Completo,
            'Correo' => $request->Correo,
            'Id_Departamento' => $request->Id_Departamento,
            'Telefono' => $request->Telefono,
            'Estado' => $request->Estado,
        ]);
        return response()->json($user, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Usuarios $usuarios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Usuarios $usuarios)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = Usuarios::findOrFail($id);

        $user->update([
            'Nombre_Completo' => $request->Nombre_Completo,
            'Correo' => $request->Correo,
            'Id_Departamento' => $request->Id_Departamento,
            'Telefono' => $request->Telefono,
            'Estado' => $request->Estado,
        ]);

        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = Usuarios::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'Usuario eliminado']);
    }
}
