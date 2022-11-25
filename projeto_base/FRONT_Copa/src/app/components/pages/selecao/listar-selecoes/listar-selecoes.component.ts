import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Selecao } from 'src/app/models/selecao.model';

@Component({
  selector: 'app-listar-selecoes',
  templateUrl: './listar-selecoes.component.html',
  styleUrls: ['./listar-selecoes.component.css']
})
export class ListarSelecoesComponent implements OnInit {

  constructor(private http: HttpClient) { }
selecao!: Selecao[];
  ngOnInit(): void {
    this.http.get<Selecao[]>("https://localhost:5001/api/selecao/listar")
    .subscribe({
      next: (selecao) => {
        this.selecao = selecao;
      }
    });
  }


}
