import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        
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

        
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;
