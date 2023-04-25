import React from "react";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={'./images/about.jpg'} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Nothing hidden.<br/>
            <span className="text-Teal">Everything</span> is free.
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
          Our collection of free courses from prestigious 
          universities like MIT, Stanford, and Princeton 
          provides the same level of education found in an undergraduate 
          degree, without the hassle of general education requirements.
          </p>
          {/* <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
