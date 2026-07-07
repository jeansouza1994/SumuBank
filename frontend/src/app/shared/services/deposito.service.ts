import { Injectable } from '@angular/core';
import { DepositoRequest } from '../models/deposito-request';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositoService {

    depositar(deposito: DepositoRequest): Observable<void> {

        console.log('Enviando depósito...');

        console.log(deposito);

        return of(void 0);

    }

}