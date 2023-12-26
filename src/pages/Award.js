import React from "react";
import Header from "../components/Header";

const Award = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                During my internship, I acquired knowledge in Node.js
                technologies and successfully developed an eCommerce API
                utilizing Node.js, Express.js, MongoDB, and the Postman tool.
              </li>
            </ul>
            <h2 class="mb-5 mt-5">Project</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Created a Book store Website Using MERN stack
                <ul class="fa-ul mb-0">
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    <h4 className="mt-3">Backend Development:</h4>
                    Set up a Node.js server using Express.js. Connect to the
                    MongoDB database to store and retrieve data. Define API
                    routes for handling CRUD (Create, Read, Update, Delete)
                    operations on books, authors, and other entities.
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    <h4 className="mt-3">Frontend Development:</h4>
                    Create React components for different parts of the website,
                    such as the book listing, individual book pages, user
                    authentication, and shopping cart. Use React Router for
                    navigation between different pages. Implement state
                    management, possibly using tools like Redux or the React
                    Context API. Make asynchronous requests to the backend API
                    to fetch and update data.
                  </li>
                  
                  
                </ul>
              </li>
              <li className="mt-3">
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Created a real-time chat application
                <ul class="fa-ul mb-0">
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    <h4 className="mt-3">Backend Development:</h4>
                    Implemented Socket.io for bidirectional communication, 
                    enabling instant updates and notifications for an interactive
                     and engaging chat.Set up a Node.js server using Express.js. 
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    <h4 className="mt-3">Frontend Development:</h4>
                    Ensured the app is accessible on all devices, providing 
                    a smooth user experience from desktop to mobile.
                  </li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Award;
