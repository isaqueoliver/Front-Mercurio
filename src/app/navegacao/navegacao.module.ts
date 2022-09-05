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
import { ListaProdutosComponent } from './produtos/lista-produtos.component';
import { CarouselProdutosComponent } from "./produtos/carousel-produtos.component";

@NgModule({
    declarations: [
        MenuComponent,
        MenuLoginComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent,
        AcessoNegadoComponent,
        InserirValorComponent,
        ListaProdutosComponent,
        CarouselProdutosComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule
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