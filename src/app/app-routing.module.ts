import { RouterModule, Routes } from "@angular/router";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { ContatoComponent } from "./contato/contato.component";
import { PostagemDeleteComponent } from "./delete/postagem-delete/postagem-delete.component";
import { TemaDeleteComponent } from "./delete/tema-delete/tema-delete.component";
import { PostagemEditComponent } from "./edit/postagem-edit/postagem-edit.component";
import { TemaEditComponent } from "./edit/tema-edit/tema-edit.component";
import { UsuarioEditComponent } from "./edit/usuario-edit/usuario-edit.component";
import { InicioComponent } from "./inicio/inicio.component";
import { LogarComponent } from "./logar/logar.component";
import { MinhasPostagensComponent } from "./minhas-postagens/minhas-postagens.component";
import { SobreMimComponent } from "./sobre-mim/sobre-mim.component";
import { TemaComponent } from "./tema/tema.componente";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {path:'',redirectTo:'sobre-adatech',pathMatch:'full'}, 
  {path:'logar', component: LogarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'contato', component: ContatoComponent},
  {path:'inicio', component: InicioComponent},
  {path:'tema', component: TemaComponent},
  {path:'tema-edit/:id', component: TemaEditComponent},
  {path:'tema-delete/:id', component: TemaDeleteComponent},
  {path:'usuario-edit/:id',component: UsuarioEditComponent},
  {path:'postagem-edit/:id', component: PostagemEditComponent},
  {path:'postagem-delete/:id', component: PostagemDeleteComponent},
  {path:'minhas-postagens/:id', component: MinhasPostagensComponent},
  {path: 'sobre-adatech', component: SobreMimComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
