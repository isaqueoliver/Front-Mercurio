import { Injectable } from '@angular/core';
import { CanDeactivate, Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { NovoComponent } from '../novo/novo.component';
import { BaseGuard } from 'src/app/services/base.guard';
import Swal from 'sweetalert2';

@Injectable()
export class MercadoGuard extends BaseGuard implements CanActivate, CanDeactivate<NovoComponent> {
    
    constructor(protected override router: Router){ super(router); }

    canDeactivate(component: NovoComponent) {
        if(component.mudancasNaoSalvas) {
            return Swal.fire({
                title: 'Tem certeza que deseja abandonar o preenchimento do formulario?',
                text: "Você vai perder todas as informações se sair!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sim, sair!',
                cancelButtonText: 'Não, ficar!'
              }).then((result) => {
                return result.isConfirmed;
              });
        }        
        return true
    }

    canActivate(routeAc: ActivatedRouteSnapshot) {
        return super.validarClaims(routeAc);
    }    
}