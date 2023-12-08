
import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Imc } from 'src/app/models/imc.models';
import { Usuario } from 'src/app/models/usuario.models';

@Component({
    selector: 'app-listar-imc',
    templateUrl: './listar-imc.component.html',
    styleUrls: ["./listar-imc.component.css"],
  })

export class ListarImcComponent {
    imcs :Imc[] = [];

    constructor(private http: HttpClient, private router: Router){}
  
    ngOnInit(): void {
        this.http.get<Imc[]>("https://localhost:7228/api/imc/listar").subscribe({
            next: (imcs) => {
                this.imcs = imcs;
            },
            error: (erro) => {
                console.log(erro);
            },
        })
    }
}