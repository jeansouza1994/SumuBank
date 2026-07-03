import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordMatchValidator } from '../../../shared/validators/password-match.validator';

@Component({
  selector: 'app-cadastro',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  private fb = inject(FormBuilder);

  cadastroForm = this.fb.group({

    nome: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    senha: [
      '',
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ],

    confirmarSenha: [
      '',
      [
        Validators.required
      ]
    ]

  },

  {
    validators: passwordMatchValidator()
  }

  );

  onSubmit() {
    
  console.log(this.cadastroForm.valid);

  console.log(this.cadastroForm.errors);

  console.log(this.cadastroForm.value);
  }

}