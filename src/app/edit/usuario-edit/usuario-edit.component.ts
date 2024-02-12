import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../model/Usuario';

import { AlertasService } from '../../service/alertas.service';
import { AuthService } from '../../service/auth.service';
import { environment } from '../../../environments/enviromenmts.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number
  confirmarSenha: string
  tipoUsuario: string
  fotoUsuario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.alertas.showAlertInfo('Sua sessão expirou, faça o login novamente')
      this.router.navigate(['/logar'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuarioLogar(this.idUsuario)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value

  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  validarFoto(event: any) {
    this.fotoUsuario = event.target.value
  }

  atualizar() {

    if (this.usuario.senha != this.confirmarSenha) {
      this.alertas.showAlertDanger('As senhas estão incorretas!')
    } else if (this.tipoUsuario != "profissional" && this.tipoUsuario != "org") {
      this.alertas.showAlertDanger('Selecione o tipo de perfil!')
    }

    else {

      if (this.fotoUsuario == null) {
        this.fotoUsuario = "https://i.imgur.com/wBsUWjq.png"
      }

      else {
        this.usuario.tipo = this.tipoUsuario
        this.usuario.foto = this.fotoUsuario
        this.authService.atualizar(this.usuario).subscribe((resp: Usuario) => {
          this.usuario = resp
          this.router.navigate(['/logar'])

          this.alertas.showAlertSuccess("Usuario atualizado com sucesso, faça o login novamente.")
          environment.token = ''
          environment.nome = ''
          environment.foto = ''
          environment.id = 0
          environment.tipo = ''
          this.router.navigate(['/logar'])
        },
        
        erro => {
          if (erro.status == 500 || erro.status == 401 || erro.status == 400) {
            this.alertas.showAlertDanger('Preencha os campos obrigatórios corretamente!')
          }
        })
      }

    }

  }
  findByIdUsuarioLogar(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}
