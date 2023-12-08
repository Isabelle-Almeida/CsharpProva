import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.models';

@Component({
    selector: 'app-cadastrar-usuario',
    templateUrl: './cadastrar-usuario.component.html',
    styleUrls: ["./cadastrar-usuario.component.css"],
  })
  export class CadastrarUsuarioComponent {
    constructor(private http: HttpClient, private router: Router){}
    nome: string ="";
    nascimento: string ="";

    cadastrar(): void {
        let usuario: Usuario = {
            nome: this.nome,
            nascimento: this.nascimento
        };
        this.http.post<Usuario>("https://localhost:7228/api/usuario/cadastrar",usuario).subscribe({
            next: (usuarios) => {
                this.router.navigate(["/pages/usuario/cadastrar"]);
            },
            error: (erro) => {
                console.log(erro);
            },
        });
    }
  }

