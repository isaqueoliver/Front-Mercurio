import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { BaseService } from "src/app/services/base.service";
import { Estado } from "../models/estado";

@Injectable()
export class EstadoService extends BaseService {
    constructor(private http: HttpClient) { super(); }

    obterEstados(): Observable<Estado[]> {
        return this.http
                .get<Estado[]>(this.UrlServiceV1 + "Estado/ObterTodos")
                .pipe(catchError(super.serviceError));
    }
}