import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContaService } from '../services/conta.service';
import { ProdutoUsuarioResponse } from 'src/app/produto/models/produto';


@Component({
  selector: 'app-lista-meus-produto',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent implements OnInit {

  public produtos: ProdutoUsuarioResponse[] = [];

  constructor(private contaService: ContaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.contaService.obterProdutosUsuario()
      .subscribe({
        next: produtos => this.produtos = produtos,
        error: error => this.processarFalha(error)
      });
  }

  processarFalha(fail: any) {
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
