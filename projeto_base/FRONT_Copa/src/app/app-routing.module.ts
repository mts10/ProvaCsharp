import { ListarJogoComponent } from "./components/pages/jogo/listar-jogo/listar-jogo.component";
import { CadastrarJogoComponent } from "./components/pages/jogo/cadastrar-jogo/cadastrar-jogo.component";
import { CadastrarSelecaoComponent } from "./components/pages/selecao/cadastrar-selecao/cadastrar-selecao.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PalpitarJogoComponent } from "./components/pages/jogo/palpitar-jogo/palpitar-jogo.component";
import { ListarSelecoesComponent } from "./components/pages/selecao/listar-selecoes/listar-selecoes.component";

const routes: Routes = [
  {
    path: "pages/selecao/cadastrar",
    component: CadastrarSelecaoComponent,
  },
  {
    path: "pages/selecao/listar",
    component: ListarSelecoesComponent,
  },
  {
    path: "pages/jogo/cadastrar",
    component: CadastrarJogoComponent,
  },
  {
    path: "pages/jogo/palpitar/:id",
    component: PalpitarJogoComponent,
  },
  {
    path: "pages/jogo/listar",
    component: ListarJogoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
