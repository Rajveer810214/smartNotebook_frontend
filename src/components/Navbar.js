import React,{useState,useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
export default function Navbar() {
  let location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Check the login status on component mount
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  });
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false); // Update the login status
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{fontFamily:"monsteerat"}}>Smart NoteBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Smart NoteBook   </h5>
           
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
<Link className={`nav-link ${location.pathname == "/" ? "active" : ""}`} aria-current="page" to="/"> <i className="fa-solid fa-house "></i> Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname == "/about" ? "active" : ""}`} to="/about"><i className="fa-solid fa-address-card  "></i>  About</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname == "/profile" ? "active" : ""}`} to="/profile"><i class="fa-regular fa-user"></i>  Profile</Link>
                </li>
               
      {isLoggedIn ? (

        <li className="nav-item">
        
          
        <Link to="/login" className={`nav-link ${location.pathname == "/login" ? "active" : ""}`} aria-current="page" onClick={handleLogout} style={{textDecoration:"none"}}>
        <i className={`fa-solid fa-arrow-right-from-bracket nav-link ${location.pathname == "/login" ? "active" : ""}`}></i>LogOut
        </Link>
      </li>
        
      ) : (
        <span>
        <li className="nav-item d-flex">
        <i className={`fa-solid fa-right-to-bracket my-2 nav-link ${location.pathname == "/signup" ? "active" : ""}`}>  </i>
          <Link to="/signup" className={` my-1 nav-link mx-1 ${location.pathname == "/signup" ? "active" : ""}`} style={{textDecoration:'none',width:"20px"}}>  SignUp</Link>
                </li>
                <li className="nav-item d-flex"> 
                <i className={`fa-solid fa-right-to-bracket my-2 nav-link ${location.pathname == "/login" ? "active" : ""}`}>  </i>

          <Link to="/login" className={` mx-1 my-1 nav-link ${location.pathname == "/login" ? "active" : ""}`} style={{textDecoration:'none',width:"20px"}}>Login</Link>
                </li>
        </span> 
      )}
      </ul>
    

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
