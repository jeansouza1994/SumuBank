import { TipoMovimentacao } from './tipo-movimentacao';

export interface Movimentacao {

  id: number;

  descricao: string;

  valor: number;

  tipo: TipoMovimentacao;

  data: Date;

}