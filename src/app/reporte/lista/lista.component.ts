import { Component, OnInit } from '@angular/core';
import { Reporte, ReporteConstantes } from '../models/reporte';
import { ReporteService } from '../services/reporte.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  imagens: string = environment.imagensUrl;

  public reportes: Reporte[] = [];

  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {
    this.reporteService.obterTodos()
      .subscribe({
        next: reportes => this.reportes = reportes
    });
  }

  public statusReporte(status: string){
    return status === ReporteConstantes.STATUS_AGUARDANDO ?
                        'border-warning text-muted' : (status === ReporteConstantes.STATUS_RESPONDIDO ?
                          'border-success text-success' : 'border-danger text-danger');
  }
}
