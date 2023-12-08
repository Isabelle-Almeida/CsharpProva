import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarUsuarioComponent } from './pages/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarImcComponent } from './pages/usuario/cadastrar-imc/cadastrar-imc.component';
import { ListarImcComponent } from './pages/usuario/listar-imc/listar-imc.component';

const routes: Routes = [
  {
    path: "",
    component:CadastrarUsuarioComponent
  },
  {
    path: "pages/usuario/cadastrar",
    component:CadastrarUsuarioComponent
  },
  {
    path: "pages/imc/cadastrar",
    component:CadastrarImcComponent
  },
  {
    path: "pages/imc/listar",
    component:ListarImcComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
