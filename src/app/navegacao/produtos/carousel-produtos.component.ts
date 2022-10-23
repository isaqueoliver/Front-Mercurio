import { Component, Input } from '@angular/core';
import { ProdutoUsuario } from 'src/app/produto/models/produto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'carousel-produto',
  templateUrl: './carousel-produtos.component.html'
})
export class CarouselProdutosComponent {

  imagens: string = environment.imagensUrl;

  @Input()
  produtos: ProdutoUsuario[] = [];

  teste: number = 0;

  public correctIndex(index: number): number{
    let produtosLenght = this.produtos.length-1;
    return index > produtosLenght ? (index--) - produtosLenght : index;
  }

  public isActive(index: number): string {
    return this.teste === index ? "active" : "";
  }

  public next(): void{
    this.teste >= this.produtos.length ? 0 : this.teste++;
  }

  public previous(): void{
    this.teste <= 0 ? this.teste = this.produtos.length : this.teste--;
  }
}