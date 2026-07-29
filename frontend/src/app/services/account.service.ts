import { inject, Injectable, signal } from '@angular/core';
import { ContaService } from './conta.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly contaService = inject(ContaService);

  private readonly _saldo = signal(0);

  readonly saldo = this._saldo.asReadonly();

  setSaldo(saldo: number): void {
    this._saldo.set(saldo);
  }

  carregarSaldo(contaId: number): void {
    this.contaService.consultarSaldo(contaId).subscribe({
      next: (response) => {
        console.log('Resposta da API:', response);
        this.setSaldo(response.saldoAtual);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

    nome = signal('Jean Souza');

    email = signal('jean.souza@example.com');

    cpf = signal('123.456.789-00');

    agencia = signal('0001');

    conta = signal('100001-9');

}