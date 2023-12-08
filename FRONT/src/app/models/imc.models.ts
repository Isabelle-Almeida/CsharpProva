import { Usuario } from './usuario.models';
export interface Imc {
    imcId? : number
    altura : string
    peso : string
    usuario?: Usuario
    usuarioId: number
    
}