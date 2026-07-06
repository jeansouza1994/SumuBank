import { Component, signal, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-balance-card',
  imports: [CurrencyPipe],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.css',
})
export class BalanceCard {
  mostrarSaldo = signal(true);

  saldo = input.required<number>();

  toggleSaldo() {

  this.mostrarSaldo.update(valor => !valor);
  }
}
