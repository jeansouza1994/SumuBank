package com.jeansouza.sumubank.controller;

import com.jeansouza.sumubank.business.dto.request.DepositoRequest;
import com.jeansouza.sumubank.business.dto.request.TransferenciaRequest;
import com.jeansouza.sumubank.business.dto.response.DepositoResponse;
import com.jeansouza.sumubank.business.dto.response.ExtratoResponse;
import com.jeansouza.sumubank.business.dto.response.TransferenciaResponse;
import com.jeansouza.sumubank.business.service.ContaService;
import com.jeansouza.sumubank.business.service.TransferenciaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contas")
public class ContaController {

    private ContaService contaService;
    private TransferenciaService transferenciaService;

    public ContaController(ContaService contaService, TransferenciaService transferenciaService) {
        this.contaService = contaService;
        this.transferenciaService = transferenciaService;
    }

    @PostMapping("/{id}/deposito")
    public DepositoResponse depositar(@PathVariable Long id, @RequestBody DepositoRequest depositoRequest){

        return contaService.depositar(id, depositoRequest);

    }

    @PostMapping("/{id}/transferencia")
    public TransferenciaResponse transferir(@PathVariable Long id, @RequestBody TransferenciaRequest request) {

        return transferenciaService.transferir(id, request);

    }

    @GetMapping("/{id}/extrato")
    public ExtratoResponse buscarExtrato(@PathVariable Long id) {

        return contaService.buscarExtrato(id);

    }
}
