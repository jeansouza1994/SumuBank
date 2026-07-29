import { TipoMovimentacao } from '../tipo-movimentacao';

export interface MovimentacaoResponse  {

  id: number;

  descricao: string;

  valor: number;

  tipo: TipoMovimentacao;

  data: Date;

}