import { Component, OnInit } from '@angular/core';
import { ProdutoUsuarioResponse } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  imagens: string = environment.imagensUrl;

  public produtos: ProdutoUsuarioResponse[] = [];

  constructor(private produtoService: ProdutoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.produtoService.obterTodosPorEstadoECidade()
      .subscribe({
        next: produtos => this.produtos = produtos,
        error: error => this.processarFalha(error)
      });
  }

  processarFalha(fail: any) {
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
