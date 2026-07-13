import { Component, inject, signal } from '@angular/core';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransferenciaService } from '../../shared/services/transferencia.service';
import { TransferenciaRequest } from '../../shared/models/transferencia-request';
import { Location } from '@angular/common';
import { AccountService } from '../../shared/services/account.service';
import { Router } from '@angular/router';
import { CurrencyInput } from '../../shared/components/currency-input/currency-input';

@Component({
  selector: 'app-transferencia',
  imports: [PageHeader, ReactiveFormsModule, CurrencyInput],
  templateUrl: './transferencia.html',
  styleUrl: './transferencia.css',
})
export class Transferencia {

  private transferenciaService = inject(TransferenciaService);

  private location = inject(Location);

  private fb = inject(FormBuilder);

  private router = inject(Router);

  private accountService = inject(AccountService);

  transferenciaForm = this.fb.group({

    destinatario: [
      '',
        [
          Validators.required
        ]
    ],

    valor: [
      null,
        [
          Validators.required,
          Validators.min(0.01)
        ]
    ],

    descricao: ['']

  });

  mensagemErro = signal('');

  onSubmit(): void {
    
    if (this.transferenciaForm.invalid) {
      return;
    }

    this.mensagemErro.set('');

    const valor = this.transferenciaForm.controls.valor.value!;

    if (valor > this.accountService.saldo()) {

      this.mensagemErro.set('Saldo insuficiente para realizar esta transferência.');

      return;

    }

    const transferencia: TransferenciaRequest = {

      destinatario: this.transferenciaForm.controls.destinatario.value!,

      valor,

      descricao: this.transferenciaForm.controls.descricao.value!

    };

    this.transferenciaService
      .transferir(transferencia)
      .subscribe(() => {

        this.router.navigate(
          ['/sucesso-transferencia'],
          {
            state: {
              transferencia
            }
          }
        );

      });

  }

  voltar() {

    this.location.back();

  }
}
