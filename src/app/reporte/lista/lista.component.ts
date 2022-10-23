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
  errorMessage: string = "";

  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {
    // this.reporteService.obterTodos()
    //   .subscribe({
    //     next: reportes => this.reportes = reportes,
    //     error: error => this.errorMessage
    //   });

    this.reportes = [
      {
        id: "1548",
        assunto: "Falta o nome de um Supermercado ou Mercado",
        descricao: "Está faltando o nome do supermercado Coelho",
        dataCadastro: "15/10/2022",
        status: "Respondido",
        resposta: "Foi adicionado a lista de mercados, muito obrigado pela sugestão!"
      },
      {
        id: "8564",
        assunto: "Falta o nome de um Produto",
        descricao: "Está faltando o nome do vinho Carbot",
        dataCadastro: "22/10/2022",
        status: "Aguardando Resposta...",
        resposta: null
      },
    ];
  }

  public statusReporte(status: string){
    return status === ReporteConstantes.STATUS_AGUARDANDO ?
                        'border-warning text-muted' : (status === ReporteConstantes.STATUS_RESPONDIDO ?
                          'border-success text-success' : 'border-danger text-danger');
  }
}
