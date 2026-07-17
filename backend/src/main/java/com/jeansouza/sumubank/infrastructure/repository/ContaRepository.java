package com.jeansouza.sumubank.infrastructure.repository;

import com.jeansouza.sumubank.business.entity.Conta;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContaRepository extends CrudRepository<Conta, Integer> {
}
