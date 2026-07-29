import { Component, input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

import { MovimentacaoResponse } from '../../../models/response/movimentacao-response';

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

  movimentacao = input.required<MovimentacaoResponse>();

}