import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { PageHeader } from '../../shared/components/page-header/page-header';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-deposito',
  imports: [PageHeader, ReactiveFormsModule],
  templateUrl: './deposito.html',
  styleUrl: './deposito.css',
})
export class Deposito {

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

    console.log(this.depositoForm.value);

  }

  voltar() {

    this.location.back();

  }
}
