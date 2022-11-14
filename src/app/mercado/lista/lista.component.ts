import { Component, OnInit } from '@angular/core';
import { Mercado } from '../models/mercado';
import { MercadoService } from '../services/mercado.service';
import { environment } from 'src/environments/environment';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  imagens: string = environment.imagensUrl;

  public mercados: Mercado[] = [];
  errorMessage: string = "";
  localStorage = new LocalStorageUtils();

  constructor(private mercadoService: MercadoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.mercadoService
          .obterTodosPorEstadoCidade(this.localStorage.obterEstado(),
                                     this.localStorage.obterCidade())
          .subscribe({
            next: mercados => this.mercados = mercados,
            error: error => this.errorMessage
          });
  }

  processarFalha(fail: any) {
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
