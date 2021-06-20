import { Injectable } from '@angular/core';
import { DataService } from './data.service'

@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends DataService{
    baseUrl = 'http://localhost:51767/';

    logar(email: string, senha: string){
        return this.get<any>(`${this.baseUrl}api/usuario/logar/?email=${email}&senha=${senha}`);
    }

    criarConta(data: any){
        return this.post<any>(`${this.baseUrl}api/usuario/criarConta`, data);
    }

    obterUsuario(email: string){
        return this.get<any>(`${this.baseUrl}api/usuario/obterUsuario/?email=${email}`);
    }

    alterarUsuario(data: any){
        return this.post<any>(`${this.baseUrl}api/usuario/alterarUsuario`, data);
    }
}