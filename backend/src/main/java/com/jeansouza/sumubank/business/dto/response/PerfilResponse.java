package com.jeansouza.sumubank.business.dto.response;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PerfilResponse {

    private Long contaId;

    private String nome;

    private String email;

    private String cpf;

    private BigDecimal saldoAtual;

}
