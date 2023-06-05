import React from 'react'
import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.css';

export default function Footer() {
  return (
    // <!-- Footer -->
    <>
<footer className="text-center text-lg-start bg-white text-muted" style={{fontFamily:"Uni Sans"}}>

  {/* <!-- Section: Social media --> */}
  <section className=" d-flex justify-content-center justify-content-lg-between p-4 border-bottom socials">
    {/* <!-- Left --> */}
    <div className="me-5  d-none d-lg-block social">
    </div>
  
    <div>
      <Link target='_blank' to="https://www.facebook.com/profile.php?id=100023777195580" className="me-4 link-secondary">
        <i className="fab fa-facebook-f"></i>
      </Link>
      <Link target='_blank' to="https://twitter.com/Rajveer810214?t=EOa00qzs2O9t9YfW4x4CpQ&s=08" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </Link>
      <Link target='_blank' to="https://www.instagram.com/rajveer_sidhu_12/" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link target='_blank' to="https://www.linkedin.com/in/rajveer-singh-sidhu-534a25232" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </Link>
      <Link target='_blank'  to="https://github.com/Rajveer810214" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </Link>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="footerAll">
    <div className="container text-center text-md-start mt-5" style={{width:"100%"}}>
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Skills that i have
          </h6>
          <p>
            These are some of the technologies and languages in which i am skilled
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Technologies 
          </h6>
          <p>
            <Link to="#!" className="text-reset">HTML, CSS, JavaScript</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">React</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Node js</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Strapi</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Android Development</Link>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Languages
          </h6>
          <p>
            <Link to="#!" className="text-reset">C</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">C++</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Java</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Python</Link>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> #57, Near Civil Hospital Ahmedgarh</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            <Link to="mailto:rajveer810214@gmail.com"> rajveer810214@gmail.com</Link>

     
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i><Link to="tel:+917380263317"> +91 73802-63317</Link></p>
          <p><i className="fas fa-print me-3 text-secondary"></i> <Link to="tel:+917380263317"> +91 167 529 2194</Link></p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4 footerName" style={{backgroundColor:"rgba(0, 0, 0, 0.025)"}}>
    Made by: 
    <Link to="https://rajveersidhu.vercel.app"><span className="text-reset fw-bold" style={{textDecoration:"none"}}>By 💞 Rajveer Singh</span></Link>
  </div>
  {/* <!-- Copyright --> */}
</footer>
</>
// <!-- Footer -->
  )
}
