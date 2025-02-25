import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http: HttpClient) { }

  obtenerDatosApi() {
    return this.http.get('http://localhost:80/api/tratamiento');
  }




  // private tratamientos = [
  //   { id: 1, nombre: 'Mosca Blanca' },
  //   { id: 2, nombre: 'Mosca del Mediterraneo' },
  //   { id: 3, nombre: 'Cotonet' },
  //   { id: 4, nombre: 'Trip' },
  //   { id: 5, nombre: 'Cochinilla' }
  // ];

  // constructor() { }

  // obtenerTratamientos() {
  //   return this.tratamientos;  // Debería devolver el array de tratamientos
  // }
}
