import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Assunto, Reporte, ReporteRequest } from '../models/reporte';

@Injectable()
export class ReporteService extends BaseService {

    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<Reporte[]> {
        return this.http
            .get<Reporte[]>(this.UrlServiceV1 + "Reporte/ObterTodos", super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterAssuntos(): Observable<Assunto[]> {
        return this.http
            .get<Assunto[]>(this.UrlServiceV1 + "Assunto/ObterTodos", super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Reporte> {
        return new Observable();
    }

    novoReporte(reporte: ReporteRequest): Observable<Reporte> {
        return this.http
            .post(this.UrlServiceV1 + "Reporte/Adicionar", reporte, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    excluirReporte(id: string): Observable<Reporte> {
        return this.http
            .delete(this.UrlServiceV1 + "reportes/" + id, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }    
}
