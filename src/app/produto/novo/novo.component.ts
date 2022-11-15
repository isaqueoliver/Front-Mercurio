import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, fromEvent, merge } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { ProdutoService } from '../services/produto.service';
import { CurrencyUtils } from 'src/app/utils/currency-utils';
import { ProdutoBaseComponent } from '../produto-form.base.component';
import { LocalStorageUtils } from 'src/app/utils/localstorage';


@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html'
})
export class NovoComponent extends ProdutoBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[] = [];

  constructor(private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
    private toastr: ToastrService) { super(); }

  localStore = new LocalStorageUtils();
  public imageProduto = 'https://i.imgur.com/QubgFZO.png';

  ngOnInit(): void {

    this.produtoService.obterMercados(this.localStore.obterEstado(),
                                      this.localStore.obterCidade())
                        .subscribe(
                          mercados => this.mercados = mercados);
    this.produtoService.obterTodos().subscribe(
      produtos => this.produtos = produtos
    );

    this.produtoForm = this.fb.group({
      mercadoId: ['', [Validators.required]],
      produtoId: ['', [Validators.required]],
      valor: ['', [Validators.required]]
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormulario(this.formInputElements);
  }

  adicionarProduto() {
    if (this.produtoForm.dirty && this.produtoForm.valid) {
      this.produto = Object.assign({}, this.produto, this.produtoForm.value);

      this.produtoService.novoProduto(this.produto)
        .subscribe({
          next: sucesso => { this.processarSucesso(sucesso) },
          error: falha => { this.processarFalha(falha) }
        });

      this.mudancasNaoSalvas = false;
    }
  }

  produtoUrl(idProdutoSelecionado: string){
    const imagemProdutoSelecionado = this.produtos.find(p => p.id === idProdutoSelecionado)?.imagem;
    this.imageProduto = imagemProdutoSelecionado ? imagemProdutoSelecionado : 'https://i.imgur.com/QubgFZO.png';
  }

  processarSucesso(response: any) {
    this.produtoForm.reset();
    this.errors = [];

    let toast = this.toastr.success('Produto cadastrado com sucesso!', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/produtos/listar-todos']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}

