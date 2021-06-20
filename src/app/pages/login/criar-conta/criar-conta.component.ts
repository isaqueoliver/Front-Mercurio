import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: []
})
export class CriarContaComponent implements OnInit {

  crudForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.crudForm = this.formBuilder.group({
      email: [null],
      senha: [null],
      nome: [null],
      dtNascimento: [null],
      cidade: [null],
      bairro: [null],
      logradouro: [null],
      rua: [null],
      numero: [null],
      complemento: [null],
      cep: [null]
    });
  }

  criarConta(){
    const model = {
      nome: this.crudForm.value.nome,
      email: this.crudForm.value.email,
      senha: this.crudForm.value.senha,
      dtNascimento: this.crudForm.value.dtNascimento,
      endereco: {
        logradouro: this.crudForm.value.logradouro,
        rua: this.crudForm.value.rua,
        numero: this.crudForm.value.numero,
        complemento: this.crudForm.value.complemento
      }
    };
    
    this.usuarioService.criarConta(model).subscribe(response => {
      if(!response.hasError){
        this.toastr.success(response.message);
        this.router.navigate(['login']);
      }
      else
        this.toastr.error(response.message);
    });
  }

}
