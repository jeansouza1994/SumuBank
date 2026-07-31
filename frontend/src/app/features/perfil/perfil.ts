import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { PageHeader } from '../../shared/components/page-header/page-header';
import { AccountService } from '../../services/account.service';
import { PerfilRequest } from '../../models/request/perfil-request';

@Component({
  selector: 'app-perfil',
  imports: [
    PageHeader,
    CurrencyPipe,
    ReactiveFormsModule
  ],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

  private accountService = inject(AccountService);

  account = this.accountService;

  readonly editando = signal(false);

  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({

    nome: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],

    email: ['', [
      Validators.required,
      Validators.email
    ]]

  });

  editarPerfil(): void {

    const perfil = this.account.perfil();

    if (!perfil) {
      return;
    }

    this.form.patchValue({

      nome: perfil.nome,
      email: perfil.email

    });

    this.editando.set(true);

  }

  cancelarEdicao(): void {

    this.editando.set(false);

  }

  salvarPerfil(): void {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const perfil = this.account.perfil();

    if (!perfil) {
      return;
    }

    const request: PerfilRequest = {
      nome: this.form.value.nome!,
      email: this.form.value.email!
    };

    this.account.atualizarPerfil(perfil.contaId, request);

    this.editando.set(false);

  }

  ngOnInit(): void {
    this.accountService.carregarSaldo(1);
    this.accountService.carregarPerfil(1);
  }

}