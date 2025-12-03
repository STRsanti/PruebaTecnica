import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://127.0.0.1:8000/api/usuarios';
  
  constructor(private http: HttpClient) { }

  //Mostrar usuario
  getUsuarios(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  //Crear usuario
  crearUsuario(data: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, data)
  }

  //Eliminar usuario
  eliminarUsuario(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  //Editar usuario
  editarUsuario(id: number, data: any):Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }
}
