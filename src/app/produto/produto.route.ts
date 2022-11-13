import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoAppComponent } from './produto.app.component';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { ProdutoResolve } from './services/produto.resolve';
import { ProdutoGuard } from './services/produto.guard';

const produtoRouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [
            { path: 'listar-todos', component: ListaComponent },
            {
                path: 'adicionar-novo', component: NovoComponent,
                canDeactivate: [ProdutoGuard],
                canActivate: [ProdutoGuard],
                data: [{ claim: { nome: 'Produto', valor: 'Adicionar' } }],
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