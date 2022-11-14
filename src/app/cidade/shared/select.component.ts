import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { ControlContainer, FormControlDirective, FormGroupDirective } from "@angular/forms";
import { delay, takeLast, takeUntil } from "rxjs";
import { ContaService } from "src/app/conta/services/conta.service";
import { Cidade } from "../models/cidade";
import { CidadeService } from "../services/cidade.service";

@Component({
    selector: 'app-select-cidade',
    templateUrl: './select.component.html',
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: FormControlDirective
        }
    ]
})
export class SelectCidadeComponent implements OnInit, OnChanges {
    public cidades: Cidade[] = [];

    @Input() estadoId: string = "";
    @Output() cidadeSelecionado = new EventEmitter<string>();

    constructor(private cidadeService: CidadeService) {}

    ngOnInit(){
        this.buscarCidades();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.estadoId = changes['estadoId'].currentValue;
        this.buscarCidades();
    }

    public onChange(idCidadeSelecionado: string){
        this.cidadeService.LocalStorage.salvarCidade(this.cidades[0]?.id);
        this.cidadeSelecionado.emit(idCidadeSelecionado);
    }

    public isSelected(cidadeId: string){
        return this.cidadeService.LocalStorage.obterUsuario().cidade === cidadeId ? 'selected' : '';
    }

    buscarCidades(){
        if(this.estadoId.length > 0)
        {
            this.cidadeService.obterCidadesPorEstado(this.estadoId)
                        .subscribe(
                            Cidades => { 
                                this.cidades = Cidades;
                                if(this.cidadeService.LocalStorage.obterTokenUsuario())
                                    this.cidadeSelecionado.emit(this.cidadeService.LocalStorage.obterCidade());
                                else{
                                    this.cidadeService.LocalStorage.salvarCidade(this.cidades[0]?.id);
                                    this.cidadeSelecionado.emit(this.cidades[0]?.id);
                                }
                        });
        }
    }
}