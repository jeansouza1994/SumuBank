import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { PageHeader } from '../../shared/components/page-header/page-header';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { DepositoService } from '../../shared/services/deposito.service';
import { DepositoRequest } from '../../shared/models/deposito-request';
import { CurrencyInput } from '../../shared/components/currency-input/currency-input';

@Component({
  selector: 'app-deposito',
  imports: [PageHeader, ReactiveFormsModule, CurrencyInput],
  templateUrl: './deposito.html',
  styleUrl: './deposito.css',
})
export class Deposito {

  private depositoService = inject(DepositoService);

  private location = inject(Location);

  private fb = inject(FormBuilder);

  depositoForm = this.fb.group({

    valor: [
      null,
      [
        Validators.required,
        Validators.min(0.01)
      ]
    ],

    descricao: [
      ''
    ]

  });

  onSubmit() {

    if (this.depositoForm.invalid) {
      return;
    }

    const deposito: DepositoRequest = {

      valor: this.depositoForm.controls.valor.value!,

      descricao: this.depositoForm.controls.descricao.value!

    };

    this.depositoService
      .depositar(deposito)
      .subscribe(() => {

        console.log('Depósito realizado com sucesso!');

      });

  }

  voltar() {

    this.location.back();

  }
}
