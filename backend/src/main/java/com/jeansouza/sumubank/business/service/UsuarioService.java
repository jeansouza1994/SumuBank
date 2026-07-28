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

    private final UsuarioMapper usuarioMapper;

    public UsuarioService( UsuarioRepository usuarioRepository, UsuarioMapper usuarioMapper) {

        this.usuarioRepository = usuarioRepository;
        this.usuarioMapper = usuarioMapper;
    }

    public Usuario cadastrarUsuario(UsuarioRequest request) {

        Usuario usuario = usuarioMapper.toEntity(request);

        return usuarioRepository.save(usuario);

    }

    public void salvar(Usuario usuario) {

        usuarioRepository.save(usuario);

    }
}
