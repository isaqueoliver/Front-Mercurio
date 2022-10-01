import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MercadoAppComponent } from './mercado.app.component';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { MercadoResolve } from './services/mercado.resolve';
import { MercadoGuard } from './services/mercado.guard';

const mercadoRouterConfig: Routes = [
    {
        path: '', component: MercadoAppComponent,
        children: [
            { path: 'listar-todos', component: ListaComponent },
            {
                path: 'adicionar-novo', component: NovoComponent,
                canDeactivate: [MercadoGuard],
                canActivate: [MercadoGuard],
                data: [{ claim: { nome: 'Mercado', valor: 'Adicionar' } }],
            },
            {
                path: 'detalhes/:id', component: DetalhesComponent,
                resolve: {
                    mercado: MercadoResolve
                }
            },
            {
                path: 'excluir/:id', component: ExcluirComponent,
                canActivate: [MercadoGuard],
                data: [{ claim: { nome: 'Mercado', valor: 'Excluir' } }],
                resolve: {
                    mercado: MercadoResolve
                }
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(mercadoRouterConfig)
    ],
    exports: [RouterModule]
})
export class MercadoRoutingModule { }