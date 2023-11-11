import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">

    
            <h2 className="mt-5">S C H O O L  E D U C A T I O N</h2>
            <p className="mr-5 "><b style={{fontSize:"20px"}}>Higher Secondary Course</b></p>
            <p class="lead mb-3">
              <div>Percentage Of Marks -57.5%</div>
              <div>Year Of Passing -2019</div>

            
            </p>
            <p className="mr-5 "><b style={{fontSize:"20px"}}>Secondary School Leaving Certificate</b></p>
            <p class="lead mb-5">
              <div>Year Of Passing -2017</div>
              <div>Percentage Of Marks -83.5%</div>

            
            </p>
            <div class="social-icons">
            <a class="social-icon" href="https://www.linkedin.com/in/yuva-ganesh-b04a9b208">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/Yuvaganesh1111">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">University of Colorado Boulder</h3>
                <div class="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science - Web Development Track</div>
                <p>GPA: 3.23</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2006 - May 2010</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">James Buchanan High School</h3>
                <div class="subheading mb-3">Technology Magnet Program</div>
                <p>GPA: 3.56</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2002 - May 2006</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;
