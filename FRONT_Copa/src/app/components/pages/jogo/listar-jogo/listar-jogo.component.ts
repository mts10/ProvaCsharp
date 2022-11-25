import { Jogo } from './../../../../models/jogo.model';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-listar-jogo",
  templateUrl: "./listar-jogo.component.html",
  styleUrls: ["./listar-jogo.component.css"],
})
export class ListarJogoComponent implements OnInit {
  jogos!: Jogo[];

  constructor(private http: HttpClient, 
    private router: Router,
     private _snackBar: MatSnackBar,) {}

  ngOnInit(): void {
    this.http.get<Jogo[]>("https://localhost:5001/api/jogo/listar").subscribe({
      next: (jogos) => {
        this.jogos = jogos;
      }
    });
  }
  palpites(jogo: Jogo): void {
    this.router.navigate([`pages/jogo/palpitar/${jogo.id}`]);
  }
}
