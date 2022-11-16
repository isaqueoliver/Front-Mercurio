import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioCadastro, UsuarioLogin, UsuarioResponse } from '../models/usuario';

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { BaseService } from 'src/app/services/base.service';
import { ProdutoUsuarioResponse } from 'src/app/produto/models/produto';
import { Estado } from 'src/app/estado/models/estado';
import { Cidade } from 'src/app/cidade/models/cidade';

@Injectable()
export class ContaService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    registrarUsuario(usuario: UsuarioCadastro): Observable<UsuarioResponse> {
        let response = this.http
            .post(this.UrlServiceV1 + 'nova-conta', usuario, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }

    login(usuario: UsuarioLogin): Observable<UsuarioResponse> {
        let response = this.http
            .post(this.UrlServiceV1 + 'autenticar', usuario, this.ObterHeaderJson())
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }

    obterProdutosUsuario(): Observable<ProdutoUsuarioResponse[]>{
        return this.http
                .get<ProdutoUsuarioResponse[]>(`${this.UrlServiceV1}ProdutoUsuario/ObterTodosPorUsuario`,
                                              this.ObterAuthHeaderJson())
                .pipe(
                    map(this.extractData),
                    catchError(this.serviceError)
                );
    }

    obterEstadoPorId(estadoId: string): Observable<Estado> {
        return this.http
                .get<Estado>(`${this.UrlServiceV1}Estado/ObterPorId/${estadoId}`)
                .pipe(
                    map(this.extractData),
                    catchError(this.serviceError)
                );
    }

    obterCidadePorId(cidadeId: string): Observable<Cidade> {
        return this.http
                .get<Cidade>(`${this.UrlServiceV1}Cidade/ObterPorId/${cidadeId}`)
                .pipe(
                    map(this.extractData),
                    catchError(this.serviceError)
                );
    }
}