import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivate, Router } from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import Swal from 'sweetalert2';


@Injectable()
export class ContaGuard implements CanDeactivate<CadastroComponent>, CanActivate {
    
    localStorageUtils = new LocalStorageUtils();

    constructor(private router: Router){}
    
    canDeactivate(component: CadastroComponent) {
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

    canActivate() {
        if(this.localStorageUtils.obterTokenUsuario()){
            this.router.navigate(['/home']);
        }

        return true;
    }
    
}