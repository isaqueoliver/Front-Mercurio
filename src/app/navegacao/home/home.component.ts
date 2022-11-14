import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProdutoUsuarioResponse } from 'src/app/produto/models/produto';
import { ProdutoService } from 'src/app/produto/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public produtos: ProdutoUsuarioResponse[] = [];
  public produtosValorMedio: ProdutoUsuarioResponse[] = [];
  
  constructor(private produtoService: ProdutoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.carregarProdutos();
  }

  processarFalha(fail: any) {
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
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
}
