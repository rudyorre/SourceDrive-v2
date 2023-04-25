import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from '../../components/index'

import Course from '../../components/container/Course/Course';
import { courses } from '../../constants/courses';

const inter = Inter({ subsets: ['latin'] })

const CoursesPage = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      <Navbar />
      <div className="section" id="courses">
        <div className="text-center">
          <div className="sm:text-3xl text-2xl font-bold mb-5">
            Course <span className="text-Teal">Catalog</span>
          </div>
          <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Whether you&apos;re interested in building software applications, developing 
          complex algorithms, understanding how computer systems work, or exploring 
          the foundational principles of computer science, we&apos;ve got you covered. 
          Mix and match courses from different categories to create a personalized learning 
          path that suits your unique interests and career goals.
          </p>
        </div>
        
        <div className="text-xl font-bold mt-32">Course Offerings</div>
        <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-12 flex-wrap" style={{  }}>
          {courses.map((course) => {
            return <div className="w-[20%]" key={course.id}><Course key={course.id} {...course} /></div>;
          })}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
