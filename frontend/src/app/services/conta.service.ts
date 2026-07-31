import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SaldoResponse } from '../models/response/saldo-response';
import { PerfilResponse } from '../models/response/perfil-response';
import { PerfilRequest } from '../models/request/perfil-request';

@Injectable({
  providedIn: 'root',
})
export class ContaService {

  private readonly API = `${environment.apiUrl}/contas`;

  constructor(private http: HttpClient) {}


  consultarSaldo(contaId: number): Observable<SaldoResponse> {

    return this.http.get<SaldoResponse>(`${this.API}/${contaId}/saldo`);
    
  }

  buscarPerfil(contaId: number) {

    return this.http.get<PerfilResponse>(`${this.API}/${contaId}/perfil`);
    
  }

  atualizarPerfil(contaId: number, request: PerfilRequest) {

    return this.http.put<PerfilResponse>(`${this.API}/${contaId}/perfil`, request);
  }
}
