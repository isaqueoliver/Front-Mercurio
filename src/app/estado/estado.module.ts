import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EstadoService } from "./services/estado.service";
import { SelectEstadoComponent } from "./shared/select.component";

@NgModule({
    declarations: [
        SelectEstadoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ SelectEstadoComponent ],
    providers: [
      EstadoService
    ]
  })
  export class EstadoModule { }