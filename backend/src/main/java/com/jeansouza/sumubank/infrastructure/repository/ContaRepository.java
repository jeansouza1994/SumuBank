package com.jeansouza.sumubank.infrastructure.repository;

import com.jeansouza.sumubank.business.entity.Conta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContaRepository extends JpaRepository<Conta, Long> {

    Optional<Conta> findByNumero(String numero);

    Optional<Conta> findByUsuarioId(Long Id);

    Optional<Conta> findByUsuarioCpf(String cpf);

    Optional<Conta> findByUsuarioEmail(String email);

}
