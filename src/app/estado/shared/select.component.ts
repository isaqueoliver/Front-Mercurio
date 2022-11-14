import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ContaService } from "src/app/conta/services/conta.service";
import { Estado } from "../models/estado";
import { EstadoService } from "../services/estado.service";

@Component({
    selector: 'app-select-estado',
    templateUrl: './select.component.html'
})
export class SelectEstadoComponent implements OnInit {
    public estados: Estado[] = [];

    @Output() estadoSelecionado = new EventEmitter<string>();

    constructor(private estadoService: EstadoService) {}

    ngOnInit(){
        this.estadoService.obterEstados()
                        .subscribe(
                            Estados => {
                                this.estados = Estados;
                                if(this.estadoService.LocalStorage.obterTokenUsuario() &&
                                   this.estadoService.LocalStorage.obterCidade().length === 0)
                                        this.estadoSelecionado.emit(this.estadoService.LocalStorage.obterEstado());
                                else if(this.estadoService.LocalStorage.obterCidade().length === 0){
                                    this.estadoService.LocalStorage.salvarEstado(this.estados[0]?.id);
                                    this.estadoSelecionado.emit(this.estados[0]?.id);
                                }         
                        });
    }

    public isSelected(estadoId: string): boolean{
        return this.estadoService.LocalStorage.obterUsuario() ?
               this.estadoService.LocalStorage.obterEstado() === estadoId : false;
    }

    public onChange(idEstadoSelecionado: string){
        this.estadoService.LocalStorage.salvarEstado(this.estados[0]?.id);
        this.estadoSelecionado.emit(idEstadoSelecionado);
    }
}