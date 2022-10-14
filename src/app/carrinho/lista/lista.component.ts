import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../models/carrinho';
import { CarrinhoService } from '../services/carrinho.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  imagens: string = environment.imagensUrl;

  public carrinhos: Carrinho[] = [];
  errorMessage: string = "";

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.carrinhoService.obterTodos()
      .subscribe({
        next: carrinhos => this.carrinhos = carrinhos,
        error: error => this.errorMessage
      });
  }
}
