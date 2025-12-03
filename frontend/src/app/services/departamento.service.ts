import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Servicio encargado en la gestion de datos de departamento
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrl = 'http://127.0.0.1:8000/api/departamentos';//Url Api

  //Inyecta el servicio HttpClient de Angular para realizar peticiones HTTP
  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<any>{//Obtiene la lista de departamentos, repuesta a la peticion
    return this.http.get(this.apiUrl);
  }
}
