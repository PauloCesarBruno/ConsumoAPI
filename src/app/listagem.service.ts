import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  listagemUrl = 'http://localhost:5100/API/Api';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  listar() {
    return this.http.get<any[]>(`${this.listagemUrl}`);
  }
}
