import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  crudForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.crudForm = this.formBuilder.group({
      nome: [null],
      logradouro: [null],
      rua: [null],
      numero: [null],
      complemento: [null]
    });
    if(!(localStorage.getItem("isLogado") === "true"))
      this.router.navigate(['login']);
    else
      this.obterUsuario();
  }

  obterUsuario(){
    this.usuarioService.obterUsuario(localStorage.getItem("usuarioLogado") || "").subscribe(response => {
      (<HTMLInputElement>document.getElementById('nome')).value = response.nome;
      (<HTMLInputElement>document.getElementById('logradouro')).value = response.endereco.logradouro;
      (<HTMLInputElement>document.getElementById('rua')).value = response.endereco.rua;
      (<HTMLInputElement>document.getElementById('numero')).value = response.endereco.numero;
      (<HTMLInputElement>document.getElementById('complemento')).value = response.endereco.complemento;
    });
  }

  editar(){
    const model = {
      nome: (<HTMLInputElement>document.getElementById('nome')).value,
      email: localStorage.getItem('usuarioLogado'),
      endereco: {
        logradouro: (<HTMLInputElement>document.getElementById('logradouro')).value,
        rua: (<HTMLInputElement>document.getElementById('rua')).value,
        numero: (<HTMLInputElement>document.getElementById('numero')).value,
        complemento: (<HTMLInputElement>document.getElementById('complemento')).value
      }
    };

    this.usuarioService.alterarUsuario(model).subscribe(response => {
      this.router.navigate(['home']);
    });
  }

}
