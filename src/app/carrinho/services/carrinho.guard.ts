import { Injectable } from '@angular/core';
import { CanDeactivate, Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { BaseGuard } from 'src/app/services/base.guard';

@Injectable()
export class CarrinhoGuard extends BaseGuard implements CanActivate {
    
    constructor(protected override router: Router){ super(router); }

    canActivate(routeAc: ActivatedRouteSnapshot) {
        return super.validarClaims(routeAc);
    }    
}