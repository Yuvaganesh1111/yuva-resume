import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Yuva
              <span class="text-primary">Ganesh</span>
            </h1>
            <div class="subheading mb-5">
             
              <a href="mailto:demo@email.com">
                
              </a>
            </div>
            <p class="lead mb-5">
              👋I'm an aspiring professional eager
              to launch my career within a dynamic company that values growth,
              innovation, and mutual collaboration. My passion lies in utilizing
              technology to solve complex problems and create remarkable user
              experiences. I bring a blend of technical skills and a fervent
              curiosity for learning, making me a valuable asset to any team.
            </p>
            <div class="social-icons">
              <a
                class="social-icon"
                href="https://www.linkedin.com/in/yuva-ganesh-b04a9b208"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/Yuvaganesh1111">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

       
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Sethu Institute of Technology</h3>
                <div class="subheading mb-3">Bachelor of Engineering</div>
                <div>Computer Science And Engineering</div>
                <p>CGPA: 8.43</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Jun 2019 - May 2023</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">sairam Metric High Sec School</h3>
                <div class="subheading mb-3">Higher Secondary Course</div>
                <p>Percentage Of Marks -58%</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Jul 2018 - May 2019</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">sairam Metric High Sec School</h3>
                <div class="subheading mb-3">Secondary School Leaving Certificate</div>
                <p>Percentage Of Marks -83%</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Jul 2017 - May 2018</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              
              <li class="list-inline-item">
                <i class="fab fa-less"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li>
            </ul>
            <div class="subheading mb-3">Techinical skills</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                React js
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Nodejs
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Mongodb
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Javascript
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Structure Query Language(Mysql)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Java
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                C Program
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              When I'm not immersed in the world of technology, you'll find me
              exploring the vast landscapes of literature, from fiction to
              non-fiction. I also find solace in yoga and meditation, nurturing
              a balanced and focused mindset.
            </p>
            <p class="mb-0">
              I follow a number of sci-fi and fantasy genre movies and
              television shows,I spend a large amount of my free time exploring
              the latest technology advancements in the web development world.
            </p>
          </div>
        </section>
        <hr class="m-0" />

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
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
