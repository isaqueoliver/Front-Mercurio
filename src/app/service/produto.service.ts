import { Injectable } from '@angular/core';
import { DataService } from './data.service'

@Injectable({
    providedIn: 'root'
})
export class ProdutoService extends DataService{
    baseUrl = 'http://localhost:51767/';

    listarProdutos(){
        return this.get<any>(`${this.baseUrl}api/produto/listarProdutos/`);
    }
}