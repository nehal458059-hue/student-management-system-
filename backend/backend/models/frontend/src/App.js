import React, { useEffect, useState } from 'react';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/students')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h2>Student Management System</h2>
      <ul>
        {students.map(s => (
          <li key={s._id}>{s.name} - {s.department}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
