import { Selecao } from "./selecao.model";

export interface Jogo {
  id?: number;
  selecaoA?: Selecao;
  selecaoAgol?: number;
  selecaoB?: Selecao;
  selecaoBgol?: number;
  criadoEm?: string;
}
