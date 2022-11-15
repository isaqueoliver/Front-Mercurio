import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CidadeService } from 'src/app/cidade/services/cidade.service';
import { ProdutoUsuarioResponse } from 'src/app/produto/models/produto';
import { ProdutoService } from 'src/app/produto/services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public produtos: ProdutoUsuarioResponse[] = [];
  public produtosValorMedio: ProdutoUsuarioResponse[] = [];
  
  constructor(private produtoService: ProdutoService,
    private router: Router,
    private toastr: ToastrService) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
      };
  }

  ngOnInit(): void {
    if(!!this.produtoService.LocalStorage.obterCidade() &&
    !!this.produtoService.LocalStorage.obterEstado()) {
      this.carregarProdutos();
    }
  }

  carregarProdutos(){
    this.produtoService.obterTodosPorEstadoECidade()
        .subscribe({
          next: produtos => this.produtos = produtos,
          error: error => this.processarFalha(error)
        });

    this.produtoService.obterTodosValorMedioPorEstadoECidade()
        .subscribe({
          next: produtosValorMedio => this.produtosValorMedio = produtosValorMedio,
          error: error => this.processarFalha(error)
        });
  }

  processarFalha(fail: any) {
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
