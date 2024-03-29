import { Component, OnInit } from '@angular/core';
import { ProdutoUsuarioResponse } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  nomePesquisa: string | null = null;

  public produtos: ProdutoUsuarioResponse[] = [];

  constructor(private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nomePesquisa = params.get('nome');
    });

    this.nomePesquisa ?
        this.obterProdutosPorNomePesquisa(this.nomePesquisa!) :
        this.obterProdutosPorEstadoECidade();
      
  }

  obterProdutosPorEstadoECidade(){
    this.produtoService.obterTodosPorEstadoECidade()
      .subscribe({
        next: produtos => this.produtos = produtos,
        error: error => this.processarFalha(error)
      });
  }

  obterProdutosPorNomePesquisa(nome: string){
    this.produtoService
          .obterPorNome(nome)
            .subscribe({
              next: produtos => this.produtos = produtos,
              error: error => this.processarFalha(error)
            });
  }

  processarFalha(fail: any) {
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
