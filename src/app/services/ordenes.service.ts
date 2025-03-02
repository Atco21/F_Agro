import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  private apiUrl = 'http://localhost/api/ordenes';

  constructor(private http: HttpClient) {}

  enviarOrden(datosOrden: any): Observable<any> {


    return this.http.post(this.apiUrl, datosOrden);

  }

  getOrdenesPendientes() {
    return this.http.get('http://localhost:80/api/ordenesPendientes');
  }

  getOrdenesCurso() {
    return this.http.get('http://localhost:80/api/ordenesCurso');
  }

  getOrdenesPausa() {
    return this.http.get('http://localhost:80/api/ordenesPausadas');
  }

  getOrdenesTerminadas() {
    return this.http.get('http://localhost:80/api/ordenesTerminadas');
  }
}




