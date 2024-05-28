import React, { useState, useEffect } from 'react';
function StudentForm({ student, onSave }) {
  const [formData, setFormData] = useState({
    id: student.id,
    name: student.name,
    phone: student.phone,
    address: student.address,
    email: student.email
  })
  useEffect(() => {
    setFormData({
      id: student.id,
      name: student.name ,
      phone: student.phone ,
      address: student.address ,
      email: student.email
    })
  }, [student])
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Enter Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Enter Address"
        value={formData.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default StudentForm;
