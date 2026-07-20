package com.jeansouza.sumubank.infrastructure.repository;

import com.jeansouza.sumubank.business.entity.Movimentacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovimentacaoRepository extends JpaRepository<Movimentacao, Long> {
}
