import './AddStudent.css'; // Import the CSS file
import { useState } from "react";

function AddStudent() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleMobile = (event) => {
    setMobile(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(email, name, lastName, mobile);
    fetch('http://127.0.0.1:8000/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        last_name: lastName,
        email: email,
        mobile: mobile,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Student added:', data);
        setEmail('');
        setName('');
        setLastName('');
        setMobile('');
        window.location.href = '/dashboard'; // Redirect to the students page after adding a student
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div className="add-student-container">
      <h2 className="form-title">Add Student</h2>
      <form onSubmit={submit} className="add-student-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            value={mobile}
            onChange={handleMobile}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary submit-button">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;