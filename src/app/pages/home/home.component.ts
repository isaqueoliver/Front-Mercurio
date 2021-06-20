import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  isLogado: boolean = false;
  produtos: any[] = [];

  carrinho: any[] = [];

  constructor(private router: Router,
    private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.isLogado = localStorage.getItem("isLogado") === "true";
    if(!this.isLogado)
      this.router.navigate(['login']);
    else
      this.listarProdutos();
  }

  listarProdutos(){
    this.produtoService.listarProdutos().subscribe(response => {
      this.produtos = response;
    });
  }

  adicionar(index: number){
    if(this.carrinho.findIndex(x => x.idProduto == this.produtos[index].idProduto) === -1)
      this.carrinho.push(this.produtos[index]);
      
    localStorage.removeItem('produtos');
    localStorage.setItem('produtos', JSON.stringify(this.carrinho));
  }
}
