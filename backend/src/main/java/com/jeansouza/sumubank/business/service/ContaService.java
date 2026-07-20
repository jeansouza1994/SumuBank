package com.jeansouza.sumubank.business.service;

import com.jeansouza.sumubank.business.dto.request.DepositoRequest;
import com.jeansouza.sumubank.business.dto.response.DepositoResponse;
import com.jeansouza.sumubank.business.entity.Conta;
import com.jeansouza.sumubank.business.entity.TipoMovimentacao;
import com.jeansouza.sumubank.infrastructure.repository.ContaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ContaService {

    private final ContaRepository contaRepository;
    private final MovimentacaoService movimentacaoService;

    public ContaService(ContaRepository contaRepository, MovimentacaoService movimentacaoService) {
        this.contaRepository = contaRepository;
        this.movimentacaoService = movimentacaoService;
    }

    public String gerarAgencia() {

        return "0001";

    }

    public String gerarNumeroConta(Long idUsuario) {
        return String.format("%08d", idUsuario);
    }

    public DepositoResponse depositar(Long contaId, DepositoRequest request) {

        LocalDateTime dataHora = LocalDateTime.now();

        Conta conta = contaRepository.findById(contaId).orElseThrow(() -> new RuntimeException("Conta não encontrada."));

        conta.setSaldo(conta.getSaldo().add(request.getValor()));

        contaRepository.save(conta);

        movimentacaoService.registrarMovimentacao(conta, TipoMovimentacao.DEPOSITO, request.getValor(), request.getDescricao(), dataHora);

        return DepositoResponse.builder()
                .contaId(conta.getId())
                .valorDepositado(request.getValor())
                .saldoAtual(conta.getSaldo())
                .dataHora(dataHora)
                .build();
    }
}
