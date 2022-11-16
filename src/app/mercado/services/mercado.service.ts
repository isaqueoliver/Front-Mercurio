import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Mercado } from '../models/mercado';

@Injectable()
export class MercadoService extends BaseService {

    constructor(private http: HttpClient) { super() }

    obterTodosPorEstadoCidade(estadoId: string, cidadeId: string): Observable<Mercado[]> {
        return this.http
            .get<Mercado[]>(this.UrlServiceV1 + `Mercado/ObterPorEstadoECidade/${estadoId}/${cidadeId}`,
                            super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Mercado> {
        return this.http
            .get<Mercado>(this.UrlServiceV1 + "mercados/" + id, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterPorNome(nome: string): Observable<Mercado[]> {
        return this.http
            .get<Mercado[]>(this.UrlServiceV1 + `Mercado/ObterTodosPorMercadoNome/${nome}`, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterMercadoes(): Observable<Mercado[]> {
        return this.http
            .get<Mercado[]>(this.UrlServiceV1 + "Mercadoes")
            .pipe(catchError(super.serviceError));
    }
}
