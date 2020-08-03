import { Component, OnInit } from '@angular/core';
import { ListagemService } from '../listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  listagem: Array<any>;


  constructor(private listagemService: ListagemService) { }

  ngOnInit(): void {
    this.listar();
  }

  // tslint:disable-next-line: typedef
  listar(){
    this.listagemService.listar().subscribe(dados => this.listagem = dados);
  }

  // tslint:disable-next-line: typedef
  editar(){

  }
  // tslint:disable-next-line: typedef
  excluir(){

  }

}
