import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CidadeService } from "./services/cidade.service";
import { SelectCidadeComponent } from "./shared/select.component";

@NgModule({
    declarations: [
        SelectCidadeComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ SelectCidadeComponent ],
    providers: [
      CidadeService
    ]
  })
  export class CidadeModule { }