import { Component, OnInit } from '@angular/core';
import { ProdutoUsuario } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { environment } from 'src/environments/environment';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  imagens: string = environment.imagensUrl;

  public produtos: ProdutoUsuario[] = [];
  errorMessage: string = "";

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    // this.produtoService.obterTodos()
    //   .subscribe({
    //     next: produtos => this.produtos = produtos,
    //     error: error => this.errorMessage
    //   });
    this.produtos = [
      {
        id: '5c0a1bc5-2e9d-4e5b-a989-8c9beca0ec82',
        imagem: 'https://imgur.com/5uS0HC3.jpg',
        nome: 'Arroz Branco 1Kg',
        valor: 8.99,
        mercado: 'Garcias',
        dataCadastro: '22/10/2022'
      },
      {
        id: 'ea85b4dc-b5d5-4ccb-bf60-e19bb2b339c7',
        imagem: 'https://i.imgur.com/wD4Rdzw.jpg',
        nome: 'Feijão Preto 1Kg',
        valor: 12.59,
        mercado: 'Bretas',
        dataCadastro: '22/10/2022'
      },
    ]
  }
}
