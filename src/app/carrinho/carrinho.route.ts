import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { CarrinhoGuard } from './services/carrinho.guard';

const carrinhoRouterConfig: Routes = [
    {
        path: '', component: ListaComponent,
        canActivate: [CarrinhoGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(carrinhoRouterConfig)
    ],
    exports: [RouterModule]
})
export class CarrinhoRoutingModule { }