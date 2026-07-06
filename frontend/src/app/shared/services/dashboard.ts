import { Injectable } from '@angular/core';
import { Movimentacao } from '../models/movimentacao.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  private movimentacoes: Movimentacao[] = [

    {
      id: 1,
      descricao: 'Depósito',
      valor: 500,
      tipo: 'entrada'
    },
    {
      id: 2,
      descricao: 'PIX enviado',
      valor: 120,
      tipo: 'saida'
    },
    {
      id: 3,
      descricao: 'Salário',
      valor: 3000,
      tipo: 'entrada'
    }

  ];

  getMovimentacoes(): Movimentacao[] {

    return this.movimentacoes;

  }
  
}
