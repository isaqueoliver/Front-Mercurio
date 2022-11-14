import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Carrinho } from '../models/carrinho';
import { CarrinhoService } from './carrinho.service';

// @Injectable()
// export class CarrinhoResolve implements Resolve<Carrinho> {

//     constructor(private carrinhoService: CarrinhoService) { }

//     // resolve(route: ActivatedRouteSnapshot) {
//     //     return this.carrinhoService.obterPorId(route.params['id']);
//     // }
// }