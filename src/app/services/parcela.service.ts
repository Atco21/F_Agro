import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parcela } from '../models/Parcela';

@Injectable({
  providedIn: 'root'
})
export class ParcelaService {

  constructor(private http: HttpClient) { }

  getParcelasAll() {
    return this.http.get<Parcela[]>('http://localhost:80/api/parcelas', );
  }

}
