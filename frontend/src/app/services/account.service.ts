import { inject, Injectable, signal } from '@angular/core';
import { ContaService } from './conta.service';
import { PerfilResponse } from '../models/response/perfil-response';
import { PerfilRequest } from '../models/request/perfil-request';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly contaService = inject(ContaService);

  private readonly _saldo = signal(0);

  readonly saldo = this._saldo.asReadonly();


  private readonly _perfil = signal<PerfilResponse | null>(null);

  readonly perfil = this._perfil.asReadonly();


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

  setPerfil(perfil: PerfilResponse): void {
    this._perfil.set(perfil);
  }

  carregarPerfil(contaId: number): void {
    this.contaService
        .buscarPerfil(contaId)
        .subscribe({
          next: (response) => {
            this.setPerfil(response);
          }
        });
  }

  atualizarPerfil(contaId: number, request: PerfilRequest): void {
    this.contaService
        .atualizarPerfil(contaId, request)
        .subscribe({

          next: (response) => {

            this.setPerfil(response);

          }

        });
  }

}