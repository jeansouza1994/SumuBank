package com.jeansouza.sumubank.business.service;

import org.springframework.stereotype.Service;

@Service
public class ContaService {

    public String gerarAgencia() {

        return "0001";

    }

    public String gerarNumeroConta(Long idUsuario) {
        return String.format("%08d", idUsuario);
    }
}
