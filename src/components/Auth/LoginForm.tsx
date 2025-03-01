import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Mock authentication - in a real app, this would be an API call
    if (email === 'demo@example.com' && password === 'password') {
      // Store auth state in localStorage for persistence
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({
        id: '123',
        email: 'demo@example.com',
        name: 'Demo User',
        points: 1980
      }));
      
      onLoginSuccess();
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try demo@example.com / password');
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login to GeoGuide</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="login-button">Login</button>
        
        <div className="form-footer">
          <p>Don't have an account? <span onClick={() => navigate('/signup')} className="signup-link">Sign up</span></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;