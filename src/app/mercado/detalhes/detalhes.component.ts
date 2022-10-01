import { Component } from '@angular/core';
import { Mercado } from '../models/mercado';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent {

  imagens: string = environment.imagensUrl;
  mercado: Mercado;

  constructor(private route: ActivatedRoute) {

    this.mercado = this.route.snapshot.data['mercado'];
  }

}
