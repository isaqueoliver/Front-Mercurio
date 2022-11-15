import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { ReporteAppComponent } from './reporte.app.component';
import { ReporteGuard } from './services/reporte.guard';

const reporteRouterConfig: Routes = [
    {
        path: '', component: ReporteAppComponent,
        children: [
            { 
                path: 'listar-todos', component: ListaComponent,
                canActivate: [ReporteGuard]
            },
            {
                path: 'adicionar-novo', component: NovoComponent,
                canDeactivate: [ReporteGuard],
                canActivate: [ReporteGuard]
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