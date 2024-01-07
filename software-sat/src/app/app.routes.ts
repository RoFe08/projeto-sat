import { Routes } from '@angular/router';
import { HomeComponent } from './biblioteca/home/home-component/home.component';
import { CriacaoItensComponent } from './biblioteca/criacao-itens/criacao-itens-component/criacao-itens.component';
import { ListagemItensComponent } from './biblioteca/listagem-itens/listagem-itens-component/listagem-itens.component';

export const routes: Routes = [   { path: '', redirectTo: '/home', pathMatch: 'full' },
{
    path: "home",
    component: HomeComponent,
},
{
    path: "create-product",
    component: CriacaoItensComponent
},
{
    path: "get-itens",
    component: ListagemItensComponent
}];
