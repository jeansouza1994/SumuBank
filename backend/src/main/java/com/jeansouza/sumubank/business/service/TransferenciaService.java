package com.jeansouza.sumubank.business.service;

import com.jeansouza.sumubank.business.dto.request.TransferenciaRequest;
import com.jeansouza.sumubank.business.dto.response.TransferenciaResponse;
import com.jeansouza.sumubank.business.entity.Conta;
import com.jeansouza.sumubank.business.entity.TipoMovimentacao;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
public class TransferenciaService {

    private final ContaService contaService;
    private final MovimentacaoService movimentacaoService;

    LocalDateTime dataHora = LocalDateTime.now();

    public TransferenciaService(ContaService contaService, MovimentacaoService movimentacaoService) {
        this.contaService = contaService;
        this.movimentacaoService = movimentacaoService;
    }

    @Transactional
    public TransferenciaResponse transferir(Long idConta, TransferenciaRequest request) {

        Conta contaOrigem = contaService.buscarContaPorId(idConta);
        Conta contaDestino = contaService.buscarContaDestino(request.getDestinatario());

        if (contaOrigem.getId().equals(contaDestino.getId())) {
            throw new RuntimeException("A conta de origem e destino não podem ser iguais.");
        }

        if (request.getValor() == null ||
                request.getValor().compareTo(BigDecimal.ZERO) <= 0) {

            throw new RuntimeException("O valor da transferência deve ser maior que zero.");
        }

        contaService.validarSaldo(contaOrigem,  request.getValor());

        contaService.debitar(contaOrigem, request.getValor());
        contaService.creditar(contaDestino, request.getValor());

        contaService.salvar(contaOrigem);
        contaService.salvar(contaDestino);

        movimentacaoService.registrarMovimentacao(
                contaOrigem,
                TipoMovimentacao.TRANSFERENCIA_ENVIADA,
                request.getValor(),
                request.getDescricao(),
                dataHora
        );

        movimentacaoService.registrarMovimentacao(
                contaDestino,
                TipoMovimentacao.TRANSFERENCIA_RECEBIDA,
                request.getValor(),
                request.getDescricao(),
                dataHora
        );

        return TransferenciaResponse.builder()
                .contaOrigemId(contaOrigem.getId())
                .contaDestinoId(contaDestino.getId())
                .valorTransferido(request.getValor())
                .saldoAtual(contaOrigem.getSaldo())
                .dataHora(dataHora)
                .build();
    }
}
