import { Component, OnInit, TemplateRef } from '@angular/core';
import { ListagemService } from '../listagem.service';
import { Listagem } from '../_models/listagem';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  listagem: Listagem[];
  listagemId: Listagem[]; // Criado para filtrar por código...


  registerForm: FormGroup; // Para trabalhar com Reactive Forms...

  listagemFiltrada: Listagem [];

  constructor(
    private listagemServices: ListagemService,
    private modalService: BsModalService,
    private fb: FormBuilder // Para o Validation
  ) { }

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

  // Criado para filtrar por código
  listagemFiltradaId: Listagem [];
  // Encapsulando o filtroLista(tweydatabinding)
  // tslint:disable-next-line: variable-name
  _filtroListaId: string;
  get filtroListaId(): string {
    return this._filtroListaId;
  }
  set filtroListaId(value: string) {
    this._filtroListaId = value;
    this.listagemFiltradaId = this.filtroListaId ? this.filtrarListaId(this.filtroListaId) : this.listagemId;
  }

  // Para Trabalhar com o Modal do ngx.bootstrapp
  // tslint:disable-next-line: typedef
  openModal(template: any){
    template.show();
  }

  ngOnInit(): void {
    this.validation();
    this.listar();
  }

  filtrarLista(filtrarPor: string): Listagem [] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.listagem.filter(
    listagem => listagem.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  // Criado para filtrar por código
  filtrarListaId(filtrarPor: string): Listagem [] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.listagem.filter(
    listagem => listagem.id.toString().indexOf(filtrarPor) !== -1
    );
  }

  // Para Utilizar o Ractive Forms
  // tslint:disable-next-line: typedef
  validation(){
    this.registerForm = this.fb.group({
      // tslint:disable-next-line: new-parens
      id: [''],
      // tslint:disable-next-line: new-parens
      nome: ['', Validators.required],
      // tslint:disable-next-line: new-parens
      email: ['', [Validators.required, Validators.email]],
      // tslint:disable-next-line: new-parens
      limite: ['', Validators.required]
    });
  }

  // tslint:disable-next-line: typedef
  salvarAlteracao(){

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

}
