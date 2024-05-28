package com.example.demo;

import org.springframework.data.repository.ListCrudRepository;

public interface StudentRepository extends ListCrudRepository<Student, Integer> {

}
