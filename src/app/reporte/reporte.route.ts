import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { ReporteGuard } from './services/reporte.guard';

const reporteRouterConfig: Routes = [
    {
        path: '', component: ListaComponent,
        children: [
            { path: 'listar-todos', component: ListaComponent },
            {
                path: 'adicionar-novo', component: NovoComponent,
                canDeactivate: [ReporteGuard],
                canActivate: [ReporteGuard],
                data: [{ claim: { nome: 'Reporte', valor: 'Adicionar' } }],
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(reporteRouterConfig)
    ],
    exports: [RouterModule]
})
export class ReporteRoutingModule { }