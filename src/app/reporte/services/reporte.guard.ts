import { Injectable } from '@angular/core';
import { CanDeactivate, Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { BaseGuard } from 'src/app/services/base.guard';
import { NovoComponent } from '../novo/novo.component';

@Injectable()
export class ReporteGuard extends BaseGuard implements CanActivate {
    
    constructor(protected override router: Router){ super(router); }

    canDeactivate(component: NovoComponent) {
        if(component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');
        }        
        return true
    }

    canActivate(routeAc: ActivatedRouteSnapshot) {
        return super.validarClaims(routeAc);
    }    
}