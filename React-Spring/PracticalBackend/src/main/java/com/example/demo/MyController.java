package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class MyController {
	@Autowired
	StudentService service;

	@PostMapping("/add")
	public String addStudent(@RequestParam("name") String name, @RequestParam("phone") long phone,
			@RequestParam("address") String address, @RequestParam("email") String email) {
		Student st = new Student();
		st.setName(name);
		st.setAddress(address);
		st.setEmail(email);
		st.setPhone(phone);
		service.create(st);
		return "Data Inserted";
	}

	@PutMapping("/update")
	public void updateData(@RequestParam("id") int id, @RequestParam("name") String name,
			@RequestParam("phone") long phone, @RequestParam("address") String address,
			@RequestParam("email") String email) {
		service.update(id, name, phone, email);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteData(@PathVariable("id") int id) {
		service.delete(id);
	}

	@GetMapping("/get")
	public List<Student> getAll() {
		return (List<Student>) service.getAll();
	}
}
