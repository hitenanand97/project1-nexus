import React, { useState } from 'react';
import '../App.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!isEmailValid()) {
        setError('Invalid email address');
        return;
      }
    if (email === 'hitenanand97@gmail.com' && password === 'anand@1427') {
      setError('');
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='login'>
      <h2 className='toplogin'>Login</h2>
      <form>
        <label>
          Email:
          <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      
    </div>
  );
};

export default LoginForm;
