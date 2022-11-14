import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Carrinho, ItemCarrinhoRequest } from '../models/carrinho';

@Injectable()
export class CarrinhoService extends BaseService {

    constructor(private http: HttpClient) { super() }

    obterCarrinho(): Observable<Carrinho> {
        return this.http
            .get<Carrinho>(this.UrlServiceV1 + "Carrinho/Obter", super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    adicionarItem(itemCarrinho: ItemCarrinhoRequest): Observable<Carrinho> {
        return this.http
            .post(this.UrlServiceV1 + "Carrinho/Adicionar-Item", itemCarrinho, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    atualizarCarrinho(carrinho: Carrinho): Observable<Carrinho> {
        return this.http
            .put(this.UrlServiceV1 + "carrinhos/" + carrinho.id, carrinho, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    excluirCarrinho(id: string): Observable<Carrinho> {
        return this.http
            .delete(this.UrlServiceV1 + "carrinhos/" + id, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }    
}
