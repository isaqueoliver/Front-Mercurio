import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from "ngx-spinner";
import { ImageCropperModule } from 'ngx-image-cropper';

import { ReporteRoutingModule } from './reporte.route';
import { ReporteAppComponent } from './reporte.app.component';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { ReporteService } from './services/reporte.service';
import { ReporteResolve } from './services/reporte.resolve';
import { ReporteGuard } from './services/reporte.guard';

@NgModule({
  declarations: [
    ReporteAppComponent,
    ListaComponent,
    NovoComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [
    ReporteService,
    ReporteResolve,
    ReporteGuard
  ]
})
export class ReporteModule { }
