import { ActivatedRoute, Router } from "@angular/router"
import { Postagem } from "../../model/Postagem"
import { Tema } from "../../model/Tema"
import { environment } from "../../../environments/enviromenmts.prod" 
import { Component, OnInit } from "@angular/core"
import { PostagemService } from "../../service/postagem.service"
import { TemaService } from "../../service/tema.service"
import { AlertasService } from "../../service/alertas.service"
import { AuthService } from "../../service/auth.service"

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem()

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  tituloPostagem: string
  textoPostagem: string
  idUsuario = environment.id

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private alertas: AlertasService,
    public auth: AuthService
  ) { } 

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      this.alertas.showAlertInfo('Sua sessão expirou, faça o login novamente')
      this.router.navigate(['/logar'])
  }

  let id = this.route.snapshot.params['id']
  this.findByIdPostagem(id)
  this.findAllTemas()
}

findByIdPostagem(id: number){
  this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
    this.postagem = resp
  })
}

findByIdTema(){
  this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
    this.tema = resp
  })
}

findAllTemas(){
  this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
    this.listaTemas = resp
  })
}

atualizar(){
  if (this.tituloPostagem == "") {
    this.alertas.showAlertDanger('Digite um título!')
  }
  else if (this.textoPostagem == "") {
    this.alertas.showAlertDanger('Digite o texto!')
  } else if(this.idTema == null) {
    this.alertas.showAlertDanger('Escolha um tema!')
  }
  else

  this.tema.id = this.idTema
  this.postagem.tema = this.tema

  this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) =>{
    this.postagem = resp
    this.alertas.showAlertSuccess('Postagem atualizada com sucesso!')
    this.router.navigate(['/inicio'])
  })
}

}
