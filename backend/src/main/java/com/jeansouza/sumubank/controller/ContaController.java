package com.jeansouza.sumubank.controller;

import com.jeansouza.sumubank.business.dto.request.DepositoRequest;
import com.jeansouza.sumubank.business.dto.response.DepositoResponse;
import com.jeansouza.sumubank.business.service.ContaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contas")
public class ContaController {

    private ContaService contaService;

    public ContaController(ContaService contaService) { this.contaService = contaService; }

    @PostMapping("/{id}/deposito")
    public DepositoResponse depositar(@PathVariable long id, @RequestBody DepositoRequest depositoRequest){

        return contaService.depositar(id, depositoRequest);

    }
}
