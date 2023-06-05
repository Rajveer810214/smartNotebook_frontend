import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
function ForgotPassword(props) {
    const [loading, setLoading] = useState(false); // New loading state

    const {showAlert}=props;
  const [credentials, setCredentials] = useState({ email: '',newPassword: '' });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch('https://smartnotebook-backend.onrender.com/api/auth/updatepassword', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({email:credentials.email,newPassword:credentials.newPassword})
    });
      const json = await response.json();
      setLoading(false)
    //   console.log(json);
      if (json.success) {
        showAlert('You have successfully updated your password','success');
        localStorage.setItem('token', json.authToken)
        navigate('/');
      } else {
        showAlert('Invalid credentials','danger');
      }
    } catch (error) {
    //   console.error(error);
      showAlert('An error occurred. Please try again later.','danger');
    }
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]:e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: '-43px' }}>
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Forgot Password</h1>
          <div className="form-group my-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              value={credentials.email}
              name="email"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="newPassword">Password</label>
            <input
              type="password"
              className="form-control"
              value={credentials.password}
              required
              minLength={5}
              name="newPassword"
              id="newPassword"
              placeholder="Enter New Password"
              onChange={handleChange}
            />
          </div>
          {loading ? ( // Render the spinner when loading is true
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <button type="submit" className="login my-3"  style={{borderRadius:"6px"}}>
            Update Password
          </button>
        )}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
