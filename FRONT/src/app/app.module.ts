import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CadastrarUsuarioComponent } from './pages/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarImcComponent } from './pages/usuario/cadastrar-imc/cadastrar-imc.component';
import { ListarImcComponent } from './pages/usuario/listar-imc/listar-imc.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarUsuarioComponent,
    CadastrarImcComponent,
    ListarImcComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
