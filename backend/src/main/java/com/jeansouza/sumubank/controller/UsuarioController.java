package com.jeansouza.sumubank.controller;

import com.jeansouza.sumubank.business.dto.request.UsuarioRequest;
import com.jeansouza.sumubank.business.dto.response.UsuarioResponse;
import com.jeansouza.sumubank.business.service.ContaService;
import com.jeansouza.sumubank.business.service.UsuarioService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

    private final ContaService contaService;

    public UsuarioController(ContaService contaService) {
        this.contaService = contaService;
    }

    @PostMapping
    public UsuarioResponse cadastrar(@RequestBody UsuarioRequest request) {

        return contaService.cadastrar(request);
    }
}
