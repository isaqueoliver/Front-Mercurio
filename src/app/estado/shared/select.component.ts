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
                                if(this.estadoService.LocalStorage.obterUsuario()) this.estadoSelecionado.emit(this.estadoService.LocalStorage.obterUsuario().estado);
                                else this.estadoSelecionado.emit(this.estados[0]?.id);
                        });
    }

    public isSelected(estadoId: string){
        return this.estadoService.LocalStorage.obterUsuario().estado === estadoId;
    }

    public onChange(idEstadoSelecionado: string){
        this.estadoSelecionado.emit(idEstadoSelecionado);
    }
}