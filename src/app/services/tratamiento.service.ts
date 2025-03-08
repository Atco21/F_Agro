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

}
