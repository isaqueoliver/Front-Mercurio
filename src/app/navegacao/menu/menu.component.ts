import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  public isCollapsed: boolean;
  public estadoSelecionado = "";

  constructor(private router: Router) {
    this.isCollapsed = true;
  }

  public isActive(nameRoute: string): string{
    let currentRoute = this.router.url.split('/')[1];
    return currentRoute === nameRoute ? 'active' : '';
  }

  public carregarCidades(estadoId: string){
    this.estadoSelecionado = estadoId;
  }

  public salvarCidade(){
    this.router.navigate(['/home']);
  }
}
