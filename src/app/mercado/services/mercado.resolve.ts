import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Mercado } from '../models/mercado';
import { MercadoService } from './mercado.service';

@Injectable()
export class MercadoResolve implements Resolve<Mercado> {

    constructor(private mercadoService: MercadoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.mercadoService.obterPorId(route.params['id']);
    }
}