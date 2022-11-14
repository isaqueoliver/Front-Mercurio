import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItemCarrinhoRequest } from 'src/app/carrinho/models/carrinho';
import { CarrinhoService } from 'src/app/carrinho/services/carrinho.service';
import { ProdutoUsuarioResponse } from 'src/app/produto/models/produto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent {

  imagens: string = environment.imagensUrl;

  @Input()
  produtos: ProdutoUsuarioResponse[] = [];

  constructor(private toastr: ToastrService,
    private carrinhoService: CarrinhoService){}

  public adicionarItemAoCarrinho(mercadoId: string, produtoId: string){
    var itemCarrinho: ItemCarrinhoRequest = { mercadoId, produtoId }
    this.carrinhoService.adicionarItem(itemCarrinho)
    .subscribe({
      next: sucesso => this.processarSucesso(sucesso),
      error: falha => this.processarFalha(falha)
    });
  }

  processarSucesso(response: any) {
    let toast = this.toastr.success('Produto cadastrado com sucesso!', 'Sucesso!');
  }

  processarFalha(fail: any) {
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}