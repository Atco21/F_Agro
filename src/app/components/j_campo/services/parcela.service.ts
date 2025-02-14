import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParcelaService {

  constructor(private http: HttpClient) { }

  getParcelasAll() {
    return this.http.get('http://localhost:80/api/parcelas');
  }
}
