import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { CustomValidators } from 'ng2-validation';
import { ToastrService } from 'ngx-toastr';

import { UsuarioCadastro } from '../models/usuario';
import { ContaService } from '../services/conta.service';

import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { compilePipeFromMetadata } from '@angular/compiler';
import { EstadoService } from 'src/app/estado/services/estado.service';
import { Estado } from 'src/app/estado/models/estado';
import { Cidade } from 'src/app/cidade/models/cidade';
import { CidadeService } from 'src/app/cidade/services/cidade.service';
import { GenericValidator } from 'src/app/utils/generic-form-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];

  errors: any[] = [];
  cadastroForm!: FormGroup;
  usuario!: UsuarioCadastro;
  estados: Estado[] = [];
  cidades: Cidade[] = [];

  constructor(private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private toastr: ToastrService,
    private estadoService: EstadoService,
    private cidadeService: CidadeService) {

    super();

    this.validationMessages = {
      nome: {
        required: 'Informe o seu Nome'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      cpf: {
        required: 'Informe o seu CPF',
        rangeLength: 'O CPF possui 11 caracteres',
        cpf: 'CPF informado é inválido'
      },
      estadoId: {
        required: 'Informe o seu Estado'
      },
      cidadeId: {
        required: 'Informe a sua Cidade'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit(): void {

    this.estadoService.obterEstados()
                        .subscribe(
                            Estados => {
                                this.estados = Estados;
                        });

    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)]);
    let cpf = new FormControl('', [Validators.required, CustomValidators.rangeLength([11, 11]), GenericValidator.isValidCpf()]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      cpf: cpf,
      estadoId: ['', [Validators.required]],
      cidadeId: ['', [Validators.required]],
      senhaConfirmacao: senhaConfirm
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.cadastroForm);
  }

  adicionarConta() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);

      this.contaService.registrarUsuario(this.usuario)
        .subscribe({
          next: (sucesso) => this.processarSucesso(sucesso),
          error: (falha) => this.processarFalha(falha)
        });

      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.cadastroForm.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);

    let toast = this.toastr.success('Registro realizado com Sucesso!', 'Bem vindo!!!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }

  public buscarCidades(estadoId: string){
    this.cidadeService.obterCidadesPorEstado(estadoId)
                        .subscribe(
                            Cidades => {
                                this.cidades = Cidades;
    });
  }
}
