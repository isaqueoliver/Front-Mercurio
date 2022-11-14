import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { ProdutoResponse, ProdutoUsuarioRequest, ProdutoUsuarioResponse } from '../models/produto';
import { Mercado } from "src/app/mercado/models/mercado";

@Injectable()
export class ProdutoService extends BaseService {

    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<ProdutoResponse[]> {
        return this.http
            .get<ProdutoResponse[]>(this.UrlServiceV1 + "Produto/ObterTodos", super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterTodosPorEstadoECidade(): Observable<ProdutoUsuarioResponse[]> {
        return this.http
            .get<ProdutoUsuarioResponse[]>(this.UrlServiceV1 + 
                `ProdutoUsuario/ObterTodosPorEstadoECidade/${this.LocalStorage.obterEstado()}/${this.LocalStorage.obterCidade()}`,)
            .pipe(catchError(super.serviceError));
    }

    obterTodosValorMedioPorEstadoECidade(): Observable<ProdutoUsuarioResponse[]> {
        return this.http
            .get<ProdutoUsuarioResponse[]>(this.UrlServiceV1 + 
                `ProdutoValorMedio/ObterTodosPorEstadoECidade/${this.LocalStorage.obterEstado()}/${this.LocalStorage.obterCidade()}`,)
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string){
        return {} as ProdutoResponse;
    }

    novoProduto(produto: ProdutoUsuarioRequest): Observable<ProdutoResponse> {
        return this.http
            .post(this.UrlServiceV1 + "ProdutoUsuario/Adicionar", produto, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    excluirProduto(id: string): Observable<ProdutoResponse> {
        return this.http
            .delete(this.UrlServiceV1 + "Produto/" + id, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }    

    obterMercados(estadoId: string, cidadeId: string): Observable<Mercado[]> {
        return this.http
            .get<Mercado[]>(this.UrlServiceV1 + `Mercado/ObterPorEstadoECidade/${estadoId}/${cidadeId}`,
                            super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}
