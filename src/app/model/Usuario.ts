import { Postagem } from './Postagem';

export interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  tipo: string;
  postagem: Postagem[];
}
