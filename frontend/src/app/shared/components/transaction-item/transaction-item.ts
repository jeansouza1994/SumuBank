import { Component, input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

import { Movimentacao } from '../../models/movimentacao.model';

@Component({
  selector: 'app-transaction-item',
  imports: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './transaction-item.html',
  styleUrl: './transaction-item.css'
})
export class TransactionItem {

  movimentacao = input.required<Movimentacao>();

}