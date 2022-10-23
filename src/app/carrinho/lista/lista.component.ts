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
    // this.carrinhoService.obterTodos()
    //   .subscribe({
    //     next: carrinhos => this.carrinhos = carrinhos,
    //     error: error => this.errorMessage
    //   });
    this.carrinho = {
      id: '1234',
      mercado: 'Coelho Diniz',
      produtos: [{
        id: '1234',
        nome: 'Feijao Preto 1KG',
        imagem: 'https://i.imgur.com/wD4Rdzw.jpg',
        valor: 13.99
      },
      {
        id: '1234',
        nome: 'Arroz Branco 1KG',
        imagem: 'https://imgur.com/5uS0HC3.jpg',
        valor: 8.99
      },],
      total: 175.25
    };
  }
}
