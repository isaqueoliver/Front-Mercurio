import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Reporte } from '../models/reporte';
import { ReporteService } from './reporte.service';

@Injectable()
export class ReporteResolve implements Resolve<Reporte> {

    constructor(private reporteService: ReporteService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.reporteService.obterPorId(route.params['id']);
    }
}