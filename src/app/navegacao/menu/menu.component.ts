import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estado } from '../../estado/models/estado';
import { EstadoService } from '../../estado/services/estado.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  public isCollapsed: boolean;
  public estadoSelecionado = "";

  constructor(private router: Router,
    private estadoService: EstadoService) {
    this.isCollapsed = true;
  }

  public isActive(nameRoute: string): string{
    let currentRoute = this.router.url.split('/')[1];
    return currentRoute === nameRoute ? 'active' : '';
  }

  public carregarCidades(estadoId: any){
    this.estadoSelecionado = estadoId;
  }

  public salvarCidade(cidadeId: any){
  }
}
