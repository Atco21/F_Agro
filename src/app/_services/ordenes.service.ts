import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {


  constructor(private http: HttpClient) {}

  getOrdenesPendientes() {
    return this.http.get('http://127.0.0.1:8000/api/ordenesPendientes');
  }

  getOrdenesCurso() {
    return this.http.get('http://127.0.0.1:8000/api/ordenesCurso');
  }

  getOrdenesPausa() {
    return this.http.get('http://127.0.0.1:8000/api/ordenesPausadas');
  }

  getOrdenesTerminadas() {
    return this.http.get('http://127.0.0.1:8000/api/ordenesTerminadas');
  }
}