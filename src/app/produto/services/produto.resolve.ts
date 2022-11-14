import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProdutoResponse } from '../models/produto';
import { ProdutoService } from './produto.service';

@Injectable()
export class ProdutoResolve implements Resolve<ProdutoResponse> {

    constructor(private produtoService: ProdutoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.produtoService.obterPorId(route.params['id']);
    }
}