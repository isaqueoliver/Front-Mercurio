import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaAppComponent } from './conta.app.component';

import { ContaRoutingModule } from './conta.route';
import { ContaService } from './services/conta.service';

import { CustomFormsModule } from 'ng2-validation'
import { ContaGuard } from './services/conta.guard';
import { EstadoModule } from '../estado/estado.module';
import { CidadeModule } from '../cidade/cidade.module';
import { ProdutoModule } from '../produto/produto.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

@NgModule({
  declarations: [
    ContaAppComponent,
    CadastroComponent, 
    LoginComponent,
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule,
    EstadoModule,
    CidadeModule,
    NgbModule,
    ProdutoModule
  ],
  providers: [
    ContaService,
    ContaGuard
  ]
})
export class ContaModule { }
