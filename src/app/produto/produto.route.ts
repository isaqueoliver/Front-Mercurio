import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoAppComponent } from './produto.app.component';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { ProdutoGuard } from './services/produto.guard';
import { ListaPorMercadoComponent } from './lista-por-mercado/lista-por-mercado.component';

const produtoRouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [
            { path: 'listar-todos', component: ListaComponent },
            { path: 'listar-todos/:nome', component: ListaComponent },
            { path: 'listar-por-mercado/:id', component: ListaPorMercadoComponent },
            {
                path: 'adicionar-novo', component: NovoComponent,
                canDeactivate: [ProdutoGuard],
                canActivate: [ProdutoGuard]
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }