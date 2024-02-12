import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../../model/Tema';
import { TemaService } from '../../service/tema.service';
import { AlertasService } from '../../service/alertas.service';
import { environment } from '../../../environments/enviromenmts.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css'],
})
export class TemaEditComponent implements OnInit {
  tema!: Tema;
  idUsuario = environment.id;

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) {}

  ngOnInit(): void {
    if (environment.token == '') {
      this.alertas.showAlertInfo('Sua sessão expirou, faça o login novamente');
      this.router.navigate(['/logar']);
    }

    if (environment.tipo != 'Admin') {
      this.alertas.showAlertDanger(
        'Você não tem permissão para acessar esta página'
      );
      this.router.navigate(['/inicio']);
    }

    let id = this.route.snapshot.params['id'];
    this.findByIdTema(id);
  }

  findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }
  atualizar() {
    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp;
      this.alertas.showAlertSuccess('Tema Atualizado com sucesso!');
      this.router.navigate(['/tema']);
    });
  }
}
