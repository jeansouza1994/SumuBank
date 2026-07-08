import { Component, signal, inject } from '@angular/core';
import { BalanceCard } from '../../shared/components/balance-card/balance-card';
import { DashboardService } from '../../shared/services/dashboard';
import { Movimentacao } from '../../shared/models/movimentacao.model';
import { RouterLink } from '@angular/router';
import { AccountService } from '../../shared/services/account.service';
import { TransactionItem } from '../../shared/components/transaction-item/transaction-item';

@Component({
  selector: 'app-dashboard',
  imports: [BalanceCard, RouterLink, TransactionItem],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private dashboardService = inject(DashboardService);

  private accountService = inject(AccountService);

  account = this.accountService;
  
  movimentacoes = signal<Movimentacao[]>(this.dashboardService.getMovimentacoes());
  
  }
