package com.jeansouza.sumubank.business.dto.response;

import com.jeansouza.sumubank.business.entity.TipoMovimentacao;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MovimentacaoResponse {

    private TipoMovimentacao tipoMovimentacao;

    private BigDecimal valor;

    private String descricao;

    private LocalDateTime dataHora;

}
