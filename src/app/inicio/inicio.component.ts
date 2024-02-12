import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { UsuarioLogar } from '../model/UsuarioLogar';
import { Router } from '@angular/router';
import { environment } from '../../environments/enviromenmts.prod';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { AuthService } from '../service/auth.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  postagem!: Postagem;
  listaPostagens: Postagem[] = [];

  tema!: Tema;
  listaTemas: Tema[] = [];
  idTema: number = 0;
  tituloPostagem: string = '';
  textoPostagem: string = '';

  Usuario!: Usuario;
  UsuarioLogar!: UsuarioLogar;
  idUsuario = environment.id;

  nome = environment.nome;
  foto = environment.foto;
  tipo = environment.tipo;

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    public authService: AuthService,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.alertas.showAlertInfo('Sua sessão expirou, faça o login novamente');
      this.router.navigate(['/logar']);
    }

    this.getAllTemas();
    this.getAllPostagens();
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp.reverse();
    });
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp.reverse();
    });
  }

  validarTitulo(event: any) {
    this.tituloPostagem = event.target.value;
  }

  validarTexto(event: any) {
    this.textoPostagem = event.target.value;
  }

  publicar() {
    if (this.tituloPostagem == null) {
      this.alertas.showAlertDanger('Digite um título');
    } else if (this.textoPostagem == null) {
      this.alertas.showAlertDanger('Digite o texto');
    } else if (this.idTema == null) {
      this.alertas.showAlertDanger('Escolha um tema para a postagem');
    } else {
      this.tema.id = this.idTema;
      this.postagem.tema = this.tema;

      this.idUsuario = this.idUsuario;
      this.postagem.usuario = this.Usuario;

      this.postagemService
        .postPostagem(this.postagem)
        .subscribe((resp: Postagem) => {
          this.postagem = resp;
          this.alertas.showAlertSuccess('Postagem realizada com sucesso!');
          this.getAllPostagens();
          this.getAllTemas();
        });
    }
  }

  findByIdUsuario() {
    this.authService
      .getByIdUsuario(this.idUsuario)
      .subscribe((resp: Usuario) => {
        this.Usuario = resp;
      });
  }
}
