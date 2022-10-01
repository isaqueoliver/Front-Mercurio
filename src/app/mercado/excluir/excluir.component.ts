import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MercadoService } from '../services/mercado.service';

import { ToastrService } from 'ngx-toastr';

import { Mercado } from '../models/mercado';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html'
})
export class ExcluirComponent  {

  imagens: string = environment.imagensUrl;
  mercado: Mercado;

  constructor(private mercadoService: MercadoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {

    this.mercado = this.route.snapshot.data['mercado'];
  }

  public excluirMercado() {
    this.mercadoService.excluirMercado(this.mercado.id)
      .subscribe(
      evento => { this.sucessoExclusao(evento) },
      ()     => { this.falha() }
      );
  }

  public sucessoExclusao(evento: any) {

    const toast = this.toastr.success('Mercado excluido com Sucesso!', 'Good bye :D');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/mercados/listar-todos']);
      });
    }
  }

  public falha() {
    this.toastr.error('Houve um erro no processamento!', 'Ops! :(');
  }
}

