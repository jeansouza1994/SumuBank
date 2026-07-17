package com.jeansouza.sumubank.business.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsuarioRequest {

    private String nome;

    private String cpf;

    private String email;

    private String senha;

}
