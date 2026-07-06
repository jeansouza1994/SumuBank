export interface Movimentacao {

  id: number;

  descricao: string;

  valor: number;

  tipo: 'entrada' | 'saida';

}