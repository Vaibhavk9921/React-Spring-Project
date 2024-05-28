package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
	@Autowired
	StudentRepository repo;

	public String create(Student stud) {
		repo.save(stud);
		return "Data Inserted!!!";
	}

	public String update(int id, String name, long phone, String email) {
		Student stud = repo.findById(id).get();
		stud.setName(name);
		stud.setPhone(phone);
		stud.setEmail(email);
		repo.save(stud);
		return "Data Updated!!!!";
	}

	public String delete(int id) {
		Student stud = repo.findById(id).get();

		repo.delete(stud);
		return "Data Deleted!!!!";
	}

	public List<Student> getAll() {
		List<Student> studList = repo.findAll();
		return studList;
	}
}
