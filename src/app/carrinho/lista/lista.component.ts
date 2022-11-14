import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../models/carrinho';
import { CarrinhoService } from '../services/carrinho.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  public carrinho!: Carrinho;
  errorMessage: string = "";

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.carrinhoService.obterCarrinho()
      .subscribe({
        next: carrinho => { this.carrinho = carrinho; console.log(carrinho) },
        error: error => this.errorMessage
      });
  }
}
