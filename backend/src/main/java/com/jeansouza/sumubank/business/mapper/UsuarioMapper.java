package com.jeansouza.sumubank.business.mapper;

import com.jeansouza.sumubank.business.dto.request.UsuarioRequest;
import com.jeansouza.sumubank.business.dto.response.UsuarioResponse;
import com.jeansouza.sumubank.business.entity.Usuario;
import org.springframework.stereotype.Component;

@Component
public class UsuarioMapper {

    public Usuario toEntity(UsuarioRequest request) {

        return Usuario.builder()
                .nome(request.getNome())
                .cpf(request.getCpf())
                .email(request.getEmail())
                .senha(request.getSenha())
                .build();

    }

    public UsuarioResponse toResponse(Usuario usuario) {

        return UsuarioResponse.builder()
                .id(usuario.getId())
                .nome(usuario.getNome())
                .cpf(usuario.getCpf())
                .email(usuario.getEmail())
                .agencia(usuario.getConta().getAgencia())
                .numeroConta(usuario.getConta().getNumero())
                .saldo(usuario.getConta().getSaldo())
                .build();

    }
}
