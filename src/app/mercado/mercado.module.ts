import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from "ngx-spinner";
import { ImageCropperModule } from 'ngx-image-cropper';

import { MercadoRoutingModule } from './mercado.route';
import { MercadoAppComponent } from './mercado.app.component';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MercadoService } from './services/mercado.service';
import { MercadoResolve } from './services/mercado.resolve';
import { MercadoGuard } from './services/mercado.guard';

@NgModule({
  declarations: [
    MercadoAppComponent,
    ListaComponent,
    NovoComponent,
    ExcluirComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    MercadoRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [
    MercadoService,
    MercadoResolve,
    MercadoGuard
  ]
})
export class MercadoModule { }
