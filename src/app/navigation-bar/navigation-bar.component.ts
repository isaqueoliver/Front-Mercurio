import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
    isLogado: boolean = false;

    usuarioLogado: string = "";
    constructor(private router: Router,
        private activatedRouter: ActivatedRoute) { }
    
    ngOnInit(): void{
        this.router.events
        .subscribe(item => {
            this.isLogado = localStorage.getItem('isLogado') === "true";
            this.usuarioLogado = localStorage.getItem('usuarioLogado') || "";
        });        
    }

    meuPerfil() {
        this.router.navigate(['perfil']);
    }

    sair() {
        this.router.navigateByUrl('login');
    }
}