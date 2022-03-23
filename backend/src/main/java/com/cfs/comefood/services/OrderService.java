package com.cfs.comefood.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cfs.comefood.dto.OrderDTO;
import com.cfs.comefood.dto.ProductDTO;
import com.cfs.comefood.entities.Order;
import com.cfs.comefood.entities.OrderStatus;
import com.cfs.comefood.entities.Product;
import com.cfs.comefood.exceptions.DatabaseException;
import com.cfs.comefood.exceptions.ResourceNotFoundException;
import com.cfs.comefood.repositories.OrderRepository;
import com.cfs.comefood.repositories.ProductRepository;


@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly= true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.finderOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
		
		for (ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		order = repository.save(order);
		return new OrderDTO(order);
	}
	
	@Transactional(readOnly = true)
	public OrderDTO findById(Long id) {
		Order order = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Id not found " + id));
		return new OrderDTO(order);	
	}
	
	@Transactional
	public void deleteById(Long id) {
		try {
			repository.deleteById(id);
			}
			catch (EmptyResultDataAccessException e) {
				throw new ResourceNotFoundException("Id not found! " +id);
			}
			
			catch (DataIntegrityViolationException e) {
				throw new DatabaseException("Integrity Violation");
			}
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
		Order order = repository.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = repository.save(order);
		return new OrderDTO(order);
		
	}

}
