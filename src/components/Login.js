import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { showAlert } = props;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://smartnotebook-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const json = await response.json();

      if (json.success) {
        showAlert("You are successfully logged in", 'success');
        localStorage.setItem('token', json.authToken);
        navigate('/');
      } else {
        showAlert("Please try to login with the correct credentials", 'danger');
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className='container' style={{ marginTop: "-13px" }}>
        <form onSubmit={handleSubmit}>
          <h1 className='text-center'>Login</h1>
          <div className="form-group my-3">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" value={credentials.email} name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" value={credentials.password} name="password" id="password" placeholder="Password" onChange={onChange} />
          </div>
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <button type="submit" className="login my-3 text-center" style={{ borderRadius: "6px" }}>Login</button>
          )}
        </form>
        <h5 className='text-center'><Link to='/forgotpassword'>Forgot password?</Link></h5>
      </div>
    </>
  );
}

export default Login;
