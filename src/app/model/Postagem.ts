import { Tema } from './Tema';
import { Usuario } from './Usuario';

export interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: Date;
  usuario: Usuario;
  tema: Tema;

  // constructor(
  //     id: number,
  //     titulo: string ,
  //     texto: string,
  //     data: Date,
  //     usuario: Usuario,
  //     tema: Tema
  // ){
  //     this.id = id
  //     this.titulo = titulo
  //     this.data = data
  //     this.tema = tema
  //     this.texto = texto
  //     this.usuario = usuario
  // }
}
