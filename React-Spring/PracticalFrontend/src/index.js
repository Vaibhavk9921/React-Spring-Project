import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import StudentTable from './StudentTable';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/students" element={<StudentTable />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
