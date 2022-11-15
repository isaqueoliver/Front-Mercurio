import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, fromEvent, merge } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { ImageCroppedEvent, ImageTransform, Dimensions } from 'ngx-image-cropper';

import { ReporteService } from '../services/reporte.service';
import { CurrencyUtils } from 'src/app/utils/currency-utils';
import { ReporteBaseComponent } from '../reporte-form.base.component';
import { Assunto } from '../models/reporte';


@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html'
})
export class NovoComponent extends ReporteBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[] = [];

  assuntos = [] as Assunto[];

  constructor(private fb: FormBuilder,
    private reporteService: ReporteService,
    private router: Router,
    private toastr: ToastrService) { super(); }

  ngOnInit(): void {
    this.reporteService.obterAssuntos()
      .subscribe({
        next: assuntos => this.assuntos = assuntos
      });

    this.reporteForm = this.fb.group({
      assuntoId: ['', [Validators.required]],
      descricao: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]],
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormulario(this.formInputElements);
  }

  adicionarReporte() {
    if (this.reporteForm.dirty && this.reporteForm.valid) {
      this.reporte = Object.assign({}, this.reporte, this.reporteForm.value);

      this.reporteService.novoReporte(this.reporte)
        .subscribe({
          next: sucesso => { this.processarSucesso(sucesso) },
          error: falha => { this.processarFalha(falha) }
        });

      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.reporteForm.reset();
    this.errors = [];

    let toast = this.toastr.success('Reporte cadastrado com sucesso!', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/reportes/listar-todos']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}

