import React from 'react';
import notebook from '../image/notebook.jpg'
function About() {
  return (
    <div className="container" style={{ marginTop: '-93px' }}>
      <h1 className="text-center">About SmartNoteBook</h1>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <p className="text-center">
            SmartNotebook is a web application built using the MERN stack (MongoDB, Express.js, React, and Node.js)
            that allows you to save and manage your notes conveniently. With SmartNotebook, you can organize your
            thoughts, jot down important information, and keep track of your ideas in a user-friendly digital notebook.
          </p>
          <div className="col-lg-8 offset-lg-2">
          <img src={notebook} alt="" className="img-fluid" />
          <h3>Key Features of SmartNotebook:</h3>
          <ul>
            <li>
              <strong>Note Management:</strong> SmartNotebook provides a seamless interface to create, view, update, and
              delete notes. You can easily add new notes, edit existing ones, and remove notes when they are no longer
              needed.
            </li>
            <li>
              <strong>Categorization with Tags:</strong> You can categorize your notes using tags. Tags help you organize
              your notes into different topics or categories, making it easier to search and retrieve specific information
              when needed.
            </li>
            <li>
              <strong>User Authentication:</strong> SmartNotebook includes a secure user authentication system. You can
              register an account, log in with your credentials, and enjoy a personalized note-taking experience. Your
              notes are securely associated with your account, ensuring privacy and data integrity.
            </li>
            <li>
              <strong>Responsive Design:</strong> SmartNotebook is designed to be responsive and user-friendly across
              different devices and screen sizes. Whether you are accessing it from your desktop, tablet, or smartphone,
              you can enjoy a consistent and optimized note-taking experience.
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
