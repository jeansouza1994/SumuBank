import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SaldoResponse } from '../models/response/saldo-response';

@Injectable({
  providedIn: 'root',
})
export class ContaService {

  private readonly API = `${environment.apiUrl}/contas`;

  constructor(private http: HttpClient) {}

  consultarSaldo(contaId: number): Observable<SaldoResponse> {

    return this.http.get<SaldoResponse>(`${this.API}/${contaId}/saldo`);
    
  }
}
