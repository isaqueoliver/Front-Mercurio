import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Carrinho } from '../models/carrinho';

@Injectable()
export class CarrinhoService extends BaseService {

    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<Carrinho[]> {
        return this.http
            .get<Carrinho[]>(this.UrlServiceV1 + "carrinhos", super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Carrinho> {
        return this.http
            .get<Carrinho>(this.UrlServiceV1 + "carrinhos/" + id, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    novoCarrinho(carrinho: Carrinho): Observable<Carrinho> {
        return this.http
            .post(this.UrlServiceV1 + "carrinhos", carrinho, super.ObterAuthHeaderJson())
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
