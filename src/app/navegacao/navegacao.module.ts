import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InserirValorComponent } from "./inserir-valor/inserir-valor.component";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { CarouselProdutosComponent } from "./produtos/carousel-produtos.component";
import { ProdutoModule } from "../produto/produto.module";
import { EstadoModule } from "../estado/estado.module";
import { CidadeModule } from "../cidade/cidade.module";

@NgModule({
    declarations: [
        MenuComponent,
        MenuLoginComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent,
        AcessoNegadoComponent,
        InserirValorComponent,
        CarouselProdutosComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        ProdutoModule,
        EstadoModule,
        CidadeModule
    ],
    exports: [
        MenuComponent,
        MenuLoginComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent,
        AcessoNegadoComponent,
        InserirValorComponent
    ]
})
export class NavegacaoModule { }