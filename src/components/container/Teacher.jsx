import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";
const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            At SourceDrive, we&apos;re always on the lookout for passionate and knowledgeable 
            instructors to help us expand our course offerings. If you&apos;re an expert in 
            computer science or software engineering and would like to share your knowledge 
            with our community, we invite you to become an instructor for our platform. As a 
            free and open-source platform, your course will instantly gain visibility and bring 
            awareness to your expertise in the field. Join us in our mission to make quality 
            computer science education accessible to all!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Start Teaching
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Contribute via <span className="text-Teal">Open Source</span>
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          We welcome contributions from developers and educators alike to help 
          improve and grow our platform. Whether you&apos;re a seasoned coder or an expert in computer 
          science education, your contributions can make a difference. Help us organize and expand 
          our catalog of courses or contribute to the source code of our website to create a better 
          user experience. Even if you&apos;re new to open source, we will guide you step-by-step.
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </div>
      </div>
      {/* <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div> */}
    </div>
  );
};

export default Teacher;
