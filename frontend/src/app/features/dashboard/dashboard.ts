import { Component, signal, inject, OnInit } from '@angular/core';
import { BalanceCard } from '../../shared/components/balance-card/balance-card';
import { DashboardService } from '../../services/dashboard';
import { MovimentacaoResponse } from '../../models/response/movimentacao-response';
import { RouterLink } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { TransactionItem } from '../../shared/components/transaction-item/transaction-item';

@Component({
  selector: 'app-dashboard',
  imports: [BalanceCard, RouterLink, TransactionItem],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  private dashboardService = inject(DashboardService);

  private accountService = inject(AccountService);

  account = this.accountService;
  
  movimentacoes = signal<MovimentacaoResponse[]>(this.dashboardService.getMovimentacoes());
  
  ngOnInit(): void {
    this.accountService.carregarSaldo(1);
  }

}