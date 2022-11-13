import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { BaseService } from "src/app/services/base.service";
import { Cidade } from "../models/cidade";

@Injectable()
export class CidadeService extends BaseService {
    constructor(private http: HttpClient) { super(); }

    obterCidadesPorEstado(estadoId: string): Observable<Cidade[]> {
        return this.http
                .get<Cidade[]>(this.UrlServiceV1 + `Cidade/ObterTodasPorEstado/${estadoId}`)
                .pipe(catchError(super.serviceError));
    }
}