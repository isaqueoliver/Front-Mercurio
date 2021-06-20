import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  crudForm: FormGroup = this.formBuilder.group({});

  loginFail: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.crudForm = this.formBuilder.group({
      email: [null],
      senha: [null]
    });
    localStorage.removeItem('produtos');
  }

  logar(){
    this.usuarioService.logar(this.crudForm.value.email, this.crudForm.value.senha).subscribe(response => {
      if(response){
        this.loginFail = false;
        localStorage.setItem("isLogado", "true");
        localStorage.setItem("usuarioLogado", this.crudForm.value.email);
        this.router.navigate(['home']);
      }
      else{
        this.loginFail = true;
        localStorage.setItem("isLogado", "false");
        localStorage.setItem("usuarioLogado", "");
      }
    });
  }

}
