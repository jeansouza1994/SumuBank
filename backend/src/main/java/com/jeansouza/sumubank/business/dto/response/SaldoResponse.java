package com.jeansouza.sumubank.business.dto.response;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SaldoResponse {

    private Long contaId;

    private BigDecimal saldoAtual;

}
