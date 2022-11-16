import { Component, OnInit } from '@angular/core';
import { Mercado } from '../models/mercado';
import { MercadoService } from '../services/mercado.service';
import { environment } from 'src/environments/environment';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  imagens: string = environment.imagensUrl;

  public mercados: Mercado[] = [];
  errorMessage: string = "";
  localStorage = new LocalStorageUtils();
  nomePesquisa: string | null = null;

  constructor(private mercadoService: MercadoService,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nomePesquisa = params.get('nome');
    });

    this.nomePesquisa ?
        this.obterMercadosPorNomePesquisa(this.nomePesquisa!) :
        this.obterMercadosPorEstadoECidade();
  }

  obterMercadosPorEstadoECidade(){
    this.mercadoService
          .obterTodosPorEstadoCidade(this.localStorage.obterEstado(),
                                    this.localStorage.obterCidade())
            .subscribe({
              next: mercados => this.mercados = mercados,
              error: error => this.processarFalha(error)
            });
  }

  obterMercadosPorNomePesquisa(nome: string){
    this.mercadoService
          .obterPorNome(nome)
            .subscribe({
              next: mercados => this.mercados = mercados,
              error: error => this.processarFalha(error)
            });
  }

  processarFalha(fail: any) {
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
