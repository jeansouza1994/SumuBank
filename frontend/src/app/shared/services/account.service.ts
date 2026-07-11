import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  saldo = signal(2350);

  nome = signal('Jean Souza');

  agencia = signal('0001');

  conta = signal('100001-9');

  cpf = signal('123.456.789-00');

  email = signal('jean.souza@example.com');

}