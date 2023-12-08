import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Imc } from 'src/app/models/imc.models';
import { Usuario } from 'src/app/models/usuario.models';

@Component({
    selector: 'app-cadastrar-imc',
    templateUrl: './cadastrar-imc.component.html',
    styleUrls: ["./cadastrar-imc.component.css"],
  })
  export class CadastrarImcComponent {
    constructor(private http: HttpClient, private router: Router){}
    peso: string ="";
    altura: string ="";
    usuarios: Usuario[] = [];
    usuarioId : number = 0;

    ngOnInit(): void {
        this.http.get<Usuario[]>("https://localhost:7228/api/usuario/listar").subscribe({
            next: (usuarios) => {
                this.usuarios = usuarios;
            },
            error: (erro) => {
                console.log(erro);
            },
        })
    }

    cadastrar(): void {
        let imc: Imc = {
            peso: this.peso,
            altura: this.altura,
            usuarioId : this.usuarioId
        };
        this.http.post<Imc>("https://localhost:7228/api/imc/cadastrar",imc).subscribe({
            next: (imcs) => {
                this.router.navigate(["/pages/imc/cadastrar"]);
            },
            error: (erro) => {
                console.log(erro);
            },
        });
    }
  }
