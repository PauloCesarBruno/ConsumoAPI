import { Component, OnInit } from '@angular/core';
import { ListagemService } from '../listagem.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  listagem: any = [];

  listagemFiltrada: any = [];
  // Encapsulando o filtroLista(toeydatabinding)
  // tslint:disable-next-line: variable-name
  _filtroLista: string;
  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.listagemFiltrada = this.filtroLista ? this.filtrarLista(this.filtroLista) : this.listagem;
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
  }

  filtrarLista(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.listagem.filter(
      listagem => listagem.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  // tslint:disable-next-line: typedef
  listar(){
    this.http.get('http://localhost:5100/API/Api').subscribe(Response => {
      this.listagem = Response;
      this.listagemFiltrada = this.listagem;
    });
  }

  // tslint:disable-next-line: typedef
  editar(){

  }
  // tslint:disable-next-line: typedef
  excluir(){

  }

}
