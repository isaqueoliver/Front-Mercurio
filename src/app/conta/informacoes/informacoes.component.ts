import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContaService } from '../services/conta.service';
import { ProdutoUsuarioResponse } from 'src/app/produto/models/produto';
import { UsuarioResponse, UsuarioToken } from '../models/usuario';
import { LocalStorageUtils } from 'src/app/utils/localstorage';


@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html'
})
export class InformacoesComponent implements OnInit {

  public usuario = {} as UsuarioToken;

  localStorage = new LocalStorageUtils();
  constructor(private toastr: ToastrService,
    private contaService: ContaService) { }

  ngOnInit(): void {
    this.usuario.email = this.localStorage.obterUsuario().email;

    this.contaService
    .obterEstadoPorId(this.localStorage.obterUsuario().estado)
    .subscribe({
        next: estado => this.usuario.estado = estado.sigla,
        error: error => this.processarFalha(error)
    });

    this.contaService
    .obterCidadePorId(this.localStorage.obterUsuario().cidade)
    .subscribe({
        next: cidade => this.usuario.cidade = cidade.nome,
        error: error => this.processarFalha(error)
    });

  }

  processarFalha(fail: any) {
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
