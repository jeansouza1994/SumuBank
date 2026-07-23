package com.jeansouza.sumubank.business.service;

import com.jeansouza.sumubank.business.dto.request.DepositoRequest;
import com.jeansouza.sumubank.business.dto.response.DepositoResponse;
import com.jeansouza.sumubank.business.dto.response.ExtratoResponse;
import com.jeansouza.sumubank.business.dto.response.MovimentacaoResponse;
import com.jeansouza.sumubank.business.entity.Conta;
import com.jeansouza.sumubank.business.entity.Movimentacao;
import com.jeansouza.sumubank.business.entity.TipoMovimentacao;
import com.jeansouza.sumubank.infrastructure.repository.ContaRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

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

        creditar(conta, request.getValor());

        contaRepository.save(conta);

        movimentacaoService.registrarMovimentacao(conta, TipoMovimentacao.DEPOSITO, request.getValor(), request.getDescricao(), dataHora);

        return DepositoResponse.builder()
                .contaId(conta.getId())
                .valorDepositado(request.getValor())
                .saldoAtual(conta.getSaldo())
                .dataHora(dataHora)
                .build();
    }

    public Conta buscarContaDestino(String destinatario) {

        if(isCpf(destinatario)) {
            String cpf = destinatario.replaceAll("\\D", "");
            return contaRepository.findByUsuarioCpf(cpf).orElseThrow();
        }

        return contaRepository.findByUsuarioEmail(destinatario).orElseThrow();

    }

    private boolean isCpf(String destinatario) {
        String cpf = destinatario.replaceAll("\\D", "");
        return cpf.length() == 11;
    }

    public Conta buscarContaPorId(Long id) {

        return contaRepository.findByUsuarioId(id).orElseThrow();
    }

    public void validarSaldo(Conta conta, BigDecimal valor) {

        if (conta.getSaldo().compareTo(valor) < 0) {
            throw new RuntimeException("Saldo insuficiente.");
        }

    }

    public void creditar(Conta conta, BigDecimal valor) {

        conta.setSaldo(conta.getSaldo().add(valor));
    }

    public void debitar(Conta conta, BigDecimal valor) {

        validarSaldo(conta, valor);

        conta.setSaldo(conta.getSaldo().subtract(valor));

    }

    public void salvar(Conta conta) {
        contaRepository.save(conta);
    }

    public ExtratoResponse buscarExtrato(Long contaId) {

        Conta conta = buscarContaPorId(contaId);

        List<Movimentacao> movimentacoes = movimentacaoService.buscarMovimentacoesDaConta(contaId);

        List<MovimentacaoResponse> movimentacoesResponse =
                movimentacoes.stream()
                        .map(movimentacao ->

                                MovimentacaoResponse.builder()
                                        .tipoMovimentacao(movimentacao.getTipo())
                                        .valor(movimentacao.getValor())
                                        .descricao(movimentacao.getDescricao())
                                        .dataHora(movimentacao.getDataHora())
                                        .build())
                        .toList();

        return ExtratoResponse.builder()
                .contaId(conta.getId())
                .saldoAtual(conta.getSaldo())
                .movimentacoes(movimentacoesResponse)
                .build();
    }
}
