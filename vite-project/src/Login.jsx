import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const response = await fetch('http://127.0.0.1:8000/api/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if(response.ok){
        const data = await response.json();
        console.log('Login successful:', data);
        // Store the token in local storage
        localStorage.setItem('token', data.token);
        // Redirect to the dashboard
        window.location.href = '/dashboard';
      }else{
        const errorData = await response.json();
        console.error('Failed to login', errorData);
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '30rem', margin: 'auto', height: 'auto' }}>
      <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
    </div>
    
  );
}

export default Login;