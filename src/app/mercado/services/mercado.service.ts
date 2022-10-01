import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Mercado, Fornecedor } from '../models/mercado';

@Injectable()
export class MercadoService extends BaseService {

    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<Mercado[]> {
        return this.http
            .get<Mercado[]>(this.UrlServiceV1 + "mercados", super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Mercado> {
        return this.http
            .get<Mercado>(this.UrlServiceV1 + "mercados/" + id, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    novoMercado(mercado: Mercado): Observable<Mercado> {
        return this.http
            .post(this.UrlServiceV1 + "mercados", mercado, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    atualizarMercado(mercado: Mercado): Observable<Mercado> {
        return this.http
            .put(this.UrlServiceV1 + "mercados/" + mercado.id, mercado, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    excluirMercado(id: string): Observable<Mercado> {
        return this.http
            .delete(this.UrlServiceV1 + "mercados/" + id, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }    

    obterFornecedores(): Observable<Fornecedor[]> {
        return this.http
            .get<Fornecedor[]>(this.UrlServiceV1 + "fornecedores")
            .pipe(catchError(super.serviceError));
    }
}
