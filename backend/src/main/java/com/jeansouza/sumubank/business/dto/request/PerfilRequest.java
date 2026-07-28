package com.jeansouza.sumubank.business.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PerfilRequest {

    private String nome;

    private String email;

}
