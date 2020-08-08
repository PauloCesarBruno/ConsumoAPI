import { Component, OnInit } from '@angular/core';
import { ListagemService } from '../listagem.service';
import { Listagem } from '../_models/listagem';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  listagem: Listagem[];

  listagemFiltrada: Listagem [];
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


  constructor(private listagemServices: ListagemService) { }

  ngOnInit(): void {
    this.listar();
  }

  filtrarLista(filtrarPor: string): Listagem [] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.listagem.filter(
      listagem => listagem.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  // tslint:disable-next-line: typedef
  listar(){
    this.listagemServices.listar().subscribe(
      // tslint:disable-next-line: variable-name
      (_listagem: Listagem[]) => {
      this.listagem = _listagem;
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
