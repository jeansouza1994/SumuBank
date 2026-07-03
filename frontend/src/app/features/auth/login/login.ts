import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],

    senha: ['', [
      Validators.required,
      Validators.minLength(8)
    ]]
  });

  onSubmit() {
  console.log(this.loginForm.value);
  }
}