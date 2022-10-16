import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Reporte } from '../models/reporte';

@Injectable()
export class ReporteService extends BaseService {

    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<Reporte[]> {
        return this.http
            .get<Reporte[]>(this.UrlServiceV1 + "reportes", super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Reporte> {
        return this.http
            .get<Reporte>(this.UrlServiceV1 + "reportes/" + id, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    novoReporte(reporte: Reporte): Observable<Reporte> {
        return this.http
            .post(this.UrlServiceV1 + "reportes", reporte, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    atualizarReporte(reporte: Reporte): Observable<Reporte> {
        return this.http
            .put(this.UrlServiceV1 + "reportes/" + reporte.id, reporte, super.ObterAuthHeaderJson())
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
