import { Component, Input } from '@angular/core';
import { Produto } from 'src/app/produto/models/produto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'carousel-produto',
  templateUrl: './carousel-produtos.component.html'
})
export class CarouselProdutosComponent {

  imagens: string = environment.imagensUrl;

  @Input()
  produtos: Produto[] = [];
}