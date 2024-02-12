import { Postagem } from './Postagem';

export interface Tema {
  id: number;
  nome: string;
  descricao: string;
  postagem: Postagem[];
}
