package com.jeansouza.sumubank.business.dto.response;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DepositoResponse {

    private Long contaId;

    private BigDecimal valorDepositado;

    private BigDecimal saldoAtual;

    private LocalDateTime dataHora;

}
