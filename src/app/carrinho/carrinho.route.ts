import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoAppComponent } from './carrinho.app.component';
import { ListaComponent } from './lista/lista.component';
import { CarrinhoResolve } from './services/carrinho.resolve';
import { CarrinhoGuard } from './services/carrinho.guard';

const carrinhoRouterConfig: Routes = [
    {
        path: '', component: ListaComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(carrinhoRouterConfig)
    ],
    exports: [RouterModule]
})
export class CarrinhoRoutingModule { }