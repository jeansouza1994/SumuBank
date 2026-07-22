package com.jeansouza.sumubank.business.dto.response;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransferenciaResponse {

    private Long contaOrigemId;

    private Long contaDestinoId;

    private BigDecimal valorTransferido;

    private BigDecimal saldoAtual;

    private LocalDateTime dataHora;

}
