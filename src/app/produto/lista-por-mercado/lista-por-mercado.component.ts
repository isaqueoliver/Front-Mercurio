import { Component, OnInit } from '@angular/core';
import { ProdutoUsuarioResponse } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-por-mercado',
  templateUrl: './lista-por-mercado.component.html'
})
export class ListaPorMercadoComponent implements OnInit {

  mercadoId: string | null = null;

  public produtos: ProdutoUsuarioResponse[] = [];

  constructor(private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.mercadoId = params.get('id');
    });

    if(this.mercadoId)
        this.obterProdutosPorMercadoId(this.mercadoId!)
      
  }

  obterProdutosPorMercadoId(mercadoId: string){
    this.produtoService
          .obterPorMercadoId(mercadoId)
            .subscribe({
              next: produtos => this.produtos = produtos,
              error: error => this.processarFalha(error)
            });
  }

  processarFalha(fail: any) {
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
