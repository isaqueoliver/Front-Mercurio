import { Component } from '@angular/core';
import { Produto } from 'src/app/produto/models/produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

produtos: Produto[] = [
  {
    ativo: true,
    dataCadastro: '19/04/2022',
    descricao: 'teste',
    fornecedorId: '1234',
    id: '1234',
    imagem: '123',
    imagemUpload: '1234',
    nome: 'teste',
    nomeFornecedor: 'teste',
    valor: 42.84
  },
  {
    ativo: true,
    dataCadastro: '19/04/2022',
    descricao: 'teste',
    fornecedorId: '1234',
    id: '1234',
    imagem: '123',
    imagemUpload: '1234',
    nome: 'teste',
    nomeFornecedor: 'teste',
    valor: 42.84
  },
];
}
