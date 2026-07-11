import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { PageHeader } from '../../shared/components/page-header/page-header';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-perfil',
  imports: [
    PageHeader,
    CurrencyPipe
  ],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

  private accountService = inject(AccountService);

  account = this.accountService;

  editarPerfil(): void {

    alert(
          `🚧 Funcionalidade em desenvolvimento

          A edição de perfil será implementada
          quando o backend estiver concluído.`
              );

  }

}