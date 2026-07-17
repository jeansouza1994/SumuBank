package com.jeansouza.sumubank.business.dto.response;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsuarioResponse {

    private Long id;

    private String nome;

    private String cpf;

    private String email;

    private String agencia;

    private String numeroConta;

    private BigDecimal saldo;

}
