package com.jeansouza.sumubank.business.service;

import com.jeansouza.sumubank.business.entity.Conta;
import com.jeansouza.sumubank.business.entity.Movimentacao;
import com.jeansouza.sumubank.business.entity.TipoMovimentacao;
import com.jeansouza.sumubank.infrastructure.repository.MovimentacaoRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
public class MovimentacaoService {

    private final MovimentacaoRepository movimentacaoRepository;

    public MovimentacaoService(MovimentacaoRepository movimentacaoRepository) {
        this.movimentacaoRepository = movimentacaoRepository;
    }

    public void registrarMovimentacao(Conta conta, TipoMovimentacao tipo, BigDecimal valor, String descricao, LocalDateTime dataHora) {

        Movimentacao movimentacao = Movimentacao.builder()
                .conta(conta)
                .tipo(tipo)
                .valor(valor)
                .descricao(descricao)
                .dataHora(dataHora)
                .build();

        movimentacaoRepository.save(movimentacao);
    }
}
