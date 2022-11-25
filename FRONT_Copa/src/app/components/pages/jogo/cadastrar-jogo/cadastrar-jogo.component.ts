import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Jogo } from "src/app/models/jogo.model";
import { Selecao } from "src/app/models/selecao.model";
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: "app-cadastrar-jogo",
  templateUrl: "./cadastrar-jogo.component.html",
  styleUrls: ["./cadastrar-jogo.component.css"],
})
export class CadastrarJogoComponent implements OnInit {
  selecoes!: Selecao[];
  TimeAId!: number;
  TimeBId!: number;
  
  constructor(private http: HttpClient, 
    private router: Router,
     private route: ActivatedRoute,
     private _snackBar: MatSnackBar,
     ) {}

  ngOnInit(): void {
    this.http.get<Selecao[]>("https://localhost:5001/api/jogo/listar")
    .subscribe({
      next: (selecoes) => {
        this.selecoes = selecoes;
      },
    });
  }
  cadastrar(): void {
    let jogo: Jogo = {
      selecaoA: this.selecoes.find(selecoes => selecoes.id == this.TimeAId),
      selecaoB: this.selecoes.find(selecoes => selecoes.id == this.TimeBId),
    }
    this.http.post<Jogo>("https://localhost:5001/api/jogo/cadastrar", jogo)
    .subscribe({
      next: (jogo) => {
        this._snackBar.open("Jogo Cadastrado!", "Ok", {
          horizontalPosition: "right",
            verticalPosition: "top",
        });
        this.router.navigate(["pages/jogo/listar"]);
      },
      error: (error) => {
        console.error("Algum erro aconteceu!");
      },
    });
  }
}
