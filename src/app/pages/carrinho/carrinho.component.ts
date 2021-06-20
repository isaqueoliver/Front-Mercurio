import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit, OnDestroy {

  produtos: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(!(localStorage.getItem("isLogado") === "true"))
      this.router.navigate(['login']);

      if(localStorage.getItem('produtos')){
        this.produtos = JSON.parse(localStorage.getItem('produtos') || '');
        let inputs = (document.getElementsByTagName("quantidade"));
        for(let i = 0; i < inputs.length; i++){
          let input = inputs[i] as HTMLInputElement;
          input.value = this.produtos[i].quantidade;
          console.log(input.value);
        }
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem("produtos");
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
  }

  excluir(index: number){
    this.produtos.splice(index, 1);

    this.totalProdutos();
  }

  totalProdutos(){
    return this.produtos.reduce((sum, current) => sum + (current.preco * current.quantidade), 0);
  }

  plus(index: number){
    this.produtos[index].quantidade++;
    (<HTMLInputElement>document.getElementById(index.toString())).value = this.produtos[index].quantidade;

    this.totalProdutos();
  }

  minus(index: number){
    if(this.produtos[index].quantidade === 1)  this.excluir(index);
    else  { this.produtos[index].quantidade--; (<HTMLInputElement>document.getElementById(index.toString())).value = this.produtos[index].quantidade; }

    this.totalProdutos();
  }
}
