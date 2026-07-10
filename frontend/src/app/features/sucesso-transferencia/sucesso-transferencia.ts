import { Component } from '@angular/core';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-sucesso-transferencia',
  imports: [ PageHeader, RouterLink, CurrencyPipe ],
  templateUrl: './sucesso-transferencia.html',
  styleUrl: './sucesso-transferencia.css',
})
export class SucessoTransferencia {

  transferencia = history.state.transferencia ?? {

  destinatario: '',

  valor: 0,

  descricao: ''

};

  compartilharComprovante(): void {

  alert(`🚧 Funcionalidade em desenvolvimento

        Quando o backend estiver pronto, será possível:

        • Gerar um comprovante em PDF;
        • Compartilhar o comprovante;
        • Fazer o download do comprovante.

        Essa funcionalidade faz parte do roadmap do SumuBank.`
          );

}
}
