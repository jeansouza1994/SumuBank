package com.jeansouza.sumubank.business.dto.request;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DepositoRequest {

    private BigDecimal valor;

    private String descricao;
}
