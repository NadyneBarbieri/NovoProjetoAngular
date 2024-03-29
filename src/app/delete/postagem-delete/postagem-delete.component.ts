import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from '../../model/Postagem';
import { PostagemService } from '../../service/postagem.service';
import { environment } from '../../../environments/enviromenmts.prod';
import { AlertasService } from '../../service/alertas.service';

@Component({
  selector: 'app-postagemDelete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css'],
})
export class PostagemDeleteComponent implements OnInit {
  postagem!: Postagem;
  idPost: number = 0;

  idUsuario = environment.id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.alertas.showAlertInfo('Sua sessão expirou, faça o login novamente');
      this.router.navigate(['/logar']);
    }

    this.idPost = this.route.snapshot.params['id'];
    this.findByIdPostagem(this.idPost);
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    });
  }

  apagar() {
    this.postagemService.deletePostagem(this.idPost).subscribe(() => {
      this.alertas.showAlertSuccess('Postagem apagada com sucesso!');
      this.router.navigate(['/inicio']);
    });
  }
}
