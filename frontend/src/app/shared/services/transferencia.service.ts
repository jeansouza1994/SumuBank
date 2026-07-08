import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TransferenciaRequest } from '../models/transferencia-request';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  transferir(
    transferencia: TransferenciaRequest
  ): Observable<void> {

    console.log('Enviando transferência...');

    console.log(transferencia);

    return of(void 0);

  }

}