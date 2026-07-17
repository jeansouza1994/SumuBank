package com.jeansouza.sumubank.business.service;

import com.jeansouza.sumubank.business.dto.request.UsuarioRequest;
import com.jeansouza.sumubank.business.dto.response.UsuarioResponse;
import com.jeansouza.sumubank.business.entity.Conta;
import com.jeansouza.sumubank.business.entity.Usuario;
import com.jeansouza.sumubank.business.mapper.UsuarioMapper;
import com.jeansouza.sumubank.infrastructure.repository.ContaRepository;
import com.jeansouza.sumubank.infrastructure.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    private final ContaRepository contaRepository;

    private final UsuarioMapper usuarioMapper;

    private final ContaService contaService;

    public UsuarioService(
            UsuarioRepository usuarioRepository,
            ContaRepository contaRepository, UsuarioMapper usuarioMapper, ContaService contaService) {

        this.usuarioRepository = usuarioRepository;
        this.contaRepository = contaRepository;
        this.usuarioMapper = usuarioMapper;
        this.contaService = contaService;
    }

    public UsuarioResponse cadastrar(UsuarioRequest request) {

        Usuario usuario = usuarioMapper.toEntity(request);

        usuario = usuarioRepository.save(usuario);

        Conta conta = Conta.builder()
                .usuario(usuario)
                .agencia(contaService.gerarAgencia())
                .numero(contaService.gerarNumeroConta(usuario.getId()))
                .saldo(BigDecimal.ZERO)
                .build();

        conta = contaRepository.save(conta);

        usuario.setConta(conta);

        return usuarioMapper.toResponse(usuario);
    }
}
