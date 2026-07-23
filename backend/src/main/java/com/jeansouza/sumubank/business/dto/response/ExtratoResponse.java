package com.jeansouza.sumubank.business.dto.response;

import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ExtratoResponse {

    private Long contaId;
    private BigDecimal saldoAtual;
    private List<MovimentacaoResponse> movimentacoes;

}
