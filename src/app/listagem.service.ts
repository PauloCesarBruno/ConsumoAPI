import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listagem } from '../app/_models/listagem';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  BaseUrl = 'http://localhost:5100/API/Api';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  listar(): Observable<Listagem[]> {
    return this.http.get<Listagem[]>(this.BaseUrl);
  }
}
