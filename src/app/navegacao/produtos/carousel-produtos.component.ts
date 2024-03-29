import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItemCarrinhoRequest } from 'src/app/carrinho/models/carrinho';
import { CarrinhoService } from 'src/app/carrinho/services/carrinho.service';
import { CidadeService } from 'src/app/cidade/services/cidade.service';
import { ProdutoUsuarioResponse } from 'src/app/produto/models/produto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'carousel-produto',
  templateUrl: './carousel-produtos.component.html'
})
export class CarouselProdutosComponent {

  imagens: string = environment.imagensUrl;

  @Input()
  produtos: ProdutoUsuarioResponse[] = [];

  indexAtual: number = 0;

  constructor(private carrinhoService: CarrinhoService,
    private toastr: ToastrService){}

  public correctIndex(index: number): number{
    let produtosLenght = this.produtos.length-1;
    return index > produtosLenght ? (index--) - produtosLenght : index;
  }

  public isActive(index: number): string {
    return this.indexAtual === index ? "active" : "";
  }

  public next(): void{
    this.indexAtual >= this.produtos.length ? 0 : this.indexAtual++;
  }

  public previous(): void{
    this.indexAtual <= 0 ? this.indexAtual = this.produtos.length : this.indexAtual--;
  }

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