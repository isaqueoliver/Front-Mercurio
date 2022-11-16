import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaAppComponent } from './conta.app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaGuard } from './services/conta.guard';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutoGuard } from '../produto/services/produto.guard';
import { InformacoesComponent } from './informacoes/informacoes.component';

const contaRouterConfig: Routes = [
    {
        path: '', component: ContaAppComponent,
        children: [
            { path: 'cadastro', component: CadastroComponent, canActivate: [ContaGuard], canDeactivate: [ContaGuard] },
            { path: 'login', component: LoginComponent, canActivate: [ContaGuard] },
            { path: 'meus-produtos', component: ListaProdutosComponent, canActivate: [ProdutoGuard] },
            { path: 'minhas-informacoes', component: InformacoesComponent, canActivate: [ProdutoGuard] }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contaRouterConfig)
    ],
    exports: [RouterModule]
})
export class ContaRoutingModule { }