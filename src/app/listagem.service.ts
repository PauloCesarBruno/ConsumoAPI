import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listagem } from '../app/_models/listagem';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  // Localhost 5100 hospedado no IIS
  BaseUrl = 'http://192.168.1.146:5100/api/API';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  listar(): Observable<Listagem[]> {
    return this.http.get<Listagem[]>(this.BaseUrl);
  }
}
