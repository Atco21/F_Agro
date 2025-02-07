import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuimicosService {

  //private apiUrl = 'http://0.0.0.0/api/quimicos';

  constructor(private http: HttpClient) { }

  obtenerQuimicos(){
    return this.http.get("http://0.0.0.0/api/quimicos")
  }

}
