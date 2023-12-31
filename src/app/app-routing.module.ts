import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { ProjetosComponent } from './components/pages/projetos/projetos.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  //rotas iniciais

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
