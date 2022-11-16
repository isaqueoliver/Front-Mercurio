import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from "ngx-spinner";
import { ImageCropperModule } from 'ngx-image-cropper';

import { ProdutoRoutingModule } from './produto.route';
import { ProdutoAppComponent } from './produto.app.component';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { ProdutoService } from './services/produto.service';
import { ProdutoResolve } from './services/produto.resolve';
import { ProdutoGuard } from './services/produto.guard';
import { ListaProdutosComponent } from './shared/lista-produtos.component';
import { CarrinhoModule } from '../carrinho/carrinho.module';
import { ListaPorMercadoComponent } from './lista-por-mercado/lista-por-mercado.component';

@NgModule({
  declarations: [
    ProdutoAppComponent,
    ListaComponent,
    NovoComponent,
    ListaProdutosComponent,
    ListaPorMercadoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    CarrinhoModule
  ],
  exports: [ ListaProdutosComponent ],
  providers: [
    ProdutoService,
    ProdutoResolve,
    ProdutoGuard
  ]
})
export class ProdutoModule { }
