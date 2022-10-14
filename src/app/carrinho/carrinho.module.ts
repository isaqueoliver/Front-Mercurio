import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from "ngx-spinner";
import { ImageCropperModule } from 'ngx-image-cropper';

import { CarrinhoRoutingModule } from './carrinho.route';
import { CarrinhoAppComponent } from './carrinho.app.component';
import { ListaComponent } from './lista/lista.component';
import { CarrinhoService } from './services/carrinho.service';
import { CarrinhoResolve } from './services/carrinho.resolve';
import { CarrinhoGuard } from './services/carrinho.guard';

@NgModule({
  declarations: [
    CarrinhoAppComponent,
    ListaComponent,
  ],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [
    CarrinhoService,
    CarrinhoResolve,
    CarrinhoGuard
  ]
})
export class CarrinhoModule { }
