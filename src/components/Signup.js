import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Signup(props) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    Cpassword: ""
  });
  const [loading, setLoading] = useState(false);
  const { showAlert } = props;
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (credentials.password === credentials.Cpassword) {
      try {
        const response = await fetch('https://smartnotebook-backend.onrender.com/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password
            // Cpassword: credentials.Cpassword
          })
        });
        const json = await response.json();

        if (json.success) {
          setLoading(false);
          localStorage.setItem('token', json.authToken);
          showAlert("You have successfully signed up", 'success');
          navigate('/');
        } else {
          setLoading(false);
          showAlert("Invalid Credentials", 'danger');
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    } else {
      setLoading(false);
      showAlert("Password does not match", 'danger');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className='container' style={{ marginTop: "-43px" }}>
        <form onSubmit={handleSubmit}>
          <h1 className='text-center'>Sign Up</h1>
          <div className="form-group my-2">
            <label htmlFor="Name">Name</label>
            <input type="text" className="form-control" value={credentials.name} name="name" id="name" placeholder="Enter your name" onChange={onChange} required minLength={5} />
          </div>
          <div className="form-group my-2">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" value={credentials.email} name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" required onChange={onChange} />
          </div>
          <div className="form-group my-2">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" value={credentials.password} name="password" id="password" placeholder="Password" required minLength={5} onChange={onChange} />
          </div>
          <div className="form-group my-2">
            <label htmlFor="Cpassword">Confirm Password</label>
            <input type="password" className="form-control" value={credentials.Cpassword} name="Cpassword" id="Cpassword" placeholder="Confirm Password" required minLength={5} onChange={onChange} />
          </div>
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <button type="submit" className="login my-3">Sign Up</button>
          )}
        </form>
      </div>
    </>
  );
}

export default Signup;
