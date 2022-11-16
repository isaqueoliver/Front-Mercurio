import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MercadoAppComponent } from './mercado.app.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MercadoResolve } from './services/mercado.resolve';
import { MercadoGuard } from './services/mercado.guard';

const mercadoRouterConfig: Routes = [
    {
        path: '', component: MercadoAppComponent,
        children: [
            { path: 'listar-todos', component: ListaComponent },
            { path: 'listar-todos/:nome', component: ListaComponent },
            {
                path: 'detalhes/:id', component: DetalhesComponent,
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