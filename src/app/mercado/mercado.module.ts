import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from "ngx-spinner";

import { MercadoRoutingModule } from './mercado.route';
import { MercadoAppComponent } from './mercado.app.component';
import { ListaComponent } from './lista/lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MercadoService } from './services/mercado.service';
import { MercadoResolve } from './services/mercado.resolve';
import { MercadoGuard } from './services/mercado.guard';

@NgModule({
  declarations: [
    MercadoAppComponent,
    ListaComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    MercadoRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MercadoService,
    MercadoResolve,
    MercadoGuard
  ]
})
export class MercadoModule { }
