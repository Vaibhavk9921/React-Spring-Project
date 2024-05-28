
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';

function StudentTable() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:8080/get');
    setStudents(response.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/delete/${id}`);
    fetchStudents();
  };

  const saveStudent = async (student) => {
    if (student.id) {
      await axios.put('http://localhost:8080/update', null, {
        params: student
      });
    } else {
      await axios.post('http://localhost:8080/add', null, {
        params: student
      });
    }
    fetchStudents();
    setEditingStudent(null);
  };

  return (
    <div>
      <h1>Student Database</h1>
      <button onClick={() => setEditingStudent({})}>Add New Student</button>
      {editingStudent && (
        <StudentForm student={editingStudent} onSave={saveStudent} />
      )}
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.address}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => setEditingStudent(student)}>Update</button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;