import { Component, inject, signal } from '@angular/core';

import { PageHeader } from '../../shared/components/page-header/page-header';
import { TransactionItem } from '../../shared/components/transaction-item/transaction-item';

import { DashboardService } from '../../services/dashboard';

import { MovimentacaoResponse } from '../../models/response/movimentacao-response';

@Component({
  selector: 'app-extrato',
  imports: [
    PageHeader,
    TransactionItem
  ],
  templateUrl: './extrato.html',
  styleUrl: './extrato.css'
})
export class Extrato {

  private dashboardService = inject(DashboardService);

  movimentacoes = signal<MovimentacaoResponse[]>(
    this.dashboardService.getMovimentacoes()
  );

}