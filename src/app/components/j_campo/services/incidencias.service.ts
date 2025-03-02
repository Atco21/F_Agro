import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class IncidenciasService {

  constructor(private http: HttpClient) {}

  getIncidenciasPersonal() {
    return this.http.get('http://localhost:80/api/incidenciasPersonal');
  }
  // Método para obtener incidencias de tipo máquina
  getIncidenciasMaquina(){
    return this.http.get('http://localhost:80/api/incidenciasMaquina');
  }
  // Método para obtener incidencias de tipo tratamiento
  getIncidenciasTratamiento() {
    return this.http.get('http://localhost:80/api/ordenesStrock');
  }


}
