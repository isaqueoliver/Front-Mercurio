import { ProdutoResponse, ProdutoUsuarioRequest } from './models/produto';
import { FormGroup } from '@angular/forms';
import { ElementRef } from '@angular/core';

import { FormBaseComponent } from '../base-components/form-base.component';
import { Mercado } from '../mercado/models/mercado';

export abstract class ProdutoBaseComponent extends FormBaseComponent {
    
    produto = {} as ProdutoUsuarioRequest;
    produtos: ProdutoResponse[] = [];
    mercados: Mercado[] = [];
    errors: any[] = [];
    produtoForm: FormGroup = {} as FormGroup;

    constructor() {
        super();

        this.validationMessages = {
            mercadoId: {
                required: 'Escolha um Mercado',
            },
            produtoId: {
                required: 'Escolha um Produto'
            },
            valor: {
                required: 'Informe o Valor',
            }
        }

        super.configurarMensagensValidacaoBase(this.validationMessages);
    }

    protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
        super.configurarValidacaoFormularioBase(formInputElements, this.produtoForm);
    }
}