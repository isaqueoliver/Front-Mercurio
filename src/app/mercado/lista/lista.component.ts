import { Component, OnInit } from '@angular/core';
import { Mercado } from '../models/mercado';
import { MercadoService } from '../services/mercado.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  imagens: string = environment.imagensUrl;

  public mercados: Mercado[] = [];
  errorMessage: string = "";

  constructor(private mercadoService: MercadoService) { }

  ngOnInit(): void {
    // this.mercadoService.obterTodos()
    //   .subscribe({
    //     next: mercados => this.mercados = mercados,
    //     error: error => this.errorMessage
    //   });
    this.mercados = [
      {
        dataCadastro: '19/04/2022',
        id: '1234',
        nome: 'Garcias',
        endereco: 'Rua Teste, n540, Bairro Teste'
      },
      {
        dataCadastro: '19/04/2022',
        id: '1234',
        nome: 'Bretas',
        endereco: 'Rua Joao, numero 845, Bairro Treza'
      },
    ];
  }
}
