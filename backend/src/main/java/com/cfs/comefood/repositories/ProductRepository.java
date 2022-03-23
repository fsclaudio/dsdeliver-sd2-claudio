package com.cfs.comefood.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cfs.comefood.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	List<Product> findAllByOrderByNameAsc();

}
