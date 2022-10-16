import { Component, OnInit } from '@angular/core';
import { Reporte } from '../models/reporte';
import { ReporteService } from '../services/reporte.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  imagens: string = environment.imagensUrl;

  public reportes: Reporte[] = [];
  errorMessage: string = "";

  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {
    this.reporteService.obterTodos()
      .subscribe({
        next: reportes => this.reportes = reportes,
        error: error => this.errorMessage
      });
  }
}
