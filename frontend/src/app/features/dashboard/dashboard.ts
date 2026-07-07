import { Component, signal, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { BalanceCard } from '../../shared/components/balance-card/balance-card';
import { DashboardService } from '../../shared/services/dashboard';
import { Movimentacao } from '../../shared/models/movimentacao.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CurrencyPipe, BalanceCard, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  saldoConta = signal(2350);

  private dashboardService = inject(DashboardService);
  
  movimentacoes = signal<Movimentacao[]>(this.dashboardService.getMovimentacoes());
  
  }
